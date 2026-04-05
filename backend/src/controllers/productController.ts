import { Request, Response } from 'express';

const products = [
  { 
    id: 1,
    name: 'Laptop', 
    price: 1200, 
    image: { 
      url: "https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&w=0&k=20&c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38=",
      description: "laptop"
    } 
  },
  { 
    id: 2, 
    name: 'Phone', 
    price: 700,
    image: { 
      url: "https://media.gettyimages.com/id/1299655280/photo/apps-installed-on-a-samsung-galaxy-s21-smart-phone.jpg?s=612x612&w=gi&k=20&c=lhaG0yW0xaeexcoXhPyRacQdORcdjCEqv14ONGwluCg=",
      description: "laptop"
    } 
  }
];

export const getProducts = (_req: Request, res: Response) => {
  res.json(products);
};