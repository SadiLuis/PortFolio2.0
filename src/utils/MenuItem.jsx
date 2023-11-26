/* eslint-disable react/prop-types */
import { Link } from "react-scroll";


const MenuItem = ({ text, to, onClick }) => {
  return (
    <li className="py-6 text-4xl">
      <Link
        onClick={onClick}
        to={to}
        smooth={true}
        duration={800}
        className="text-white font-thin hover:text-emerald-800 duration-1000 hover:animate-pulse "
      >
        {text}
      </Link>
    </li>
  )
};

export default MenuItem;
