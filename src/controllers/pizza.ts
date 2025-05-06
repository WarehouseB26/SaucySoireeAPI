import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const GetPizzas = async (req: Request, res: Response): Promise<void> => {
    try {
        const pizzas = await prisma.pizza.findMany({
            include: {
                ingredients: true,
                ratings: true,
                store: true,
            },
        });
        res.status(200).json(pizzas);
    } catch (error) {
        console.error('Error fetching pizzas:', error);
        res.status(500).json({ error: 'Failed to fetch pizzas' });
    }
};