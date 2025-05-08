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

export const AddNewPizza = async (req: Request, res: Response): Promise<void> => {
    const { name, description, price, ingredients, storeId } = req.body;
  
    try {
      // Create a new pizza
      const newPizza = await prisma.pizza.create({
        data: {
          name,
          description,
          price,
          storeId,
          ingredients: {
            connect: ingredients.map((ingredientId: number) => ({ ingredientid: ingredientId })),
          },
        },
      });
  
      const dummyRatings = [
        { score: 5, comment: 'Delicious!', pizzaId: newPizza.pizzaid },
        { score: 4, comment: 'Tasty but could use more cheese.', pizzaId: newPizza.pizzaid },
      ];
  
      await prisma.pizzaRating.createMany({
        data: dummyRatings,
      });
  
      res.status(201).json({ message: 'Pizza added successfully', pizza: newPizza });
    } catch (error) {
      console.error('Error adding new pizza:', error);
      res.status(500).json({ error: 'Failed to add new pizza' });
    }
  };

  export const UpdatePizza = async (req: Request, res: Response): Promise<void> => {
    const { pizzaid } = req.params; 
    const { name, description, price, ingredients, storeId } = req.body; 
  
    try {
      // Update the pizza
      const updatedPizza = await prisma.pizza.update({
        where: { pizzaid: Number(pizzaid) }, 
        data: {
          ...(name && { name }), 
          ...(description && { description }),
          ...(price && { price }), 
          ...(storeId && { storeId }), 
          ...(ingredients && {
            ingredients: {
              set: [], 
              connect: ingredients.map((ingredientId: number) => ({ ingredientid: ingredientId })), 
            },
          }),
        },
      });
  
      res.status(200).json({ message: 'Pizza updated successfully', pizza: updatedPizza });
    } catch (error) {
      console.error('Error updating pizza:', error);
      res.status(500).json({ error: 'Failed to update pizza' });
    }
  };

  export const DeletePizza = async (req: Request, res: Response): Promise<void> => {
    const { pizzaid } = req.params; 
  
    try {
      await prisma.pizza.delete({
        where: { pizzaid: Number(pizzaid) }, 
      });
  
      res.status(200).json({ message: 'Pizza deleted successfully' });
    } catch (error) {
      console.error('Error deleting pizza:', error);
      res.status(500).json({ error: 'Failed to delete pizza' });
    }
  };