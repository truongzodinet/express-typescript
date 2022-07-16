import * as fs from 'fs';
import * as path from 'path';
import { IUser } from '../interfaces/users';

export const writeFileJson = async (fileName: string, listUsers: IUser[]) => {
  try {
    const dataUsers = JSON.stringify(listUsers);

    fs.writeFileSync(path.join(__dirname, `../databases/${fileName}.json`), dataUsers);

    return true;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};
