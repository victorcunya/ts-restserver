import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        return res.json({ users });
    } catch (error) {
        console.log(error);
        res.json({ msg: 'error' });
    }

}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
        return res.json({ user })
    }
    res.status(404).json({ msg: 'user not found con ID ' + id });
}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existUser = await User.findOne({
            where: {
                email: body.email
            }
        });
        if (existUser) {
            return res.status(404).json({
                msg: 'user already exists'
            })
        }
        const user = await User.create(body);
        res.status(201).json({
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'error creating user' })
    }

}

export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'user not found with ID: ' + id
            });
        }
        await user.update(body);
        res.json({ user });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        })
    }

}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'user not found with ID: ' + id
            });
        }
        await user.update({ state: 0 });
        res.json({ user });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        })
    }
}