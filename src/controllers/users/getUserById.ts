import { Request, Response } from 'express';
import { IUser } from '../../interfaces/users';
import userServices from '../../services/index';

const getUserById = async (req: Request, res: Response) => {
  try {
    const user: IUser = await userServices.getUserById(Number(req.params.id));
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    return res.status(200).json({
        message: "success",
        data: user,
    });
    res.send(user);
  } catch (error: unknown) {
    throw new Error(error as string);
    res.status(400).json(error);
  }
};

export default getUserById;
