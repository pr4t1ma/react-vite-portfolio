import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="container mx-auto bg-white bg-opacity-50 shadow-xlS p-5 my-3 ">
      <div className="accordion">
        <div
          className="accordion-title cursor-pointer flex justify-between"
          onClick={() => setIsActive(!isActive)}
        >
          <h2 className="text-tan font-bold">{title}</h2>
          <div className="">
            {isActive ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </div>
        </div>
        {isActive && <div className="accordion-contain">{content}</div>}
      </div>
    </div>
  );
};
