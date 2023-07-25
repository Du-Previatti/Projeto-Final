import { Link } from "react-router-dom";
import logo from '../assets/LogoAmarela.png'
import { ShoppingCart } from "@phosphor-icons/react";
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/Auth';

export function Header() {
  const { authenticated, userLogout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); 
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black-400">
      <nav className="mx-auto px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Global">
        <div className="flex items-center">
          <Link to="/" className="mr-6">
            <span className="sr-only">Your Company</span>
            <img className="h-14 w-auto" src={logo} alt="Logo Site" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          <Link to="/" className="text-lg font-semibold leading-6 text-white">
            Home
          </Link>
          <Link to="/carrinho" className="text-lg font-semibold leading-6 text-white">
            <ShoppingCart size={20} color="#FFF" weight="bold" />
          </Link>
          <div className="font-serif">
            {authenticated ? (
              <button
                onClick={userLogout}
                className="text-lg font-semibold leading-6 text-white cursor-pointer"
              >
                Sair
              </button>
            ) : (
              <Link to="/login" className="text-lg font-semibold leading-6 text-white">
                Entrar <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <button className="text-white" onClick={handleMenuToggle}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-4 p-4">
            <Link to="/" className="text-lg font-semibold leading-6 text-white text-center">
              Home
            </Link>
            <Link to="/carrinho" className="text-lg font-semibold leading-6 text-white text-center">
              <ShoppingCart size={20} color="#FFF" weight="bold" />
            </Link>
            {authenticated ? (
              <button
                onClick={userLogout}
                className="text-lg font-semibold leading-6 text-white cursor-pointer text-center"
              >
                Sair
              </button>
            ) : (
              <Link to="/login" className="text-lg font-semibold leading-6 text-white text-center">
                Entrar <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}