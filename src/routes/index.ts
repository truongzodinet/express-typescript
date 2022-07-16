import { Express, Request, Response, NextFunction } from 'express';
import { IError } from '../interfaces/errors';

import userRoutes from './users';

const defaultRouter = (app: Express) => {
  //routes
  app.use('/api/v1/users', userRoutes);

  //404
  app.use((req: Request, res: Response, next: NextFunction) => {
    const error: Error = new Error('Not found');
    next({ ...error, status: 400 });
  });

  //500 - Error handler
  app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).send({
      message: err.message,
      status: err.status || 500,
    });
  });
};

export default defaultRouter;
