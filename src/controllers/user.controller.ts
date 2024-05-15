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