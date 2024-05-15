import { Request, Response } from 'express';
import { User } from '../entities/User';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName } = req.body;
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;

        await user.save();
        return res.json(user);
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id: parseInt(id) } });
        return res.json(user);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName } = req.body;
        const { id } = req.params;
        const user = await User.findOne({ where: { id: parseInt(id) } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.firstName = firstName;
        user.lastName = lastName;

        await user.save();
        return res.json(user);
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id: parseInt(id) } });
        if (!user) return res.status(404).json({ message: 'User not found' });
        User.delete({ id: parseInt(id) });
        return res.json(user);
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
}