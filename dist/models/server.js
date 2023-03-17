"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const task_1 = __importDefault(require("../routes/task"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middleWare();
        (0, connection_1.default)();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'la APi esta lista para guardar datos'
            });
        });
        this.app.use('/api/tareas', task_1.default);
    }
    middleWare() {
        //parse body
        this.app.use(express_1.default.json());
        //cors config
        this.app.use((0, cors_1.default)());
    }
}
exports.default = Server;
