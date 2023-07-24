import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function Card({ name, preco, idProduct, imageUrl }) {
    return (_jsxs(Link, { to: `/product/${idProduct}`, children: [_jsx("div", { className: "w-[265px] h-[331px] bg-gray-500 overflow-hidden rounded-md", children: _jsx("img", { className: "object-cover", src: imageUrl, alt: name }) }), _jsxs("div", { className: "flex gap-2 mt-1 items-center", children: [_jsx("strong", { className: "text-lg", children: name }), _jsxs("span", { children: ["R$ ", preco] })] })] }));
}
