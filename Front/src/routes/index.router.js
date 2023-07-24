import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Carrinho from "../pages/Carrinho";
import Product from "../pages/Product";
import Register from "../pages/Register";
import { AuthProvider } from "../Context/Auth";
import Sucesso from "../pages/Sucesso";
export default function Router() {
    return (_jsx(BrowserRouter, { children: _jsx(AuthProvider, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/product/:id", element: _jsx(Product, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/carrinho", element: _jsx(Carrinho, {}) }), _jsx(Route, { path: "/sucesso", element: _jsx(Sucesso, {}) })] }) }) }));
}
