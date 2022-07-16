import { Request, Response } from 'express';
import { IUser } from '../../interfaces/users';
import userServices from '../../services/index';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const listUsers: IUser[] = await userServices.getAllUsers();

    res.send(listUsers);
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default getAllUsers;
