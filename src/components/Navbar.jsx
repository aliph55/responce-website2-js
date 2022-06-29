import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitch,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import GreenBt from "./GreenBt";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "services" },
    { id: 3, link: "about" },
    { id: 4, link: "support" },
    { id: 5, link: "pricing" },
  ];
  return (
    <div className="w-screen h-20 z-20 fixed bg-gray-900 text-white">
      <div className="px-3 flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">onn</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="capitalize p-4 cursor-pointer hover:text-lightColor duration-200"
            >
              <Link offset={200} to={link} duration={1000} smooth>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex mr-4">
          <GreenBt title="sign in" className={"px-9 py-3"} />
        </div>
        {/** Burger icon */}
        <div className="md:hidden">
          <div onClick={() => setNav(true)} className="cursor-pointer">
            <FaBars size={30} />
          </div>
        </div>
      </div>
      {/** Mobile View */}
      <div
        className={
          nav
            ? "md:hidden fixed flex top-0 w-full h-full left-0 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-300"
              : "fixed top-0 left-[-100%] p-10 duration-500"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <h1
                onClick={() => setNav(false)}
                className="text-3xl font-bold capitalize cursor-pointer"
              >
                onnn
              </h1>
              <div onClick={() => setNav(false)} className="p-3 cursor-pointer">
                <FaTimes size={30} />
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col h-fit gap-8">
            <GreenBt className={"px-9 capitalize py-3"} title="sing in" />
            <ul className="capitalize">
              {links.map(({ link, id }) => (
                <li
                  key={id}
                  className="py-4 text-2xl tracking-wider cursor-pointer"
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    duration={1000}
                    smooth
                    offset={200}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div
                className="flex items-center 
              justify-center rounded-md shadow-md shadow-lightColor"
              >
                <FaFacebook size={25} />
              </div>
              <div
                className="flex items-center 
              justify-center rounded-md shadow-md shadow-lightColor"
              >
                <FaTwitter size={25} />
              </div>{" "}
              <div
                className="flex items-center 
              justify-center rounded-md shadow-md shadow-lightColor"
              >
                <FaLinkedin size={25} />
              </div>{" "}
              <div
                className="flex items-center 
              justify-center rounded-md shadow-md shadow-lightColor"
              >
                <FaTwitch size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
