import { FC } from "react";

type HeadingProps = {
  text: string;
};
export const Heading: FC<HeadingProps> = ({ text }) => {
  return (
    <div className="w-2/4 mx-auto items-left flex gap-5 justify-left my-20">
      <div className="border border-1 border-solid border-gray dark:border-gray-600 opacity-50 dark:opacity-30 h-0 flex-1 my-4"></div>
      <h1 className="text-3xl font-poppins font-bold whitespace-nowrap animate-shimmer text-gray-800 dark:text-white">
        {text}
      </h1>
      <div className="border border-1 border-solid border-gray dark:border-gray-600 opacity-50 dark:opacity-30 h-0 flex-1 my-4"></div>
    </div>
  );
};
