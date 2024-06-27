import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import "./header.scss";
import Button from "../button/Button";

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
  return (
    <header>
      <nav className="text-white flex items-start justify-between text-12">
        <div>
          <img src={logo} alt="gym24 logo" />
        </div>
        <ul className="flex gap-[75px]">
          {navLinks.map(({ routePath, title }) => {
            return (
              <li className="hover:text-yellow transition">
                <Link to={routePath}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="max-w-2xl mt-56">
        <span className="text-[64px] text-white font-medium font-family-extra-bold leading-tight">
          Free trial session with a trainer
        </span>
        <Button title={"Detailed"} extraClass={"w-[177px] mt-14"} />
      </div>
    </header>
  );
};

export default Header;
