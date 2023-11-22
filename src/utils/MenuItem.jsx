/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

const MenuItem = ({ text, to, onClick }) => {
  return (
    <li className="py-6 text-4xl">
      <Link
        onClick={onClick}
        to={to}
        smooth={true}
        duration={500}
        className="text-black hover:text-white"
      >
        {text}
      </Link>
    </li>
  )
};

export default MenuItem;
