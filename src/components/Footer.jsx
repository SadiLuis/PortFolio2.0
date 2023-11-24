import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "/Rueda-Sadi-FullStack-Engineer.pdf";
import SocialIcon from "../utils/SocialIcon";

const Footer = () => {
  return (
    <div className="bg-black/80 text-white p-4 md:p-8 lg:p-12 flex flex-col md:flex-row justify-center items-center">
      <div className="flex space-x-4">
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
      </div>
    </div>
  );
};

export default Footer;
