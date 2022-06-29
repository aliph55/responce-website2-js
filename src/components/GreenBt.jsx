import React from "react";

const GreenBt = ({ title, onClick, className }) => {
  return (
    <button
      className={
        "border-2 bg-lightColor text-darkColor border-lightColor hover:bg-transparent hover:text-lightColor rounded-md duration-300 ease-out" +
        " " +
        className
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default GreenBt;
