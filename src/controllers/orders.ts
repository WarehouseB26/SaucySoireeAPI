import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
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

export const addOrder = async (req: Request, res: Response): Promise<void> => {
  const { pizzas, deserts, refreshments, statusId, orderinstructions } = req.body;

  try {
    const newOrder = await prisma.order.create({
      data: {
        pizzas: {
          connect: pizzas.map((pizzaId: number) => ({ pizzaid: pizzaId })),
        },
        deserts: {
          connect: deserts.map((desertId: number) => ({ desertid: desertId })),
        },
        refreshments: {
          connect: refreshments.map((refreshmentId: number) => ({ refreshmentid: refreshmentId })),
        },
        statusId,
        orderinstructions,
      },
    });
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

export const updateOrder = async (req: Request, res: Response): Promise<void> => {
  const { orderid } = req.params;
  const { pizzas, deserts, refreshments, statusId, orderinstructions } = req.body;

  try {
    const updatedOrder = await prisma.order.update({
      where: { orderid: Number(orderid) },
      data: {
        ...(pizzas && {
          pizzas: {
            set: [],
            connect: pizzas.map((pizzaId: number) => ({ pizzaid: pizzaId })),
          },
        }),
        ...(deserts && {
          deserts: {
            set: [],
            connect: deserts.map((desertId: number) => ({ desertid: desertId })),
          },
        }),
        ...(refreshments && {
          refreshments: {
            set: [],
            connect: refreshments.map((refreshmentId: number) => ({ refreshmentid: refreshmentId })),
          },
        }),
        ...(statusId && { statusId }),
        ...(orderinstructions && { orderinstructions }),
      },
    });
    res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Failed to update order' });
  }
};

export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
  const { orderid } = req.params;

  try {
    await prisma.order.delete({
      where: { orderid: Number(orderid) },
    });
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Failed to delete order' });
  }
};