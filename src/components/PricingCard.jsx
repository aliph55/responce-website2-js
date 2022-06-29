import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import GreenBt from "./GreenBt";

const PricingCard = ({ title, priceCategory, dolar, feature }) => {
  return (
    <div className="bg-white text-slate-900 m-4 rounded-xl overflow-hidden shadow-2xl">
      <div className="text-center bg-darkColor text-white py-4 uppercase">
        <p>{priceCategory}</p>
      </div>
      <div className="p-4">
        <p className="text-6xl font-bold py-4 flex">
          {`$${dolar}`}
          <span className="text-xl text-darkColor flex flex-col justify-end">
            /mo
          </span>
        </p>
      </div>
      <p className="text-2xl px-4 py-8 text-slate-500 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus soluta
        hic commodi reprehenderit error vitae illo sapiente dicta? Doloribus,
        nobis.
      </p>
      <div className="text-2xl">
        <div className="px-8">
          {feature.map(({ id, title }) => (
            <p key={id} className="flex items-center py-3 text-lg">
              <FaPlusCircle className="w-5 mr-3 text-lightColor" />
              {title}
            </p>
          ))}
        </div>
        <GreenBt
          title="get started"
          className={
            "capitalize w-full py-4 mt-14 rounded-none  hover:border-transparent"
          }
        />
      </div>
    </div>
  );
};

export default PricingCard;
