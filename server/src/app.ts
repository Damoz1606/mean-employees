import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose, { mongo } from 'mongoose';

import router from './app/routes/employees.router';
import { mongoURI } from './config/database';

const app = express();

//database
mongoose.connect(mongoURI(), {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
.then(db => console.log("Mongo connected"))
.catch(err => console.log(err));

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", router);

//static

export default app;