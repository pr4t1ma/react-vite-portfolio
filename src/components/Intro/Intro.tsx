import profilePic from "../../assets/profile-pic.png";

export const Intro = () => {
  return (
    <div className="my-5 p-5 sm:my-10 sm:p-10 w-fit text-left hadow-2xl lg:mx-auto animate-fade-in bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="md:order-2">
          <img
            src={profilePic}
            alt="Pratima Maharjan - Web Developer and UX Designer"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-3xl text-content text-center md:text-left space-y-4">
          <p className="py-0 text-3xl text-tan font-semibold font-poppins">
            My name is{" "}
          </p>
          <h1 className="pt-2 text-5xl lg:text-7xl font-poppins font-bold tracking-tight animate-gradient-text">
            Pratima Maharjan
          </h1>
          <h2 className="py-2 text-2xl font-poppins font-medium animate-underline text-gray-800 dark:text-gray-300">
            I am currently Learning Web development
          </h2>

          <div className="info-me my-1">
            <p className="text-lg leading-relaxed font-light font-inter max-w-prose space-y-4 text-gray-700 dark:text-gray-300">
              I'm a UI/UX designer currently diving into web development. I am
              passionate about creating seamless user experiences by blending
              design with technology. At the moment, I am focusing on learning
              HTML, CSS, Tailwind CSS, Webflow, JavaScript, and React (frontend
              development) through online platforms like Coursera and Udemy. I
              have also completed a JavaScript course at ReDI School and web
              development courses at TechLabs, where I worked on several
              projects. In my free time, I enjoy watching movies, listening to
              music, and traveling.
            </p>
          </div>
          <div className="cta-buttons flex gap-4 pt-6 flex-wrap">
            <a
              href="/react-vite-portfolio/contact"
              className="bg-oxblood text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-hover-glow"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-oxblood text-oxblood px-6 py-3 rounded-lg font-semibold hover:bg-oxblood hover:text-white transition-all duration-300 transform hover:scale-105 dark:text-oxblood"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
