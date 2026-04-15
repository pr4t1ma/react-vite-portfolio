import { FC } from "react";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

type HeadingProps = {
  text: string;
  variant?: "fade-scale" | "slide" | "rotate";
  withUnderline?: boolean;
  withBorders?: boolean;
};

export const Heading: FC<HeadingProps> = ({
  text,
  variant = "fade-scale",
  withUnderline = false,
  withBorders = false,
}) => {
  return (
    <div className="w-full md:w-3/4 mx-auto flex items-center justify-center gap-6 my-20 px-4">
      {withBorders && (
        <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-orange-600 dark:to-orange-400"></div>
      )}
      <AnimatedHeading
        level={2}
        className="text-4xl lg:text-5xl font-poppins font-bold whitespace-nowrap text-gray-800 dark:text-white"
        variant={variant}
        withUnderline={withUnderline}
      >
        {text}
      </AnimatedHeading>
      {withBorders && (
        <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-orange-600 dark:to-orange-400"></div>
      )}
    </div>
  );
};
