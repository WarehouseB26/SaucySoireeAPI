import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const getAllDeserts = async (req: Request, res: Response) => {
    try {
      const deserts = await prisma.desert.findMany({
        include: {
          ingredients: true,
        },
      });
      res.status(200).json(deserts);
    } catch (error) {
      console.error("Error fetching deserts:", error);
      res.status(500).json({ error: "Failed to fetch deserts" });
    }
  };