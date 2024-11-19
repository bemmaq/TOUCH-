  import React from "react";
  import { data } from "./data";


  function KnowYourselfSection() {
    return (
      <section className="py-10 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-6">
          GET TO KNOW YOURSELF WITH TOUCHÉ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow-md rounded-lg text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 w-[370px]"
              />
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  export default KnowYourselfSection;
