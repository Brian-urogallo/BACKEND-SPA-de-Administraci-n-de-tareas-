import mongoose, { Schema, Document, Model } from 'mongoose';

 export interface ITask extends Document {
  title: string;
  description: string;
  dateInit: string;
  dateEnd: string;
}

const TaskSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateInit: {
    type: String,
    required: true,
  },
  dateEnd: {
    type: String,
  }
});

const Task: Model<ITask> = mongoose.model<ITask>('Task', TaskSchema);

export default Task;

