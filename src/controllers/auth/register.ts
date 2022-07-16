import { Request, Response } from 'express';
import { IRegisterUser, IUser } from '../../interfaces/users';
import userServices from '../../services';

const register = async (req: Request, res: Response) => {
  try {
    const body: IRegisterUser = req.body;
    const user: IUser | null = body.user ?? null;

    const isCreateUser = await userServices.createUser(user);

    res.send(isCreateUser);
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default register;
