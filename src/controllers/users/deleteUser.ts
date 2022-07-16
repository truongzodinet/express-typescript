import { Request, Response } from 'express';
import { IDeleteUser } from '../../interfaces/users';
import userServices from '../../services';

const deleteUser = async (req: Request, res: Response) => {
  try {
    const body: IDeleteUser = req.body;
    const { id } = body;

    res.send('');
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default deleteUser;
