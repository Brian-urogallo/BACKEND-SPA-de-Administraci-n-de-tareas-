import { Request, Response } from "express";
import Task, { ITask } from "../models/task";


export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const task = await Task.find();

        res.json(task);
    } catch (error) {
        console.log(error);

        res.status(500).send('Hubo un error');
    }
}

export const getTask  =  async (req: Request, res: Response): Promise<void> => {
    try {
        const task = await Task.findById(req.params.id);

        if(!task) {
            res.status(404).json({ msg: 'No existe la tarea' });
        }
       
        res.json(task);
        
    } catch (error) {
        console.log(error);

        res.status(500).send('Hubo un error');
    }
}

export const deleteTask  =async (req: Request, res: Response): Promise<void> => {
  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404).json({ msg: 'No existe la tarea' });
      return;
    }

    await Task.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Tarea eliminada con exito' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}


export const postTask = async (req: Request, res: Response): Promise<void> => {
    try {
        let task: ITask;
        task = new Task(req.body);
        await task.save();
        res.send(task);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
  }

export const updateTask  =  async (req: Request, res: Response): Promise<void> => {
    try {
      const { title, description, dateInit, dateEnd } = req.body;
      let task: ITask | null = await Task.findById(req.params.id);
  
      if (!task) {
        res.status(404).json({ msg: 'No existe la tarea' });
        return;
      }
  
      task.title = title;
      task.description = description;
      task.dateInit = dateInit;
      task.dateEnd = dateEnd;
  
      task = await Task.findOneAndUpdate({ _id: req.params.id }, task, { new: true });
      res.json(task);
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
    }
  }