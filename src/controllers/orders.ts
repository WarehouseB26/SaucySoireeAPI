import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const getAllOrders = async (req: Request, res: Response) => {
    try {
      const orders = await prisma.order.findMany({
        include: {
          pizzas: true,
          deserts: true,
          refreshments: true,
          status: true,
        },
      });
      res.status(200).json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  };