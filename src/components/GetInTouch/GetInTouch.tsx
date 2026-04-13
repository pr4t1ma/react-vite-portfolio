import { FC } from "react";

type GetInTouchProps = {
  title: string;
  subtitle: string;
  text: string;
};

export const GetInTouch: FC<GetInTouchProps> = ({ title, subtitle, text }) => {
  return (
    <div className="get-intouch container mx-2 my-20 w-fit text-center mb-20 md:mx-auto lg:max-w-4xl lg:mx-auto bg-white dark:bg-gray-800 transition-colors duration-300">
      <img
        src="../images/Pam.jpg"
        alt="Contact section header"
        className="w-full rounded-lg"
      />

      <h1 className="text-tan my-5 text-4xl font-poppins font-bold animate-text-scale">
        {title}
      </h1>
      <h2 className="my-2 text-3xl font-poppins font-semibold animate-underline text-gray-800 dark:text-white">
        {subtitle}
      </h2>
      <p className="text-lg font-inter text-gray-700 dark:text-gray-300">
        {text}
      </p>
    </div>
  );
};
