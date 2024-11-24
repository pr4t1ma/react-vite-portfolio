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
    <div className=" md:mx-auto bg-white shadow-lg shadow-gray p-7 rounded-lg border border-trueGray-100">
      <div className="project-header flex justify-between">
        <div className="project-folder p-2">
          <FontAwesomeIcon className=" text-2xl text-oxblood" icon={faFolder} />
        </div>
        <div className="polyline text-2xl text-oxblood flex gap-4">
          {web && (
            <a
              className="hover:bg-trueGray-100 block h-10 p-2 rounded-full w-10 text-center"
              target="_blank"
              rel="noreferrer"
              href={web}
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          )}
          {github && (
            <a
              className="hover:bg-trueGray-100 block h-10 p-2 rounded-full w-10 text-center"
              target="_blank"
              rel="noreferrer"
              href={github}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {figma && (
            <a
              className="hover:bg-trueGray-100 block h-10 p-2 rounded-full w-10 text-center"
              target="_blank"
              rel="noreferrer"
              href={figma}
            >
              <FontAwesomeIcon icon={faFigma} />
            </a>
          )}
        </div>
      </div>
      <div className="project-title">
        <div
          className=" overflow-hidden rounded-lg my-4"
          style={{ backgroundColor: bgColor }}
        >
          <img src={img || ProjectImg} alt="" />
        </div>
        <h3 className="text-2xl text-warmGray-800 bold my-2">{title}</h3>
      </div>
      <div className="project-description">
        <p>{text}</p>
      </div>
    </div>
  );
};
