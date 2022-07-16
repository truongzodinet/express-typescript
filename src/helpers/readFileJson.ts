import * as fs from 'fs';
import * as path from 'path';
import { IUser } from '../interfaces/users';

export const readFileJson = async (fileName: string) => {
  try {
    const listUsers: string = await fs.readFileSync(
      path.join(__dirname, `../databases/${fileName}.json`),
      'utf8',
    );
    
    const data: IUser[] = JSON.parse(listUsers);

    return data;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};
