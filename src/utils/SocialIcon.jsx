/* eslint-disable react/prop-types */

const SocialIcon = ({ icon, text, color, href, download }) => {
  return (
    <li
      className={`w-[160px] h-[60px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-${color} rounded-2xl`}
    >
      <a
        className="flex justify-between items-center w-full text-white text-xl"
        href={href}
        download={download}
      >
        {icon}
        {text}
      </a>
    </li>
  )
};

export default SocialIcon;
