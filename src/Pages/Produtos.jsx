import React, { useState } from "react";
import ItemProduto from "../Components/ItemProduto";
import { images } from "../assets/assets.js";
import Texto from "../Components/Texto.jsx";

const Produtos = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  const produtos = [
    {
      id: 1,
      img: images.p1,
      nome: "Pastel de Carne",
      preco: 19.99,
      categoria: "Carne",
    },
    {
      id: 2,
      img: images.p2,
      nome: "Pastel de Queijo",
      preco: 17.99,
      categoria: "Queijo",
    },
    {
      id: 3,
      img: images.p3,
      nome: "Pastel de Carne Seca",
      preco: 21.99,
      categoria: "Carne",
    },
    {
      id: 4,
      img: images.p4,
      nome: "Pastel de Frango",
      preco: 18.99,
      categoria: "Frango",
    },
    {
      id: 5,
      img: images.p5,
      nome: "Pastel de Camarão",
      preco: 24.99,
      categoria: "Frutos do Mar",
    },
    {
      id: 6,
      img: images.p6,
      nome: "Pastel de Palmito",
      preco: 20.99,
      categoria: "Vegetais",
    },
    {
      id: 7,
      img: images.p7,
      nome: "Pastel de Vegetais",
      preco: 16.99,
      categoria: "Vegetais",
    },
    {
      id: 8,
      img: images.p8,
      nome: "Pastel de Picanha",
      preco: 22.99,
      categoria: "Carne",
    },
    {
      id: 9,
      img: images.p9,
      nome: "Pastel de Batata",
      preco: 15.99,
      categoria: "Vegetais",
    },
    {
      id: 10,
      img: images.p10,
      nome: "Pastel de Frutos do Mar",
      preco: 29.99,
      categoria: "Frutos do Mar",
    },
  ];

  const toggleCategory = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value]
    );
  };

  const filteredProducts =
    selectedCategories.length > 0
      ? produtos.filter((produto) =>
          selectedCategories.includes(produto.categoria)
        )
      : produtos;

  return (
    <div className="flex flex-col md:flex-row mt-8">
      <div className="w-full md:w-1/4 p-4">
        <h2 className="text-3xl font-semibold mb-4">Filtros</h2>
        <div
          className={`border border-gray-300 rounded-xl pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-lg font-medium">CATEGORIAS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Carne", "Queijo", "Frango", "Vegetais", "Frutos do Mar"].map(
              (label) => (
                <label
                  key={label}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={label}
                    onChange={toggleCategory}
                    className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full transition duration-200 cursor-pointer checked:bg-blue-500 checked:border-transparent focus:outline-none shadow-sm"
                  />
                  <span>{label}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center "> 
        <div className="flex justify-between items-center mb-4 p-4 px-8"> 
          <Texto text1={"NOSSOS"} text2={"PRODUTOS"} />
          <select className="mt-2 py-2 px-1 rounded-lg border border-black">
            <option value="">Relevante</option>
            <option value="">Ordem Decrescente</option>
            <option value="">Ordem Crescente</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-9 justify-center items-center">
          {filteredProducts.map((item) => (
            <div className="flex flex-col" key={item.id}>
               <ItemProduto
        id={item.id}
        image={item.img}
        name={item.nome}
        preco={item.preco}
        size="h-40 w-36 md:h-64 md:w-56" // Ajuste de tamanhos para diferentes telas
      />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produtos;
