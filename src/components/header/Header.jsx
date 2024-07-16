import "./header.scss";

import Button from "../button/Button";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { useEffect, useState } from "react";

const Header = () => {
  const navLinks = [
    {
      routePath: "#reason-join",
      title: "Advantages",
    },
    {
      routePath: "#member-ships",
      title: "Membership",
    },
    {
      routePath: "#about-us",
      title: "About",
    },
    {
      routePath: "#trainers",
      title: "Trainers",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isSticky, setIsSticky] = useState(false);
  const onPageScroll = () => setIsSticky(window.scrollY > 200);
  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header className="w-dvw min-h-dvh md:bg-contain bg-cover bg-right border-spacing-x-7 bg-no-repeat xl:px-[372.5px] px-10 py-8 md:text-left text-center">
      <nav
        className={`text-white flex md:items-start items-center justify-between text-12 ${
          isSticky
            ? "fixed top-0 left-0 py-8 md:px-[372.5px] px-10 w-full z-10 bg-black/70 shadow-lg backdrop-blur-[5px] border-b border-white/20"
            : ""
        }`}
      >
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
                <a href={routePath} className="menu">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={`md:hidden fixed top-[82px] left-0 w-full transition-all duration-300
           ${isMenuOpen ? "opacity-100" : "opacity-0"}
        `}
      >
        <ul className="flex flex-col items-start justify-end gap-10 bg-black/70 backdrop-blur-[5px] border border-white/20 py-10 px-4 absolute m-auto w-full">
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

      <div className="md:max-w-2xl w-full sm:mt-56 mt-40 flex md:justify-start justify-center flex-col">
        <span className="sm:text-[4rem] text-[3rem] text-white font-medium font-family-bold leading-tight md:text-left text-center">
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
