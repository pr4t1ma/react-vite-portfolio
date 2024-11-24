import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectImg from "../../assets/images/project.png";

import { FC } from "react";
type ProjactProps = {
  text: string;
  img?: string;
  title: string;
  figma?: string;
  bgColor?: string;
  github?: string;
  web?: string;
};
export const Project: FC<ProjactProps> = ({
  text,
  title,
  img,
  bgColor = "gray",
  figma,
  github,
  web,
}) => {
  return (
    <div className=" md:mx-auto bg-white shadow-2xl shadow-gray lg:my-10 p-7 ">
      <div className="project-header flex justify-between">
        <div className="project-folder ">
          <FontAwesomeIcon className=" text-2xl text-oxblood" icon={faFolder} />
        </div>
        <div className="polyline text-2xl text-oxblood flex gap-3 ">
          {web && (
            <a target="_blank" rel="noreferrer" href={web}>
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          )}
          {github && (
            <a target="_blank" rel="noreferrer" href={github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {figma && (
            <a target="_blank" rel="noreferrer" href={figma}>
              <FontAwesomeIcon icon={faFigma} />
            </a>
          )}
        </div>
      </div>
      <div className="project-title">
        <div
          className=" overflow-hidden rounded-lg"
          style={{ backgroundColor: bgColor }}
        >
          <img src={img || ProjectImg} alt="" />
        </div>
        <h3 className="text-3xl text-warmGray-800 bold my-2">{title}</h3>
      </div>
      <div className="project-description">
        <p>{text}</p>
      </div>
    </div>
  );
};
