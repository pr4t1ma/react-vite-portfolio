import { FC } from "react";

type GetInTouchProps = {
  title: string;
  subtitle: string;
  text: string;
};

export const GetInTouch: FC<GetInTouchProps> = ({ title, subtitle, text }) => {
  return (
    <div className="get-intouch container  mx-2 my-20 w-fit bg-white shadow-2xl p-20 text-center mb-20  md:mx-auto lg:max-w-4xl lg:mx-auto">
      <img src="../images/Pam.jpg" alt="" />

      <h1 className="text-tan my-5 text-3xl "> {title} </h1>
      <h2 className="my-2 text-2xl">{subtitle}</h2>
      <p className="text-xl">{text}</p>
    </div>
  );
};
