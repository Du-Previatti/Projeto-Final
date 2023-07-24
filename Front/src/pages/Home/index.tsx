import { useEffect, useState } from "react";
import { ArrowCounterClockwise } from "@phosphor-icons/react";
import toast, { Toaster } from 'react-hot-toast';
import Card from "../../components/Card"
import { Header } from "../../components/header"
import { IProduct } from "../../utils/types";
import { getProducts } from "../../services/product.service";
import { Loading } from "../../components/Loading";

function Home() {
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

    const getProductsData = () => {
      setLoading(true)

      getProducts()
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
      if(!products.length){
        getProductsData();
      }
  },[products])
  
  return (
    <>
      <Header />
      <div className=" max-w-screen-2xl flex justify-center flex-wrap gap-2 mt-[20px]">
        {loading && (
          <div className="flex items-center flex-col">
              <Loading />
              <h1>Carregando</h1>
          </div>
        )}
        {!loading && !errorRequest && products.map ((produto) =>(
            <Card 
              key={produto.id}
              name={produto.name} 
              preco={produto.price}
              idProduct={produto.id}
              imageUrl={produto.image}
            />
        ))}
        {!loading && errorRequest && (
          <div className="flex items-center flex-col">
              <h1 
                className="text-2xl font-medium m-3"
              >
                Ops! Algo deu errado!
              </h1>
              <button 
                  onClick={getProductsData}
                  className="flex items-center gap-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <ArrowCounterClockwise size={20} color="#FFF" weight="bold" />
                  Tentar novamente
                </button>
          </div>
        )}
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>  
  )
}
      



export default Home