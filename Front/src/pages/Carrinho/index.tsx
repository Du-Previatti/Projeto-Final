import { Header } from "../../components/header";
import { ICartItem } from "../../Context/CartContext";
import { useCart } from "../../hooks/useCart";

function Carrinho() {
  const { cartItems, removeItemFromCart } = useCart();

  const handleRemoveItem = (id: number) => {
    removeItemFromCart(id);
  };

  return (
    <div>
      <Header />
      <div className="px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-8 md:flex-row md:justify-center md:gap-20">
        <div className="font-serif">
          <h1 className="text-4xl md:text-6xl">Carrinho</h1>
          <p className="text-xl md:text-2xl">Ainda não terminou de escolher? Volte para o Shopping</p>
          {cartItems.map((item) => (
            <div key={item.id} className="mt-8 md:mt-10 flex flex-col md:flex-row md:gap-5">
              <div className="w-40 h-40 md:w-52 md:h-52 bg-gray-500">
                <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
              </div>
              <div className="mt-4 md:mt-0 space-y-2 text-xl md:text-2xl">
                <strong>{item.name}</strong>
                <p>Quantidade: {item.quantity}</p>
                <p>Valor: R$ {item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)} className="text-base no-underline hover:underline">
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="font-serif">
          <h1 className="text-3xl md:text-4xl">Resumo da compra</h1>
          <p className="text-xl md:text-2xl">Subtotal - R$: {calculateSubtotal(cartItems)}</p>
          <hr className="border-4 border-black-400 cursor-pointer hover:border-green-500 duration-500" />
          <p className="text-xl md:text-2xl">Total - R$: {calculateTotal(cartItems)}</p>
          <a href="/sucesso">
            <button className="w-full bg-transparent hover:bg-green-500 text-black-400 font-semibold hover:text-white py-2 px-4 border border-black-400 hover:border-transparent rounded">
              CONCLUIR COMPRA
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function calculateSubtotal(cartItems: ICartItem[]): number {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotal(cartItems: ICartItem[]): number {
  return calculateSubtotal(cartItems);
}

export default Carrinho;
