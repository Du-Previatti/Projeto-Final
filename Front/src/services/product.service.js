import { api } from "./api";
export function getProducts() {
    return api.get('/products');
}
export function getProduct(id) {
    return api.get(`/products/${id}`);
}
