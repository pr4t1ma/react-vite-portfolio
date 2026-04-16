import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import imgBerlinbite from "../../assets/images/brlinbites.png";
import { AnimatedHeading } from "../../components/AnimatedHeading/AnimatedHeading";

export default function BerlinBitesPage() {
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
          <AnimatedHeading
            level={1}
            className="text-5xl md:text-6xl font-poppins font-bold text-primary dark:text-white mb-6"
            triggerOnce={true}
          >
            Berlin Bites
          </AnimatedHeading>
          <p className="text-xl text-primary dark:text-gray-300 font-inter mb-8 leading-relaxed">
            An AI-driven restaurant discovery platform designed to help Berlin
            food enthusiasts find the best dining experiences. This case study
            demonstrates intelligent design that leverages user reviews and AI
            recommendations to deliver personalized dining suggestions.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://www.figma.com/proto/IVBX8yWlBTr5jAuJU99CRT/Wireframe?node-id=480-23769&t=fb3oAlZFBfsLMSRi-1&scaling=min-zoom&content-scaling=fixed&page-id=143%3A29354&starting-point-node-id=143%3A31615"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-accent hover:opacity-90 text-white px-6 py-3 rounded-lg font-poppins font-semibold transition"
            >
              <FontAwesomeIcon icon={faFigma} />
              View Prototype
            </a>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg card-zoom-shadow card-click-effect">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                4
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                User Personas
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg card-zoom-shadow card-click-effect">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                8+
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                User Interviews
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg card-zoom-shadow card-click-effect">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                25+
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                Wireframe Screens
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg card-zoom-shadow card-click-effect">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                7
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                Months Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 py-12">
        <div
          className="rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundColor: "#ddc" }}
        >
          <img
            src={imgBerlinbite}
            alt="Berlin Bites Platform"
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
              <strong>Role:</strong> UX/UI Designer & Product Designer
            </p>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
              <strong>Objective:</strong> Design an intelligent restaurant
              discovery platform that uses AI analysis of user reviews to
              provide personalized dining recommendations for Berlin food
              enthusiasts
            </p>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              <strong>Duration:</strong> 7 months (Research, Design,
              Prototyping, User Testing)
            </p>
          </div>

          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
              Key Challenges
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>✓ Display AI recommendations in user-friendly way</li>
              <li>✓ Build trust in algorithmic suggestions</li>
              <li>✓ Integrate massive restaurant dataset</li>
              <li>✓ Make review analysis results transparent</li>
              <li>✓ Personalize experience without overwhelming options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research & Findings */}
      <section className="bg-tertiary dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedHeading
            level={2}
            className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12"
            triggerOnce={true}
          >
            Research & Findings
          </AnimatedHeading>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary dark:text-white mb-4 flex items-center gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-poppins">
                  1
                </span>
                User Research
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                Conducted 8+ interviews with diverse Berlin food enthusiasts,
                from casual diners to food critics. Key finding: Users feel
                overwhelmed by restaurant choices and struggle to distinguish
                between generic reviews and genuine recommendations that match
                their taste.
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
                <li>• Users need smart filtering beyond star ratings</li>
                <li>• Context matters (occasion, budget, cuisine type)</li>
                <li>
                  • AI recommendations need transparency and explainability
                </li>
                <li>
                  • Visual restaurant previews critical for decision-making
                </li>
                <li>• Social proof from similar users more trustworthy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary dark:text-white mb-4 flex items-center gap-3">
                <span className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-poppins">
                  3
                </span>
                Target Audience
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                Primary users are food enthusiasts aged 25-55 living in/visiting
                Berlin, seeking curated dining recommendations. Secondary
                audience includes tourists looking for authentic local dining
                experiences and food bloggers/critics seeking discovery
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <AnimatedHeading
          level={2}
          className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12"
          triggerOnce={true}
        >
          My Design Journey
        </AnimatedHeading>

        <div className="space-y-8">
          {/* Brand & Typography */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg card-zoom-shadow card-click-effect">
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
                Design Approach
              </h3>
              <div className="space-y-4 font-inter text-primary dark:text-gray-300">
                <p>
                  Warm, inviting aesthetic reflecting Berlin's food culture.
                  Emphasis on visual storytelling through restaurant imagery and
                  user-generated content.
                </p>
                <p>
                  Clear information hierarchy separating recommendations from
                  details. Trust-building through transparent AI explainability
                  showing "why" behind recommendations.
                </p>
                <p>
                  Community-driven design with prominent user reviews and
                  ratings helping build confidence in AI suggestions.
                </p>
              </div>
            </div>

            <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg card-zoom-shadow card-click-effect">
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
                Color Strategy
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#D4A574" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Warm Gold
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #D4A574
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#2C3E50" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Deep Navy
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #2C3E50
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#E8DCC8" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Cream
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #E8DCC8
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes */}
          <div>
            <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
              Wireframes & User Flows
            </h3>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
              Created 25+ wireframes mapping user journeys: discovery,
              restaurant details, personalized recommendations, and review
              interactions. Designed 4 distinct user personas with tailored
              recommendation algorithms for different dining preferences and
              behaviors.
            </p>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg h-64 flex items-center justify-center">
              <p className="font-inter text-primary dark:text-gray-300 text-center">
                [Wireframe Mockup - 25+ screens designed]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-tertiary dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedHeading
            level={2}
            className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12"
            triggerOnce={true}
          >
            Core Features
          </AnimatedHeading>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg card-zoom-shadow card-click-effect">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                AI Recommendations
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Smart algorithm analyzing user preferences</li>
                <li>✓ Review sentiment analysis for quality insights</li>
                <li>✓ Personalized suggestions based on taste profile</li>
                <li>✓ Transparent "why" explanations</li>
                <li>✓ Learn from user feedback & ratings</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg card-zoom-shadow card-click-effect">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Discovery & Browsing
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Advanced filtering (cuisine, budget, rating)</li>
                <li>✓ Smart search across restaurant database</li>
                <li>✓ Trending restaurants & popular dishes</li>
                <li>✓ Neighborhood-based discovery</li>
                <li>✓ Collections & curated lists</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg card-zoom-shadow card-click-effect">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Review & Ratings
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Analyzed sentiment from multiple sources</li>
                <li>✓ User review contributions & photos</li>
                <li>✓ Filter by review recency and quality</li>
                <li>✓ Helpful rating on individual reviews</li>
                <li>✓ Expert vs. community reviews comparison</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg card-zoom-shadow card-click-effect">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Social & Sharing
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Share recommendations with friends</li>
                <li>✓ Follow food-focused users</li>
                <li>✓ Save favorites & personal lists</li>
                <li>✓ Social proof from similar users</li>
                <li>✓ Booking integration with restaurants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Testing */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <AnimatedHeading
          level={2}
          className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12"
          triggerOnce={true}
        >
          User Testing & Feedback
        </AnimatedHeading>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg card-zoom-shadow card-click-effect">
            <h3 className="text-2xl font-poppins font-bold text-accent mb-6">
              Positive Feedback
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>✓ AI recommendations surprisingly accurate</li>
              <li>✓ Beautiful visual presentation of restaurants</li>
              <li>✓ Easy navigation and discovery process</li>
              <li>✓ Loved community reviews & user photos</li>
              <li>✓ Trust in transparent recommendation logic</li>
            </ul>
          </div>

          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg card-zoom-shadow card-click-effect">
            <h3 className="text-2xl font-poppins font-bold text-accent mb-6">
              Areas for Enhancement
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>• Dietary restrictions filters needed</li>
              <li>• Events & special dining experiences</li>
              <li>• Price prediction & value indicators</li>
              <li>• Real-time availability & wait times</li>
              <li>• Personalized dining experience scoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design Solutions */}
      <section className="bg-secondary dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
            Design Solutions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
                Building Trust in AI Recommendations
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                Rather than presenting AI suggestions as magic, designed
                transparent explanations ("recommended because you liked Italian
                cuisine in Friedrichshain"). Showed similar user profiles who
                enjoyed the restaurant, building social proof. Included
                confidence scores and reasoning visible to users.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
                Visual-First Information Architecture
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
                Designed rich media-centered layout prioritizing restaurant
                photography. Essential details (cuisine, price, location)
                immediately visible. Detailed reviews and user photos accessible
                but not overwhelming. Maps integration for location context and
                travel time.
              </p>
              <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg h-64 flex items-center justify-center">
                <p className="font-inter text-primary dark:text-gray-300 text-center">
                  [Information Architecture Diagram]
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
                Interactive Prototype
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                High-fidelity Figma prototype demonstrating recommendation
                flows, restaurant details, review interactions, and
                personalization features with seamless transitions and intuitive
                micro-interactions.
              </p>
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
              A restaurant discovery platform that demystifies AI
              recommendations through transparency and trust-building. Empowers
              users to discover new dining experiences while leveraging
              intelligent algorithms that learn from community feedback.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-poppins font-semibold text-primary dark:text-white mb-3">
              Lessons Learned
            </h3>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              Users need to understand why AI recommends something, not just
              trust the recommendation. Visual design carries weight—restaurant
              photos matter more than descriptions. Community trust and social
              proof essential for adoption of algorithmic suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-primary dark:bg-gray-800 text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Interested in this project?
          </h2>
          <p className="text-lg font-inter mb-8 opacity-90">
            Let's discuss how intelligent design can enhance user discovery
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
