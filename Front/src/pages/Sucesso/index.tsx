import { Header } from "../../components/header";

export default function Sucesso() {
  return (
    <div>
      <Header />
      <div className="w-full min-h-screen bg-green-500 flex items-center justify-center">
        <h1 className="text-4xl md:text-9xl text-white">Compra Efetuada!!</h1>
      </div>
    </div>
  );
}
