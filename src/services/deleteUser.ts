
import { writeFileJson } from '../helpers';
import { IUser } from '../interfaces/users';
import getAllUsers from './getAllUsers';

const deleteUser = async (user: IUser | null) => {
  try {
    if (!user) {
      return null;
    }

    const listUsers: IUser[] = await getAllUsers();
    const isWriteFile = await writeFileJson(process.env.FILE_NAME as string, [...listUsers, user]);

    return isWriteFile;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default deleteUser;
