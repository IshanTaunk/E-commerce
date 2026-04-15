export interface Resort{
  id: string;
  name: string;
  city: string;
  state: string;
  description: string;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}