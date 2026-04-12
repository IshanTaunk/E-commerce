import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getHotels = async (_req: Request, res: Response) => {
  try {
    const hotels = await prisma.hotel.findMany();

    res.json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
};

export const getHotelById = async (req: Request, res: Response) => {
  try {
    const hotel = await prisma.hotel.findUnique({
      where: { id: String(req.params.id) }
    });

    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }

    res.json(hotel);
  } catch (error) {
    console.error("Error fetching hotel:", error);
    res.status(500).json({ error: "Failed to fetch hotel" });
  }
};