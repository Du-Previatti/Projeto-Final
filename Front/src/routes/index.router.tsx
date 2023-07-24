import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Carrinho from "../pages/Carrinho";
import Product from "../pages/Product";
import Register from "../pages/Register";
import { AuthProvider } from "../Context/Auth";
import Sucesso  from "../pages/Sucesso";

export default function Router(){

    return (
        <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/sucesso" element={<Sucesso />}/>
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}