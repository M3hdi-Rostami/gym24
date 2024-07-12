import "./header.scss";

import Button from "../button/Button";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { useState } from "react";

const Header = () => {
  const navLinks = [
    {
      routePath: "/",
      title: "Advantages",
    },
    {
      routePath: "/",
      title: "Membership",
    },
    {
      routePath: "/",
      title: "About",
    },
    {
      routePath: "/",
      title: "Trainers",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-dvw min-h-dvh md:bg-contain bg-cover bg-right border-spacing-x-7 bg-no-repeat xl:px-[372.5px] px-10 py-8 md:text-left text-center">
      <nav className="text-white flex md:items-start iems-centert justify-between text-12">
        <div>
          <img src={logo} alt="gym24 logo" />
        </div>

        <button
          className={`btn-menu ${isMenuOpen ? "menu-open" : ""}`}
          type="button"
          onClick={() => toggleMenu()}
        >
          <i className="btn-menu__bars" aria-hidden="true"></i>
        </button>

        <ul className="hidden md:flex gap-[75px]">
          {navLinks.map(({ routePath, title }, index) => {
            return (
              <li
                key={`link-${index}`}
                className="hover:text-yellow transition"
              >
                <Link to={routePath} className="menu">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={`md:hidden transition-all duration-300 relative
           ${isMenuOpen ? "opacity-100" : "opacity-0"}
        `}
      >
        <ul className="flex flex-col items-start justify-end gap-10 bg-black/70 rounded-lg shadow-lg backdrop-blur-[5px] border border-white/20 py-10 px-4 mt-8 absolute m-auto w-full">
          {navLinks.map(({ routePath, title }, index) => {
            return (
              <li
                key={`link-${index}`}
                className="hover:text-yellow transition"
              >
                <Link to={routePath} className="menu">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="md:max-w-2xl w-full mt-56 flex md:justify-start justify-center flex-col">
        <span className="text-[4rem] text-white font-medium font-family-bold leading-tight md:text-left text-center">
          Free trial session with a trainer
        </span>

        <div className="w-full flex md:justify-start justify-center">
          <Button title={"Detailed"} extraClass={"w-[177px] mt-14"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
