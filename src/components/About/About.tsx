export const About = () => {
  return (
    <section className="py-16 px-4 md:py-20 bg-warmGray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-5xl font-poppins font-bold mb-8 animate-text-scale text-gray-800 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a UI/UX designer turned developer from Berlin with a passion
              for creating exceptional digital experiences. My journey started
              with design thinking and user research, which now complements my
              technical skills in web development.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              My design background has given me a strong foundation in
              understanding user needs and creating intuitive interfaces. Now,
              I'm combining this with modern web development technologies to
              build full-featured applications.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-poppins font-semibold text-hover-color text-gray-800 dark:text-white">
              My Journey
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-oxblood font-bold">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  UI/UX Design background with focus on user research
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-oxblood font-bold">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  JavaScript course at ReDI School Berlin
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-oxblood font-bold">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Web development bootcamp at TechLabs Berlin
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-oxblood font-bold">→</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Continuous learning on Coursera and Udemy
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-3xl font-poppins font-bold mb-6 animate-color-pulse text-gray-800 dark:text-white">
            What I Love Doing
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xl font-poppins font-semibold text-oxblood mb-2">
                Design & Dev
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Bridging the gap between beautiful design and functional code
              </p>
            </div>
            <div>
              <h4 className="text-xl font-poppins font-semibold text-oxblood mb-2">
                User Focus
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Creating solutions that solve real user problems
              </p>
            </div>
            <div>
              <h4 className="text-xl font-poppins font-semibold text-oxblood mb-2">
                Learning
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Constantly exploring new technologies and design trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
