export interface IUser {
    id: number;
	role: string;
	name: string;
	email: string;
	password: string;
	isSubcribed: boolean;
}

export interface ILoginUser {
    name?: string;
    password?: string;
}

export interface IRegisterUser {
    user?: IUser;
}

export interface IDeleteUser {
    id?: number;
}