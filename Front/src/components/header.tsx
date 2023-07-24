import { Link } from "react-router-dom";
import logo from '../assets/LogoAmarela.png'
import { ShoppingCart } from "@phosphor-icons/react";
import { useContext } from 'react';
import { AuthContext } from '../Context/Auth';

export function Header() {
  const { authenticated, userLogout } = useContext(AuthContext);
    return(
        <header className="bg-black-400">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-10 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src={logo} alt="Logo Site"/>
            </a>
          </div>
          
          <div className="flex gap-10">
            <Link 
              to="/"
              className="text-lg font-semibold leading-6 text-white"
            >
              Home
            </Link>
            <Link 
              to="/carrinho"
              className="text-lg font-semibold leading-6 text-white"
            >
              <ShoppingCart size={20} color="#FFF" weight="bold" />
            </Link> 
          </div>
          
          <div className="font-serif hidden lg:flex lg:flex-1 lg:justify-end">
      {authenticated ? (
        <button
          onClick={userLogout}
          className="text-lg font-semibold leading-6 text-white cursor-pointer"
        >
              Sair
            </button>
          ) : (
            <Link
              to="/login"
              className="text-lg font-semibold leading-6 text-white"
            >
              Entrar <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}