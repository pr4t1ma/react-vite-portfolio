import { FC } from "react";
type PanelsProps = {
  text: string;
  heading: string;
  date: string;
};

export const Panels: FC<PanelsProps> = ({ text, heading, date }) => {
  return (
    <div className="">
      <div className="panel text-left mb-10">
        <div className="panel-heading text-2xl pb-3 text-blackboard font-bold">
          <h2>{heading}</h2>

          <h4>{date}</h4>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};
