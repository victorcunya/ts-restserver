import express, { Application } from 'express';
import userRouter from '../routes/user';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPath = {
        users: '/api/users',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Authentication successful');
        } catch (error) {
            console.log('Authentication failed', error);
            throw new Error('fallo conexion');
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json()); // Parse body
        this.app.use(express.static('public')); //carpeta publica para contenido estático.
    }

    routes() {
        this.app.use(this.apiPath.users, userRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port!!!!: ' + this.port);
        })
    }
}

export default Server;
