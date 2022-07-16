import { Request, Response } from "express";
import database from "../database/User.json";
import UserModel from "../types/User.type";
import fs from "fs";


const Users: UserModel[] = database;

export const getAllUser = async (req: Request, res: Response) => {
	try {
		res.status(200).json({
			message: "success",
			data: Users.map((user) => {
				return {
					...user,
					password: "",
				};
			}),
		});
	} catch (error) {
		res.status(400).json(error);
	}
};
export const registerUser = async (req: Request, res: Response) => {
	try {
		const user: UserModel = req.body;
		fs.writeFileSync(
			"./src/database/User.json",
			JSON.stringify([
				...Users,
				{ ...user, id: Users.length + 1, password: await hashPassword(user.password) },
			])
		);
		res.status(201).json({
			message: "success",
			data: user,
		});
	} catch (error) {
		res.status(400).json(error);
	}
};
export const getUser = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const user = Users.find((user) => user.id === +id);
		if (!user) {
			return res.status(404).json({
				message: "User not found",
			});
		}
		return res.status(200).json({
			message: "success",
			data: user,
		});
	} catch (error) {
		res.status(400).json(error);
	}
};
export const updateUser = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const user = Users.find((user) => user.id === +id);
		if (!user) {
			res.status(404).json({
				message: "User not found",
			});
		}
		const newUser: UserModel = req.body;
		const index = Users.findIndex((user) => user.id === +id);
		Users[index] = { ...user, ...newUser };
		fs.writeFileSync("./src/database/User.json", JSON.stringify([...Users]));
		res.status(200).json({
			message: "success",
			data: Users[index],
		});
	} catch (error) {
		res.status(400).json(error);
	}
};
export const deleteUser = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const user = Users.find((user) => user.id === +id);
		if (!user) {
			res.status(404).json({
				message: "User not found",
			});
		}
		const index = Users.findIndex((user) => user.id === +id);
		Users.splice(index, 1);
		fs.writeFileSync("./src/database/User.json", JSON.stringify([...Users]));
		res.status(200).json({
			message: "success",
			data: Users[index],
		});
	} catch (error) {
		res.status(400).json(error);
	}
};
