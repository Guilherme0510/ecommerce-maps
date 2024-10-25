import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { images } from "../assets/assets";
import { Tooltip } from 'react-tooltip'; // Importação do Tooltip
import 'react-tooltip/dist/react-tooltip.css'; // Importação do CSS do Tooltip

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setBgColor("bg-yellow-100 shadow-md h-[90px]");
    } else {
      setBgColor("bg-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 transition-all duration-700 flex items-center justify-between px-8 py-1 w-full h-[75px] ${bgColor}`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img className="w-36" src={images.logo} alt="Logo" />
        </Link>
      </div>

      <div className="hidden md:flex flex-row justify-center flex-grow gap-8 mx-4">
        <NavLink to="/" className="relative group">
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="relative z-10 text-[17px]">Início</span>
        </NavLink>
        <NavLink to="/produtos" className="relative group">
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="relative z-10 text-[17px]">Produtos</span>
        </NavLink>
        <NavLink to="/sobre" className="relative group">
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="relative z-10 text-[17px]">Sobre Nós</span>
        </NavLink>
        <NavLink to="/contato" className="relative group">
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="relative z-10 text-[17px]">Contato</span>
        </NavLink>
      </div>

      <div className="items-center gap-4 hidden md:flex">
        <NavLink to="/perfil" aria-label="Perfil">
          <FontAwesomeIcon className="hover:rotate-12" icon={faUser} fontSize="20px" data-tooltip-id="perfilTooltip" />
          <Tooltip id="perfilTooltip" place="top" effect="solid">Perfil</Tooltip>
        </NavLink>
        <NavLink to="/carrinho" aria-label="Carrinho">
          <FontAwesomeIcon className="hover:rotate-12" icon={faCartShopping} fontSize="20px" data-tooltip-id="carrinhoTooltip" />
          <Tooltip id="carrinhoTooltip" place="top" effect="solid">Carrinho</Tooltip>
        </NavLink>
      </div>

      {/* Menu Dropdown para Telas Menores */}
      <div className="flex items-center md:hidden gap-4">
        <NavLink to="/perfil" aria-label="Perfil">
          <FontAwesomeIcon icon={faUser} fontSize="20px" data-tooltip-id="perfilMobileTooltip" />
          <Tooltip id="perfilMobileTooltip" place="top" effect="solid">Perfil</Tooltip>
        </NavLink>
        <NavLink to="/carrinho" aria-label="Carrinho">
          <FontAwesomeIcon icon={faCartShopping} fontSize="20px" data-tooltip-id="carrinhoMobileTooltip" />
          <Tooltip id="carrinhoMobileTooltip" place="top" effect="solid">Carrinho</Tooltip>
        </NavLink>
        <img
          onClick={() => setVisible(!visible)}
          src={images.dropdown_nav}
          className={`w-5 cursor-pointer ${visible ? "opacity-0" : "delay-500"}`}
          alt="Menu"
        />
      </div>

      <div
        className={`absolute top-full right-0 w-full overflow-hidden bg-white transition-all duration-500 ease-in-out ${
          visible ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={images.cross_icon}
              className="h-4 rotate-180"
              alt="Fechar"
            />
            <p>Fechar</p>
          </div>

          <ul className="flex flex-col gap-4 p-3">
            <li>
              <NavLink
                to="/"
                onClick={() => setVisible(false)}
                className="text-black hover:border-b-2 border-yellow-500 transition-transform"
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/produtos"
                onClick={() => setVisible(false)}
                className="text-black hover:border-b-2 border-yellow-500 transition-transform"
              >
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre"
                onClick={() => setVisible(false)}
                className="text-black hover:border-b-2 border-yellow-500 transition-transform"
              >
                Sobre Nós
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                onClick={() => setVisible(false)}
                className="text-black hover:border-b-2 border-yellow-500 transition-transform"
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
