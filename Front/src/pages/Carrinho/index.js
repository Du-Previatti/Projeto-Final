import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "../../components/header";
import { useCart } from "../../hooks/useCart";
function Carrinho() {
    const { cartItems, removeItemFromCart } = useCart();
    const handleRemoveItem = (id) => {
        removeItemFromCart(id);
    };
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsxs("div", { className: "flex justify-center mt-[50px] gap-[200px]", children: [_jsxs("div", { className: "font-serif", children: [_jsx("h1", { className: "text-6xl", children: "Carrinho" }), _jsx("p", { className: "text-2xl", children: "Ainda n\u00E3o terminou de escolher? Volte para o Shopping" }), cartItems.map((item) => (_jsxs("div", { className: "mt-[30px] flex gap-5", children: [_jsx("div", { className: "w-[129px] h-[133px] bg-gray-500", children: _jsx("img", { src: item.image, alt: item.name, className: "object-cover w-full h-full" }) }), _jsxs("div", { className: "space-y-2 text-2xl", children: [_jsx("strong", { children: item.name }), _jsxs("p", { children: ["Quantidade: ", item.quantity] }), _jsxs("p", { children: ["Valor: R$ ", item.price] }), _jsx("button", { onClick: () => handleRemoveItem(item.id), className: "text-base no-underline hover:underline ...", children: "Remover" })] })] }, item.id)))] }), _jsxs("div", { className: "space-y-3 mt-[120px] font-serif", children: [_jsx("h1", { className: "text-3xl", children: "Resumo da compra" }), _jsxs("p", { className: "text-xl", children: ["Subtotal - R$: ", calculateSubtotal(cartItems)] }), _jsx("hr", { className: "border-4 border-black-400 cursor-pointer hover:border-green-500 duration-500" }), _jsxs("p", { className: "text-xl", children: ["Total - R$: ", calculateTotal(cartItems)] }), _jsx("a", { href: "/sucesso", children: _jsx("button", { className: "w-[100%] bg-transparent hover:bg-green-500 text-black-400 font-semibold hover:text-white py-2 px-4 border border-black-400 hover:border-transparent rounded", children: "CONCLUIR COMPRA" }) })] })] })] }));
}
function calculateSubtotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}
function calculateTotal(cartItems) {
    return calculateSubtotal(cartItems);
}
export default Carrinho;
