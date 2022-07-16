import { readFileJson } from "../helpers";
import { IUser } from "../interfaces/users";

const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const listUsers: IUser[] = await readFileJson(process.env.FILE_NAME as string);

    return listUsers || null;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export default getAllUsers;
