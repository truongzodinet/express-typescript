import express, { Router } from 'express';
import userControllers from '../controllers/users';

const userRoutes: Router = express.Router();

userRoutes.get('/', userControllers.getAllUsers);
userRoutes.get('/:id', userControllers.getUserById);


userRoutes.post('/login', userControllers.login);

userRoutes.post('/register', userControllers.register);

userRoutes.delete('/', userControllers.deleteUser);

export default userRoutes;
