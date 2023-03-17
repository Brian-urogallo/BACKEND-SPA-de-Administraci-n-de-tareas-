import express, { Application, Request, Response }from 'express';
import cors from 'cors';
import routerTask from '../routes/task';
import connectDB from '../db/connection';


class  Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middleWare();
        connectDB();
        this.routes();
        
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Aplicacion corriendo en el ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) =>{
            res.json({
                msg: 'la APi esta lista para guardar datos'
            })
        })
        this.app.use('/api/tareas', routerTask)
    }

    middleWare(){
        //parse body
        this.app.use(express.json())

        //cors config
        this.app.use(cors());
    }

   

}

export default Server;