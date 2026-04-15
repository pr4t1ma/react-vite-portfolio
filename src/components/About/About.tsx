import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
import { TextAnimate } from "../TextAnimate/TextAnimate";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <AnimatedHeading
            level={2}
            className="text-5xl lg:text-6xl font-poppins font-bold"
            variant="slide"
          >
            About Me
          </AnimatedHeading>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-orange-400 mt-6 rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6 animate-fade-in-left">
            <TextAnimate
              type="words"
              className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light"
              as="p"
            >
              I'm a UI/UX designer turned developer from Berlin with a passion for creating exceptional digital experiences. My journey started with design thinking and user research, which now complements my technical skills in web development.
            </TextAnimate>
            <TextAnimate
              type="words"
              className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light"
              as="p"
            >
              My design background has given me a strong foundation in understanding user needs and creating intuitive interfaces. Now, I'm combining this with modern web development technologies to build full-featured applications.
            </TextAnimate>
          </div>

          {/* Right Column - Journey */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-poppins font-bold text-gray-800 dark:text-white">
              My Journey
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <TextAnimate
                  type="words"
                  className="text-gray-700 dark:text-gray-300 text-lg pt-1"
                  as="span"
                >
                  UI/UX Design background with focus on user research
                </TextAnimate>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <TextAnimate
                  type="words"
                  className="text-gray-700 dark:text-gray-300 text-lg pt-1"
                  as="span"
                >
                  JavaScript course at ReDI School Berlin
                </TextAnimate>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <TextAnimate
                  type="words"
                  className="text-gray-700 dark:text-gray-300 text-lg pt-1"
                  as="span"
                >
                  Web development bootcamp at TechLabs Berlin
                </TextAnimate>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <TextAnimate
                  type="words"
                  className="text-gray-700 dark:text-gray-300 text-lg pt-1"
                  as="span"
                >
                  Continuous learning on Coursera and Udemy
                </TextAnimate>
              </li>
            </ul>
          </div>
        </div>

        {/* What I Love Doing - Minimal Cards */}
        <div className="mt-20">
          <h3 className="text-3xl font-poppins font-bold mb-12 text-gray-800 dark:text-white">
            What I Love Doing
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">✨</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold text-gray-800 dark:text-white mb-3">
                Design & Dev
              </h4>
              <TextAnimate
                type="words"
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
                as="p"
              >
                Bridging the gap between beautiful design and functional code
              </TextAnimate>
            </div>

            <div className="p-8 rounded-xl border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">👥</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold text-gray-800 dark:text-white mb-3">
                User Focus
              </h4>
              <TextAnimate
                type="words"
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
                as="p"
              >
                Creating solutions that solve real user problems
              </TextAnimate>
            </div>

            <div className="p-8 rounded-xl border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h4 className="text-xl font-poppins font-semibold text-gray-800 dark:text-white mb-3">
                Learning
              </h4>
              <TextAnimate
                type="words"
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
                as="p"
              >
                Constantly exploring new technologies and design trends
              </TextAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
