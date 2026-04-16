import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectImg from "../../assets/images/project.png";
import { Link } from "react-router-dom";

import { FC } from "react";
type ProjactProps = {
  text: string;
  img?: string;
  title: string;
  figma?: string;
  bgColor?: string;
  github?: string;
  web?: string;
  projectPath?: string;
};
export const Project: FC<ProjactProps> = ({
  text,
  title,
  img,
  bgColor = "gray",
  figma,
  github,
  web,
  projectPath,
}) => {
  return (
    <div className="md:mx-auto bg-white dark:bg-gray-800 shadow-lg shadow-gray p-7 rounded-lg border border-trueGray-100 dark:border-gray-700 card-zoom-shadow card-click-effect">
      <div className="project-header flex justify-between">
        <div className="project-folder p-2">
          <FontAwesomeIcon className="text-2xl text-oxblood" icon={faFolder} />
        </div>
        <div className="polyline text-2xl text-oxblood flex gap-4">
          {web && (
            <a
              className="hover:rounded-full w-10 h-10 p-2 text-center block transition hover:bg-gray-100 dark:hover:bg-gray-700"
              target="_blank"
              rel="noreferrer"
              href={web}
              aria-label={`Visit ${title} website`}
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          )}
          {github && (
            <a
              className="hover:rounded-full w-10 h-10 p-2 text-center block transition hover:bg-gray-100 dark:hover:bg-gray-700"
              target="_blank"
              rel="noreferrer"
              href={github}
              aria-label={`View ${title} on GitHub`}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {figma && (
            <a
              className="hover:rounded-full w-10 h-10 p-2 text-center block transition hover:bg-gray-100 dark:hover:bg-gray-700"
              target="_blank"
              rel="noreferrer"
              href={figma}
              aria-label={`View ${title} Figma design`}
            >
              <FontAwesomeIcon icon={faFigma} />
            </a>
          )}
        </div>
      </div>
      <div className="project-title">
        <div
          className="overflow-hidden rounded-lg my-4"
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={img || ProjectImg}
            alt={`${title} project preview`}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <h3 className="text-2xl font-poppins font-bold my-2 text-hover-glow text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="project-description">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{text}</p>
        {projectPath && (
          <Link
            to={projectPath}
            className="inline-block bg-accent text-white px-4 py-2 rounded font-poppins font-semibold hover:opacity-90 transition"
          >
            View Details
          </Link>
        )}
      </div>
    </div>
  );
};
