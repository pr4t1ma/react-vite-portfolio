import { SocialMediaIcon } from "../SocialMedia/SocialMediaIcon";

export const Footer = () => {
  // const footermenu = [
  //   { label: "Home", href: "/" },
  //   { label: "Contact", href: "/" },
  // ];
  return (
    <div className=" bg-oxblood p-10 text-center shadow-4xl shadow-red-800 text-white">
      {/* <h1 className="text-xl ">Hello welcome to my site</h1> */}

      <SocialMediaIcon text-2xl />
      <p className="mt-10">&copy; Copyright 2024 Pratima</p>
    </div>
  );
};
