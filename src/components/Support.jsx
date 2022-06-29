import React from "react";
import {
  MdOutlineComputer,
  MdOutlineSupportAgent,
  MdPerson,
} from "react-icons/md";
import GreenBt from "./GreenBt";

const Support = () => {
  const supportLink = [
    {
      id: 1,
      title: "Technical",
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      icon: <MdOutlineComputer size={25} />,
    },
    {
      id: 2,
      title: "Sales",
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      icon: <MdOutlineSupportAgent size={25} />,
    },
    {
      id: 3,
      title: "General",
      subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      icon: <MdPerson size={25} />,
    },
  ];

  return (
    <div className="w-full h-fit bg-slate-300 " name="support">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12">
          <h2 className="text-5xl font-bold text-center">Suport</h2>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            sed.
          </p>
        </div>
        {/** support cards */}
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          {supportLink.map(({ id, title, subtitle, icon }) => (
            <div
              key={id}
              className="bg-gray-900 text-white rounded-xl shadow-lg shadow-lightColor"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 p-4 bg-lightColor text-darkColor rounded-full mt-[-4rem]">
                  {icon}
                </div>
                <h3 className="font-bold text-2xl py-6">{title}</h3>
                <p className="text-gray-300 text-base pb-12">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center items-center">
          <GreenBt
            title="contact us"
            className={"capitalize py-3 px-6 w-1/2 my-12"}
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
