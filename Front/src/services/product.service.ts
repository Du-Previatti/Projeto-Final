import { api } from "./api";

export function getProducts(){
    return api.get('/products');
}

export function getProduct(id: string){
    return api.get(`/products/${id}`);
}