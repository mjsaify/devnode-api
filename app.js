import Express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/index.js';


const app = Express();
app.use(cors());
app.use(cookieParser());
app.use(Express.json({ limit: '16kb' }))
app.use(Express.urlencoded({ extended: true, limit: '16kb' }));


// routes
app.use("/api", router);
export { app };