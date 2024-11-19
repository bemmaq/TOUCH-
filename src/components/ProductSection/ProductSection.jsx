import React from "react";
import { data } from "./data";



function ProductSection() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        ELECCIÓN DE TOUCHÉ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-md rounded-lg text-center"
          >
            <img
              src={product.img}
              alt={product.title}
              className="mb-4 w-[370px] h-[300px]" 
            />
            <p className="text-lg font-medium">{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
