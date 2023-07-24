import { Link } from "react-router-dom";

type props = {
  name: string;
  preco: number;
  idProduct: number;
  imageUrl: string;
};
export default function Card({ name, preco, idProduct, imageUrl}: props) {

  return (
    <Link to={`/product/${idProduct}`} >
      <div className="w-[265px] h-[331px] bg-gray-500 overflow-hidden rounded-md">
        <img 
          className="object-cover"
          src={imageUrl} 
          alt={name} 
        />
      </div>
      <div className="flex gap-2 mt-1 items-center">
        <strong className="text-lg">{name}</strong>
        <span>R$ {preco}</span>
      </div>
    </Link>
  );
}
