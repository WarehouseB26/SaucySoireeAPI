import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// Get all stores
export const GetAllStores = async (req: Request, res: Response): Promise<void> => {
  try {
    const stores = await prisma.pizzaStore.findMany({
      include: {
        pizzas: true, // Include related pizzas for each store
      },
    });
    res.status(200).json(stores);
  } catch (error) {
    console.error('Error fetching stores:', error);
    res.status(500).json({ error: 'Failed to fetch stores' });
  }
};

// Create a new store
export const CreateStore = async (req: Request, res: Response): Promise<void> => {
  const { name, location, phone, email } = req.body;

  try {
    const newStore = await prisma.pizzaStore.create({
      data: {
        name,
        location,
        phone,
        email,
      },
    });
    res.status(201).json({ message: 'Store created successfully', store: newStore });
  } catch (error) {
    console.error('Error creating store:', error);
    res.status(500).json({ error: 'Failed to create store' });
  }
};

// Update an existing store
export const UpdateStore = async (req: Request, res: Response): Promise<void> => {
  const { storeid } = req.params;
  const { name, location, phone, email } = req.body;

  try {
    const updatedStore = await prisma.pizzaStore.update({
      where: { storeid: Number(storeid) },
      data: {
        ...(name && { name }),
        ...(location && { location }),
        ...(phone && { phone }),
        ...(email && { email }),
      },
    });
    res.status(200).json({ message: 'Store updated successfully', store: updatedStore });
  } catch (error) {
    console.error('Error updating store:', error);
    res.status(500).json({ error: 'Failed to update store' });
  }
};

// Delete a store
export const DeleteStore = async (req: Request, res: Response): Promise<void> => {
  const { storeid } = req.params;

  try {
    await prisma.pizzaStore.delete({
      where: { storeid: Number(storeid) },
    });
    res.status(200).json({ message: 'Store deleted successfully' });
  } catch (error) {
    console.error('Error deleting store:', error);
    res.status(500).json({ error: 'Failed to delete store' });
  }
};