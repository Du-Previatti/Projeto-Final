import { api } from "./api";
export function login() {
    return api.get('/users/login');
}
export function registerUser() {
    return api.get('/users/registerUser');
}
