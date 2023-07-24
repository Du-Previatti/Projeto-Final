import { Header } from "../../components/header";
import { ICartItem } from "../../Context/CartContext";
import{ useCart } from "../../hooks/useCart"

function Carrinho() {
  const { cartItems, removeItemFromCart } = useCart();

  const handleRemoveItem = (id: number) => {
    removeItemFromCart(id);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center mt-[50px] gap-[200px]">
        <div className="font-serif">
          <h1 className="text-6xl">Carrinho</h1>
          <p className="text-2xl">Ainda não terminou de escolher? Volte para o Shopping</p>
          {cartItems.map((item) => (
            <div key={item.id} className="mt-[30px] flex gap-5">
              <div className="w-[129px] h-[133px] bg-gray-500">
                <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
              </div>
              <div className="space-y-2 text-2xl">
                <strong>{item.name}</strong>
                <p>Quantidade: {item.quantity}</p>
                <p>Valor: R$ {item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)} className="text-base no-underline hover:underline ...">
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3 mt-[120px] font-serif">
          <h1 className="text-3xl">Resumo da compra</h1>
          <p className="text-xl">Subtotal - R$: {calculateSubtotal(cartItems)}</p>
          <hr className="border-4 border-black-400 cursor-pointer hover:border-green-500 duration-500" />
          <p className="text-xl">Total - R$: {calculateTotal(cartItems)}</p>
          <a href="/sucesso">
          <button className="w-[100%] bg-transparent hover:bg-green-500 text-black-400 font-semibold hover:text-white py-2 px-4 border border-black-400 hover:border-transparent rounded">
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
