import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/product.service";
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useCart } from "../../hooks/useCart";
export default function Product() {
    const [loading, setLoading] = useState(false);
    const [errorRequest, setErrorRequest] = useState(false);
    const [products, setProducts] = useState();
    const { id } = useParams();
    const { addToCart } = useCart();
    const getProductsData = (id) => {
        setLoading(true);
        getProduct(id)
            .then((response) => {
            setProducts(response.data);
        })
            .catch((error) => {
            console.error(error);
            setErrorRequest(true);
            toast.error("Ops! Algo deu errado, tente novamente. 😵‍💫");
        })
            .finally(() => setLoading(false));
    };
    useEffect(() => {
        if (!products && id) {
            getProductsData(id);
        }
    }, [products, id]);
    const handleAddToCart = () => {
        if (products) {
            addToCart(products);
            toast.success("Produto adicionado ao carrinho!");
        }
    };
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsxs("div", { className: "px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-10 md:flex-row md:justify-center md:gap-20", children: [loading && (_jsxs("div", { className: "flex items-center flex-col", children: [_jsx(Loading, {}), _jsx("h1", { children: "Carregando" })] })), !loading && !errorRequest && products && (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-64 md:w-96 h-64 md:h-96 bg-gray-500", children: _jsx("img", { className: "object-cover w-full h-full", src: products.image, alt: products.name }) }), _jsxs("div", { className: "font-serif flex-1", children: [_jsx("strong", { className: "text-2xl md:text-4xl", children: products.name }), _jsxs("div", { className: "flex flex-col gap-5 md:w-96", children: [_jsx("p", { className: "text-base md:text-lg italic", children: products.price }), _jsx("p", { className: "text-base md:text-lg", children: products.description }), _jsx("button", { className: "mt-5 w-full bg-transparent hover:bg-black-400 text-black-400 font-semibold hover:text-white py-2 px-4 border border-black-400 hover:border-transparent rounded", onClick: handleAddToCart, children: "Adicionar ao Carrinho" })] })] })] }))] }), _jsx(Toaster, { position: "top-right", reverseOrder: false })] }));
}
