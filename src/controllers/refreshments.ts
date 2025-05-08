import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const getAllRefreshments = async (req: Request, res: Response) => {
    try {
        const refreshments = await prisma.refreshment.findMany();
        res.status(200).json(refreshments);
      } catch (error) {
        console.error("Error fetching refreshments:", error);
        res.status(500).json({ error: "Failed to fetch refreshments" });
      }
};