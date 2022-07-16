const bcrypt = require('bcrypt');

const SALT = process.env.SALT_ROUND || 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

export const hashPassword = async (password: string) => bcrypt.hashSync(password, +SALT);

export const comparePassword = async (password: string, hash: string) => bcrypt.compareSync(password, hash);