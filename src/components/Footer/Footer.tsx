import { SocialMediaIcon } from "../SocialMedia/SocialMediaIcon";

export const Footer = () => {
  return (
    <div className="bg-primary dark:bg-gray-900 p-10 text-center shadow-lg shadow-red-800 text-white transition-colors duration-300">
      <SocialMediaIcon />
      <p className="mt-10">&copy; Copyright 2024 Pratima</p>
    </div>
  );
};
