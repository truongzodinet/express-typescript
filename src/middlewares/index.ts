import express, { Express } from 'express';
import { IOrigin } from '../interfaces/routes';
import morgan from "morgan";
import cors from 'cors';
import dotenv from "dotenv";

const whitelist = ['http://localhost:3000', 'http://localhost:5000']
const corsOptions = {
  origin: function (origin:any, callback:any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'), false)
    }
  },
  Credentials: true,
}

const defaultMiddleware = async (app: Express): Promise<void> => {
  dotenv.config({ path: './src/config/.env' });
  app.use(cors());
  app.use(morgan('combined'));
  
};

export default defaultMiddleware;
