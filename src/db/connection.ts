import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
      const url = process.env.MONGODB_URL || `mongodb+srv://admin123:
      ${process.env.MONGO_DB_PASS}@tasks.gfc23cq.mongodb.net/?retryWrites=true&w=majority/taskControll`;
      await mongoose.connect(url);
      console.log('Conexión a la base de datos exitosa');
    } catch (err) {
      console.error('Error al conectar a la base de datos', err,);
    }
  };

export default connectDB;