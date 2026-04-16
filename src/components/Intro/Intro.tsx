import profilePic from "../../assets/profile-pic.png";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

export const Intro = () => {
  return (
    <div className="intro-section min-h-screen flex items-center justify-center sm:px-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-5xl">
        <div className="flex gap-12 flex-col md:flex-row items-center md:items-start">
          {/* Profile Image - Right side on desktop */}
          <div className="md:order-2 md:flex-shrink-0 animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src={profilePic}
                alt="Pratima Maharjan - Web Developer and UX Designer"
                className="relative rounded-2xl shadow-2xl w-64 h-64 object-cover"
              />
            </div>
          </div>

          {/* Text Content - Left side */}
          <div className="md:order-1 flex-1 space-y-6 text-center md:text-left animate-fade-in-left">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light tracking-wide uppercase">
                Welcome to my portfolio
              </p>
              <AnimatedHeading
                level={1}
                className="text-6xl lg:text-7xl font-poppins font-bold"
                variant="fade-scale"
              >
                <span className="bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-400 dark:to-orange-300 bg-clip-text text-transparent">
                  Pratima Maharjan
                </span>
              </AnimatedHeading>
            </div>

            {/* Professional Title */}
            <div className="pt-4">
              <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-gray-800 dark:text-gray-100 leading-relaxed">
                UI/UX Designer{" "}
                <span className="text-orange-600 dark:text-orange-400">&</span>{" "}
                Web Developer
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-600 to-orange-400 mt-4 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed font-inter max-w-prose text-gray-700 dark:text-gray-300 pt-4">
              I'm passionate about creating seamless user experiences by
              blending design with technology. I specialize in UI/UX design and
              frontend development, crafting digital products that are both
              beautiful and functional.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-8 flex-wrap justify-center md:justify-start">
              <a
                href="/react-vite-portfolio/contact"
                className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-8 animate-float">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Scroll to explore
              </p>
              <div className="text-2xl text-orange-600 dark:text-orange-400">
                ↓
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
