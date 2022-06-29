import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "one",
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita, maiores? Lorem ipsum dolor sit amet.`,
    },
    {
      id: 2,
      title: "two",
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, maiores? Lorem ipsum dolor sit amet.`,
    },
    {
      id: 3,
      title: "three",
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, maiores? Lorem ipsum dolor sit amet.`,
    },
    {
      id: 4,
      title: "four",
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, maiores? Lorem ipsum dolor sit amet.`,
    },
  ];
  return (
    <div name="services" className="w-full h-fit md:h-screen bg-slate-300">
      <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <h2 className="text-5xl font-bold text-center">Services</h2>
        <p className="text-xl py-8 text-gray-600 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ex
          tempora dolor. Magnam illum ratione explicabo sint accusantium, amet
          voluptatem!
        </p>
        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          {services.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-start p-4 bg-gray-900 text-white rounded-md"
            >
              <div className="">
                <FaChevronCircleRight
                  className="mt-3 mr-4 text-lightColor"
                  size={20}
                />
              </div>
              <div className="">
                <h3 className="font-bold text-xl text-lightColor pt-2 pb-4 capitalize">
                  {title}
                </h3>
                <p className="">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
