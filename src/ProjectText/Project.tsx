import { Tags } from "../Tags/Tags";

export const Project = ({ title, subtitle, text, img }) => {
  const items = [
    { label: "HTML", href: "/" },
    { label: "Grid", href: "/" },
    { label: "Flex", href: "/" },
    { label: "Bootstrape", href: "/" },
    { label: "TailwindCSS", href: "/" },
    { label: "React", href: "/" },
  ];
  return (
    <div className=" md:col-start-5 md:col-end-12 md:flex-1 md:row-start-1 md:row-end-2 border-2  ">
      <div className="projectwrapper grid grid-cols-12 grid-row-auto gap-5 ">
        <div className="projectimg col-start-1 col-end-3 row-start-1 row-end-3">
          <img className="border-2 w-90" src={img} alt="" />
        </div>
        <div className="project-details col-start-4 col-end-12 row-start-1 row-end-3 ">
          <div className="project-title text-oxblood font-bold text-right mb-5 mx-3">
            <h1 className="text-2xl text-black ">{title}</h1>
            <h2 className="text-xl py-3 flex-end">{subtitle}</h2>
          </div>

          <p className="bg-forestgreen text-white px-5 mb-10  py-8  shadow-2xl shadow-gray">
            {text}
          </p>
          <Tags items={items} />
        </div>
      </div>
    </div>
  );
};
