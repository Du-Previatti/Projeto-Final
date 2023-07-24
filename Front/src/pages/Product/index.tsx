import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { IProduct } from "../../utils/types";
import { getProduct } from "../../services/product.service";
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useCart } from "../../hooks/useCart";


export default function Product() {
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);
  const [products, setProducts] = useState<IProduct>();
  const {id} = useParams();
  const { addToCart } = useCart();

  const getProductsData = (id:string) => {
    setLoading(true)

    getProduct(id)
    .then((response) => {
      setProducts(response.data)
    })
    .catch((error) => {
        console.error(error)
        setErrorRequest(true);
        toast.error("Ops! Algo deu errado, tente novamente. 😵‍💫")
    })
    .finally(() => setLoading(false))

}

  useEffect(() => {
    if(!products && id){
      getProductsData(id);
    }
},[products, id])

const handleAddToCart = () => {
  if (products) {
    addToCart(products);
    toast.success("Produto adicionado ao carrinho!");
  }
};

  return (
    <div>
    <Header />
    <div className=" px-[110px] flex justify-center gap-10 mt-[5%]">
    {loading && (
          <div className="flex items-center flex-col">
              <Loading />
              <h1>Carregando</h1>
          </div>
        )}
        {!loading && !errorRequest && products && (
          <>
          <div className="w-[554px] h-[553px] bg-gray-500 ">
          <img 
          className="object-cover"
          src={products.image} 
          alt={products.name} 
        />
          </div>
          <div className="font-serif flex-1 ">
            <strong>{products.name}</strong>
            <div className="w-[400px] flex flex-col gap-5 h-full">
            <p className="text-lg italic">{products.price}</p>
            <p className="text-lg">{products.description}
            </p>
            <button className="mt-[40px] bg-transparent hover:bg-black-400 text-black-400 font-semibold hover:text-white py-2 px-4 border border-black-400 hover:border-transparent rounded"
            onClick={handleAddToCart}>
      Adicionar ao Carrinho
    </button>
            </div>
          </div>
          </>

        )}
    </div>
    <Toaster
        position="top-right"
        reverseOrder={false}
      />
   </div>

   
    
  )
}
  