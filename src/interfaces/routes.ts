import { Router } from 'express';

export interface Routes {
  path?: string;
  router: Router;
}

export interface IOrigin {
  err?: Error;
  allow?: boolean;
}
