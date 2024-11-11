import { Project } from "../ProjectText/Project";
const items = [
  { name: "React projects" },
  { name: "UX projects" },
  { name: "Webflow projects" },
];

export const FeaturedProject = () => {
  return (
    <div className="container mx-5 lg:mx-auto md:grid md:grid-cols-12">
      <ul className="flex gap-10">
        {items.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <Project
        img="../images/project1.png"
        title="Featured Projects "
        subtitle="12 column grid system in CSS and Tailwind CSS"
        text="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and np"
      />
    </div>
  );
};
