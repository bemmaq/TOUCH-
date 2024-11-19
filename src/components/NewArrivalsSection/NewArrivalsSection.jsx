import React from "react";
import { items } from "./data";

function NewArrivalsSection() {


  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">NOVEDADES</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="mx-auto mb-4 rounded-md object-cover"
            />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivalsSection;
