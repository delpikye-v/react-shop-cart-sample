import { Product } from "./Product.model";

export const getProducts = async (): Promise<Product[]> => {
    const result = await fetch('https://fakestoreapi.com/products')
    let product = await result.json()
    return product
}

