import { Request, Response } from 'express';
import { ILoginUser, IUser } from '../../interfaces/users';
import userServices from '../../services';

const login = async (req: Request, res: Response) => {
  try {
    const body: ILoginUser= req.body;
    const { name, password } = body;

    // const listUsers: IUser[] | IUser | null = await userServices.getUser(
    //   name as string,
    //   password as string,
    // );

    // res.send(listUsers);
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default login;
