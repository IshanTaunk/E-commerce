import { api } from "../../api/client";
import type { Product } from "./types";

export function getProducts(): Promise<Product[]> {
    return api(`/api/products`);
}