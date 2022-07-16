import { readFileJson } from '../helpers';
import { IUser } from '../interfaces/users';

const getUser = async (
  name: string = '',
  password: string = '',
): Promise<IUser[] | IUser | null> => {
  try {
    const listUsers: IUser[] = await readFileJson(process.env.FILE_NAME as string);

    if (!name && !password) {
      return listUsers;
    } else {
      const user: IUser | undefined = listUsers.find(
        (user: IUser) => user.name === name && user.password === password,
      );
      return user || null;
    }
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default getUser;
