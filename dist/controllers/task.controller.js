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
exports.updateTask = exports.postTask = exports.deleteTask = exports.getTask = exports.getTasks = void 0;
const task_1 = __importDefault(require("../models/task"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.find();
        res.json(task);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.findById(req.params.id);
        if (!task) {
            res.status(404).json({ msg: 'No existe la tarea' });
        }
        res.json(task);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
});
exports.getTask = getTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let task = yield task_1.default.findById(req.params.id);
        if (!task) {
            res.status(404).json({ msg: 'No existe la tarea' });
            return;
        }
        yield task_1.default.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Tarea eliminada con exito' });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
});
exports.deleteTask = deleteTask;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let task;
        task = new task_1.default(req.body);
        yield task.save();
        res.send(task);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
});
exports.postTask = postTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, dateInit, dateEnd } = req.body;
        let task = yield task_1.default.findById(req.params.id);
        if (!task) {
            res.status(404).json({ msg: 'No existe la tarea' });
            return;
        }
        task.title = title;
        task.description = description;
        task.dateInit = dateInit;
        task.dateEnd = dateEnd;
        task = yield task_1.default.findOneAndUpdate({ _id: req.params.id }, task, { new: true });
        res.json(task);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
});
exports.updateTask = updateTask;
