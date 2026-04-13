import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import imgBundesplaz from "../../assets/images/bundes-01.png";

export default function BundesplatzPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-primary dark:bg-gray-900 text-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
            <span className="font-poppins font-bold">Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary dark:text-white mb-6">
            Bundesplatz Kino
          </h1>
          <p className="text-xl text-primary dark:text-gray-300 font-inter mb-8 leading-relaxed">
            A comprehensive UX/UI redesign of a local cinema website in Berlin.
            This case study demonstrates user-centered design through research,
            prototyping, and iterative design improvements.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://pr4t1ma.github.io/bundesplatz-kino/#/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-accent hover:opacity-90 text-white px-6 py-3 rounded-lg font-poppins font-semibold transition"
            >
              <FontAwesomeIcon icon={faGlobe} />
              Visit Website
            </a>
            <a
              href="https://github.com/pr4t1ma/bundesplatz-kino"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-poppins font-semibold transition"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
            <a
              href="https://www.figma.com/proto/TEZivjw1eL9fvCDt5Sdltq/Bundesplatz-Kino-Berlin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-white px-6 py-3 rounded-lg font-poppins font-semibold transition"
            >
              <FontAwesomeIcon icon={faFigma} />
              Design
            </a>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                5
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                Research Methods
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                8+
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                User Interviews
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                15
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                Wireframe Screens
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                2
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                Design Iterations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 py-12">
        <div
          className="rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundColor: "#F5C824" }}
        >
          <img
            src={imgBundesplaz}
            alt="Bundesplatz Kino Website"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <h2 className="text-3xl font-poppins font-bold text-primary dark:text-white mb-6">
              Project Brief
            </h2>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
              <strong>Role:</strong> UX/UI Designer
            </p>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
              <strong>Objective:</strong> Redesign the Bundesplatz Kino website
              to improve user experience and increase online bookings
            </p>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              <strong>Duration:</strong> 8 weeks
            </p>
          </div>

          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
              Key Challenges
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>✓ Poor information hierarchy</li>
              <li>✓ Complicated booking process</li>
              <li>✓ Not mobile-optimized</li>
              <li>✓ Low user engagement</li>
              <li>✓ Outdated design aesthetic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research & Findings */}
      <section className="bg-tertiary dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
            Research & Findings
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary dark:text-white mb-4 flex items-center gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-poppins">
                  1
                </span>
                User Research
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                Conducted interviews with 8+ cinema visitors to understand their
                needs, pain points, and expectations. Found that users struggle
                to find current showtimes and complete the booking process.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary dark:text-white mb-4 flex items-center gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-poppins">
                  2
                </span>
                Key Insights
              </h3>
              <ul className="font-inter text-primary dark:text-gray-300 leading-relaxed space-y-2">
                <li>
                  • Users want quick access to current movies and showtimes
                </li>
                <li>
                  • Mobile-first approach is essential (70% browse on mobile)
                </li>
                <li>• Booking process must be intuitive and fast</li>
                <li>• Clear content hierarchy needed for better navigation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary dark:text-white mb-4 flex items-center gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-poppins">
                  3
                </span>
                Opportunities
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                Redesign with focus on usability, improve visual hierarchy,
                simplify the booking flow, and create a modern aesthetic that
                reflects the cinema's premium positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
          My UI/UX Project Journey
        </h2>

        <div className="space-y-8">
          {/* Brand & Typography */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
                Brand Color
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#F5C824" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Primary Gold
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #F5C824
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#1a1a1a" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Dark
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #1a1a1a
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
                Typography
              </h3>
              <div className="space-y-4 font-inter text-primary dark:text-gray-300">
                <div>
                  <p className="font-poppins font-semibold text-lg">Display</p>
                  <p className="text-sm">Poppins Bold - 48px</p>
                </div>
                <div>
                  <p className="font-poppins font-semibold">Heading</p>
                  <p className="text-sm">Poppins Regular - 24px</p>
                </div>
                <div>
                  <p className="font-inter">Body</p>
                  <p className="text-sm">Inter Regular - 16px</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes */}
          <div>
            <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
              Wireframes & Sitemap
            </h3>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
              Created 15+ wireframes to visualize the user flow and information
              architecture. Mapped out 8 main pages including homepage, movie
              listings, movie details, checkout, and user account.
            </p>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg h-64 flex items-center justify-center">
              <p className="font-inter text-primary dark:text-gray-300 text-center">
                [Wireframe Mockup - 15+ screens designed]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-tertiary dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
            Before & After
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary dark:text-white mb-4">
                Before
              </h3>
              <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg mb-4">
                <p className="font-inter text-white dark:text-gray-300 mb-3">
                  <strong>Issues:</strong>
                </p>
                <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                  <li>• Cluttered homepage with no clear hierarchy</li>
                  <li>• Outdated visual design</li>
                  <li>• Difficult booking process</li>
                  <li>• Poor mobile experience</li>
                  <li>• Slow loading times</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary dark:text-white mb-4">
                After
              </h3>
              <div className="bg-accent p-6 rounded-lg text-white mb-4">
                <p className="font-poppins font-bold mb-3">Improvements:</p>
                <ul className="space-y-2 font-inter text-sm">
                  <li>✓ Clear visual hierarchy and navigation</li>
                  <li>✓ Modern, professional design</li>
                  <li>✓ Simplified 3-step booking flow</li>
                  <li>✓ Mobile-first responsive design</li>
                  <li>✓ Optimized performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Testing */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
          User Testing & Feedback
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-bold text-accent mb-6">
              Positive Feedback
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>✓ Much easier to find current movies</li>
              <li>✓ Quick and simple booking process</li>
              <li>✓ Clear and easy navigation</li>
              <li>✓ Professional modern look</li>
              <li>✓ Mobile experience improved</li>
            </ul>
          </div>

          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-bold text-accent mb-6">
              Areas for Improvement
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>• Add more filtering options for movies</li>
              <li>• Include customer reviews section</li>
              <li>• Add seat selection visualization</li>
              <li>• Implement notifications for new releases</li>
              <li>• Add membership/loyalty program</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prototype & Final Design */}
      <section className="bg-secondary dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
            Prototype & Final Design
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
                Interactive Prototype
              </h3>
              <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg h-64 flex items-center justify-center">
                <p className="font-inter text-primary dark:text-gray-300 text-center">
                  [Interactive Prototype - Figma Preview]
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
                Final Design – All Pages
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
                Final polished design with all 8+ pages including enhanced user
                interactions, proper spacing, and cohesive visual language
                throughout the website.
              </p>
              <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg h-64 flex items-center justify-center">
                <p className="font-inter text-primary dark:text-gray-300 text-center">
                  [Final Design - Complete UI Kit]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
          Key Takeaways
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-poppins font-semibold text-primary dark:text-white mb-3">
              Design Impact
            </h3>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              The redesigned website prioritizes user experience through
              research and testing, resulting in a clean, modern interface that
              increases user engagement and simplifies the booking process.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-poppins font-semibold text-primary dark:text-white mb-3">
              Lessons Learned
            </h3>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              User interviews and testing are essential for understanding real
              pain points. Iteration based on feedback leads to better solutions
              than assumptions alone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-primary dark:bg-gray-800 text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Want to see more of my work?
          </h2>
          <p className="text-lg font-inter mb-8 opacity-90">
            Let's collaborate on your next project
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent hover:opacity-90 text-white px-8 py-4 rounded-lg font-poppins font-semibold transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
