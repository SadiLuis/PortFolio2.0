import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "/Rueda-Sadi-FullStack-Engineer.pdf";
import MediaQuery from "react-responsive";
import MenuItem from "../utils/MenuItem";
import SocialIcon from "../utils/SocialIcon";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed z-10 w-48 top-10 flex flex-col items-center text-black right-0">
      {/* menu */}
      <MediaQuery minWidth={768}>
        <ul className="flex flex-col space-y-4 mt-4">
          <MenuItem text="Home" to="home" />
          <MenuItem text="About" to="about" />
          <MenuItem text="Skills" to="skills" />
          <MenuItem text="Work" to="work" />
          <MenuItem text="Contact" to="contact" />
        </ul>
      </MediaQuery>

      {/* Hamburger */}
      <MediaQuery maxWidth={767}>
        <div
          onClick={() => setNav(!nav)}
          className={`md:hidden flex justify-end items-end ${nav ? "top-10" : ""}`}
        >
          {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>
      </MediaQuery>

      {/* Mobile menu */}
      <MediaQuery maxWidth={767}>
        <ul
          className={`${
            nav ? "flex flex-col items-center" : "hidden"
          } bg-indigo-700/40 w-full mt-4 space-y-4 absolute top-10 right-0`}
        >
          <MenuItem text="Home" to="home" onClick={() => setNav(false)} />
          <MenuItem text="About" to="about" onClick={() => setNav(false)} />
          <MenuItem text="Skills" to="skills" onClick={() => setNav(false)} />
          <MenuItem text="Work" to="work" onClick={() => setNav(false)} />
          <MenuItem text="Contact" to="contact" onClick={() => setNav(false)} />
        </ul>
      </MediaQuery>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-10 left-10 space-y-4">
        <ul>
          <SocialIcon
            icon={<FaLinkedin />}
            color="blue-600"
            href="https://www.linkedin.com/in/sadi-luis-alberto-rueda-fullstack/"
          />
          <SocialIcon
            icon={<FaGithub />}
            color="gray-900"
            href="https://github.com/SadiLuis"
          />
          <SocialIcon
            icon={<BsFillPersonLinesFill />}
            color="gray-700"
            href={Resume}
            download
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
