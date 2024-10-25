import React, { useState, useEffect } from "react";
import Texto from "./Texto.jsx";
import { images } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Destaques = () => {
  const [pDestaques] = useState([
    { id: 1, img: images.p1, nome: "Pastel de Carne" },
    { id: 2, img: images.p2, nome: "Pastel de Queijo" },
    { id: 3, img: images.p3, nome: "Pastel de Carne Seca" },
    { id: 4, img: images.p4, nome: "Pastel de Frango" },
    { id: 5, img: images.p5, nome: "Pastel de Camarão" },
  ]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Texto text1="NOSSOS" text2="DESTAQUES" />
        <p className="text-[16px] text-center">
          Conheça os nossos destaques: cada pastel que servimos é uma
          obra-prima, elaborada com os melhores ingredientes e uma pitada de
          amor. Experimente a crocância perfeita e os recheios que vão deixar
          você pedindo mais!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-9 justify-center">
        {pDestaques.slice(0, 5).map((item, index) => (
          <div
            key={item.id}
            className="text-center overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay={`${200 + index * 100}`}
          >
            <Link>
              <img
                src={item.img}
                alt={item.nome}
                className="w-full h-44 object-cover rounded-xl transition-transform duration-300 transform hover:scale-110"
              />
            </Link>
            <p className="mt-2 font-medium text-lg">{item.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destaques;
