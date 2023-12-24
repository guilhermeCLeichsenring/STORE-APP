import { ProductModel } from "./product.model";

export interface ProductTotalList{
    products: ProductModel[],
    total: number,
    skip: 0,
    limit: 30
}