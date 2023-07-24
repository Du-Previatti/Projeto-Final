import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import logo from '../assets/LogoAmarela.png';
import { ShoppingCart } from "@phosphor-icons/react";
import { useContext } from 'react';
import { AuthContext } from '../Context/Auth';
export function Header() {
    const { authenticated, userLogout } = useContext(AuthContext);
    return (_jsx("header", { className: "bg-black-400", children: _jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between p-10 lg:px-8", "aria-label": "Global", children: [_jsx("div", { className: "flex lg:flex-1", children: _jsxs("a", { href: "/", className: "-m-1.5 p-1.5", children: [_jsx("span", { className: "sr-only", children: "Your Company" }), _jsx("img", { className: "h-14 w-auto", src: logo, alt: "Logo Site" })] }) }), _jsxs("div", { className: "flex gap-10", children: [_jsx(Link, { to: "/", className: "text-lg font-semibold leading-6 text-white", children: "Home" }), _jsx(Link, { to: "/carrinho", className: "text-lg font-semibold leading-6 text-white", children: _jsx(ShoppingCart, { size: 20, color: "#FFF", weight: "bold" }) })] }), _jsx("div", { className: "font-serif hidden lg:flex lg:flex-1 lg:justify-end", children: authenticated ? (_jsx("button", { onClick: userLogout, className: "text-lg font-semibold leading-6 text-white cursor-pointer", children: "Sair" })) : (_jsxs(Link, { to: "/login", className: "text-lg font-semibold leading-6 text-white", children: ["Entrar ", _jsx("span", { "aria-hidden": "true", children: "\u2192" })] })) })] }) }));
}
