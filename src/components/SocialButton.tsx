import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialButton: React.FC<{ href: string; icon: any; bgColor: string; textColor: string}> = ({
  href,
  icon,
  bgColor,
  textColor,

}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-full transition duration-300 ${bgColor} hover:opacity-50 h-12 transition-transform duration-300 hover:scale-110`}
    >
      <FontAwesomeIcon icon={icon} className={`text-2xl ${textColor}`} />
    </a>
  );
};

export default SocialButton;
