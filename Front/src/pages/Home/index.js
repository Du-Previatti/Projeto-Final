import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ArrowCounterClockwise } from "@phosphor-icons/react";
import toast, { Toaster } from 'react-hot-toast';
import Card from "../../components/Card";
import { Header } from "../../components/header";
import { getProducts } from "../../services/product.service";
import { Loading } from "../../components/Loading";
function Home() {
    const [loading, setLoading] = useState(false);
    const [errorRequest, setErrorRequest] = useState(false);
    const [products, setProducts] = useState([]);
    const getProductsData = () => {
        setLoading(true);
        getProducts()
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
        if (!products.length) {
            getProductsData();
        }
    }, [products]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("div", { className: " max-w-screen-2xl flex justify-center flex-wrap gap-2 mt-[20px]", children: [loading && (_jsxs("div", { className: "flex items-center flex-col", children: [_jsx(Loading, {}), _jsx("h1", { children: "Carregando" })] })), !loading && !errorRequest && products.map((produto) => (_jsx(Card, { name: produto.name, preco: produto.price, idProduct: produto.id, imageUrl: produto.image }, produto.id))), !loading && errorRequest && (_jsxs("div", { className: "flex items-center flex-col", children: [_jsx("h1", { className: "text-2xl font-medium m-3", children: "Ops! Algo deu errado!" }), _jsxs("button", { onClick: getProductsData, className: "flex items-center gap-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: [_jsx(ArrowCounterClockwise, { size: 20, color: "#FFF", weight: "bold" }), "Tentar novamente"] })] }))] }), _jsx(Toaster, { position: "top-right", reverseOrder: false })] }));
}
export default Home;
