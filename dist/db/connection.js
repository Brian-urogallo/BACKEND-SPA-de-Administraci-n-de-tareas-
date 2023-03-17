"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = process.env.MONGODB_URL || `mongodb+srv://admin123:
      ${process.env.MONGO_DB_PASS}@tasks.gfc23cq.mongodb.net/?retryWrites=true&w=majority/taskControll`;
        yield mongoose_1.default.connect(url);
        console.log('Conexión a la base de datos exitosa');
    }
    catch (err) {
        console.error('Error al conectar a la base de datos', err);
    }
});
exports.default = connectDB;
