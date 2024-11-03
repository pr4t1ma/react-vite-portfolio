import { FeaturedProject } from "../FeaturedProject/FeaturedProject";
import { Heading } from "../Heading/Heading";
import { Project } from "../Project/Project";
import Projectjourney from "../Project/Projectjourney";
import { TabbedPanels } from "../TabbedPanels/TabbedPanels";
import ProjectInfo from "./ProjectInfo";

export const Experence = () => {
  return (
    <div>
      <Heading text="My Skills" />
      <TabbedPanels />
      <Heading text="My featured Projects" />
      <FeaturedProject />
      <div className="Projects container  mx-auto grid gap-3 grid-cols-1  my-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:my-10">
        <Project />
        <Project />
        <Project />
      </div>
      <div className="container mx-auto place-items-center w-fit block mb-20 shadow-2xl shadow-gray">
        <a className="button" href="/">
          See more
        </a>
      </div>
      <ProjectInfo />
    </div>
  );
};
