import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import MenuComp from "./MenuComp";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className="hover:bg-nav-bar-bg-hover-light dark:hover:bg-nav-bar-bg-hover-dark rounded-full p-1 transition duration-500 hover:scale-110 hover:bg-opacity-60 hover:text-nav-bar-link-hover-light dark:hover:bg-opacity-60 dark:hover:text-nav-bar-link-hover-dark"
      >
        Home
      </NavLink>
      <NavLink
        to="/appointment"
        className="hover:bg-nav-bar-bg-hover-light dark:hover:bg-nav-bar-bg-hover-dark rounded-full p-1 transition duration-500 hover:scale-110 hover:bg-opacity-60 hover:text-nav-bar-link-hover-light dark:hover:bg-opacity-60 dark:hover:text-nav-bar-link-hover-dark"
      >
        Appointment
      </NavLink>
      <NavLink
        to="/about"
        className="hover:bg-nav-bar-bg-hover-light dark:hover:bg-nav-bar-bg-hover-dark rounded-full p-1 transition duration-500 hover:scale-110 hover:bg-opacity-60 hover:text-nav-bar-link-hover-light dark:hover:bg-opacity-60 dark:hover:text-nav-bar-link-hover-dark"
      >
        About Us
      </NavLink>
    </>
  );
};
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="text-xl">
        <div className="hidden w-full justify-between gap-8 md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>
            {isOpen ? <X /> : <MenuComp />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
