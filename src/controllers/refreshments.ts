import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const getAllRefreshments = async (req: Request, res: Response): Promise<void> => {
  try {
    const refreshments = await prisma.refreshment.findMany();
    res.status(200).json(refreshments);
  } catch (error) {
    console.error("Error fetching refreshments:", error);
    res.status(500).json({ error: "Failed to fetch refreshments" });
  }
};

export const addRefreshment = async (req: Request, res: Response): Promise<void> => {
  const { name, price, size } = req.body;

  try {
    const newRefreshment = await prisma.refreshment.create({
      data: {
        name,
        price,
        size,
      },
    });
    res.status(201).json({ message: 'Refreshment added successfully', refreshment: newRefreshment });
  } catch (error) {
    console.error("Error adding refreshment:", error);
    res.status(500).json({ error: "Failed to add refreshment" });
  }
};

export const updateRefreshment = async (req: Request, res: Response): Promise<void> => {
  const { refreshmentid } = req.params;
  const { name, price, size } = req.body;

  try {
    const updatedRefreshment = await prisma.refreshment.update({
      where: { refreshmentid: Number(refreshmentid) },
      data: {
        ...(name && { name }),
        ...(price && { price }),
        ...(size && { size }),
      },
    });
    res.status(200).json({ message: 'Refreshment updated successfully', refreshment: updatedRefreshment });
  } catch (error) {
    console.error("Error updating refreshment:", error);
    res.status(500).json({ error: "Failed to update refreshment" });
  }
};

export const deleteRefreshment = async (req: Request, res: Response): Promise<void> => {
  const { refreshmentid } = req.params;

  try {
    await prisma.refreshment.delete({
      where: { refreshmentid: Number(refreshmentid) },
    });
    res.status(200).json({ message: 'Refreshment deleted successfully' });
  } catch (error) {
    console.error("Error deleting refreshment:", error);
    res.status(500).json({ error: "Failed to delete refreshment" });
  }
};