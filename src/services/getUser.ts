import { readFileJson } from '../helpers';
import { IUser } from '../interfaces/users';

const getUser = async (id:number): Promise<IUser | null> => {
  try {
    const listUsers: IUser[] = await readFileJson(process.env.FILE_NAME as string);
    const user = listUsers.find((user) => user.id === +id);
    return user;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default getUser;
