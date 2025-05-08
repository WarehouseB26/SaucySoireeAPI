import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// Get all deserts
export const getAllDeserts = async (req: Request, res: Response): Promise<void> => {
  try {
    const deserts = await prisma.desert.findMany({
      include: {
        ingredients: true, // Include related ingredients for each desert
      },
    });
    res.status(200).json(deserts);
  } catch (error) {
    console.error("Error fetching deserts:", error);
    res.status(500).json({ error: "Failed to fetch deserts" });
  }
};

// Add a new desert
export const addDesert = async (req: Request, res: Response): Promise<void> => {
  const { name, price, ingredients } = req.body;

  try {
    const newDesert = await prisma.desert.create({
      data: {
        name,
        price,
        ingredients: {
          connect: ingredients.map((ingredientId: number) => ({ desertingredientid: ingredientId })),
        },
      },
    });
    res.status(201).json({ message: 'Desert added successfully', desert: newDesert });
  } catch (error) {
    console.error("Error adding desert:", error);
    res.status(500).json({ error: "Failed to add desert" });
  }
};

// Update an existing desert
export const updateDesert = async (req: Request, res: Response): Promise<void> => {
  const { desertid } = req.params;
  const { name, price, ingredients } = req.body;

  try {
    const updatedDesert = await prisma.desert.update({
      where: { desertid: Number(desertid) },
      data: {
        ...(name && { name }),
        ...(price && { price }),
        ...(ingredients && {
          ingredients: {
            set: [], // Clear existing ingredients
            connect: ingredients.map((ingredientId: number) => ({ desertingredientid: ingredientId })),
          },
        }),
      },
    });
    res.status(200).json({ message: 'Desert updated successfully', desert: updatedDesert });
  } catch (error) {
    console.error("Error updating desert:", error);
    res.status(500).json({ error: "Failed to update desert" });
  }
};

// Delete a desert
export const deleteDesert = async (req: Request, res: Response): Promise<void> => {
  const { desertid } = req.params;

  try {
    await prisma.desert.delete({
      where: { desertid: Number(desertid) },
    });
    res.status(200).json({ message: 'Desert deleted successfully' });
  } catch (error) {
    console.error("Error deleting desert:", error);
    res.status(500).json({ error: "Failed to delete desert" });
  }
};