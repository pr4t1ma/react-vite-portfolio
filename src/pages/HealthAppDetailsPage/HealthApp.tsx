import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import imgHealth from "../../assets/images/Healthapp.png";

export default function HealthAppPage() {
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
            Health App
          </h1>
          <p className="text-xl text-primary dark:text-gray-300 font-inter mb-8 leading-relaxed">
            A comprehensive health monitoring application designed for users
            managing chronic conditions. This case study demonstrates
            user-centered design focused on vital sign tracking, personalized
            health insights, and preventive wellness management.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://www.figma.com/proto/iXi2ChI0nOwo3D3qPWXz7m/Health-app?node-id=424-2483&t=vQFsUL1HYAMFtaV0-1&scaling=min-zoom&content-scaling=fixed&page-id=424%3A2283&starting-point-node-id=424%3A2491"
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
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                2
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                User Personas
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                6+
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                User Interviews
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                18+
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                Wireframe Screens
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                6
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
          style={{ backgroundColor: "#00A8AB" }}
        >
          <img
            src={imgHealth}
            alt="Health App"
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
              <strong>Role:</strong> UX/UI Designer & Health Tech Specialist
            </p>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
              <strong>Objective:</strong> Design a health monitoring application
              that empowers users to track vital signs, receive personalized
              insights, and manage chronic conditions effectively
            </p>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              <strong>Duration:</strong> 6 months (Research, Design,
              Prototyping, User Testing)
            </p>
          </div>

          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
              Key Challenges
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>✓ Simplify medical data visualization</li>
              <li>✓ Build user trust with accurate data</li>
              <li>✓ Make health tracking non-intrusive</li>
              <li>✓ Provide actionable health insights</li>
              <li>✓ Accommodate diverse user literacy levels</li>
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
                Conducted 6+ interviews with patients managing hypertension and
                diabetes, healthcare professionals, and caregivers. Key finding:
                Users need simple, non-technical interfaces that provide clear
                actionable health guidance without overwhelming medical jargon.
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
                <li>• Users want simple, at-a-glance health status view</li>
                <li>• Trend visualization more valuable than raw numbers</li>
                <li>
                  • Reminders and notifications critical for medication
                  adherence
                </li>
                <li>• Data privacy and security paramount for health apps</li>
                <li>• Integration with wearable devices preferred</li>
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
                Primary users are patients aged 45+ managing chronic conditions
                (hypertension, diabetes, heart disease). Secondary users include
                family members/caregivers and healthcare providers who need to
                monitor patient progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
          My Design Journey
        </h2>

        <div className="space-y-8">
          {/* Brand & Typography */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
                Design Philosophy
              </h3>
              <div className="space-y-4 font-inter text-primary dark:text-gray-300">
                <p>
                  Clean, accessible interface built with inclusivity in mind.
                  Large touch targets for older users. High contrast for
                  readability.
                </p>
                <p>
                  Health data visualization designed for clarity. Color-coded
                  status indicators (green/yellow/red) for quick understanding
                  without language barriers.
                </p>
                <p>
                  Emphasis on trust through transparent data handling, privacy
                  controls, and medical accuracy.
                </p>
              </div>
            </div>

            <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
                Color Strategy
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#00A8AB" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Primary Health
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #00A8AB
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#27AE60" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Normal Range
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #27AE60
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#E74C3C" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Alert/High Risk
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #E74C3C
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
              Created 18+ wireframes mapping out critical user flows: vital sign
              entry, health dashboard, trend analysis, medication tracking, and
              alert management. Developed 2 distinct user personas with tailored
              experiences.
            </p>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg h-64 flex items-center justify-center">
              <p className="font-inter text-primary dark:text-gray-300 text-center">
                [Wireframe Mockup - 18+ screens designed]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-tertiary dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-poppins font-bold text-primary dark:text-white mb-12">
            Core Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Vital Sign Tracking
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Blood pressure monitoring (systolic/diastolic)</li>
                <li>✓ Blood glucose (sugar) level tracking</li>
                <li>✓ Heart rate monitoring</li>
                <li>✓ Weight management tracking</li>
                <li>✓ Manual entry & wearable integration</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Health Insights
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Visual health trend charts</li>
                <li>✓ Daily/weekly/monthly analytics</li>
                <li>✓ Personalized health recommendations</li>
                <li>✓ Risk alerts & notifications</li>
                <li>✓ Health goal tracking</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Medication Management
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Medication schedule & reminders</li>
                <li>✓ Dosage tracking verification</li>
                <li>✓ Side effect monitoring</li>
                <li>✓ Refill alerts & pharmacy integration</li>
                <li>✓ Medication history log</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Care Coordination
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Share data with healthcare providers</li>
                <li>✓ Family/caregiver access</li>
                <li>✓ Medical appointment scheduling</li>
                <li>✓ Secure messaging with doctors</li>
                <li>✓ Medical document storage</li>
              </ul>
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
              <li>✓ Simple, easy-to-understand interface</li>
              <li>✓ Health trend charts very helpful</li>
              <li>✓ Medication reminders reliable</li>
              <li>✓ Large text & buttons accessible</li>
              <li>✓ Data security reassuring</li>
            </ul>
          </div>

          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-bold text-accent mb-6">
              Areas for Enhancement
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>• Additional vital sign metrics support</li>
              <li>• Voice input for data entry</li>
              <li>• AI-powered health coaching</li>
              <li>• Integration with more wearable devices</li>
              <li>• Offline mode functionality</li>
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
                Accessible Health Dashboard
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                Designed dashboard with large, legible fonts and high-contrast
                colors for aging users. Status indicators use universal colors
                (green = good, yellow = caution, red = alert) that don't rely on
                text comprehension. At-a-glance health snapshot with drill-down
                detail options.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
                Trust & Privacy First
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
                Prominent privacy controls showing exactly what data is
                collected, stored, and shared. Clear consent flows for
                family/provider access. Encryption indicators visible to
                reassure users. Transparent about data retention and deletion
                policies.
              </p>
              <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg h-64 flex items-center justify-center">
                <p className="font-inter text-primary dark:text-gray-300 text-center">
                  [Privacy & Security Features Diagram]
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
                Interactive Prototype
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                High-fidelity Figma prototype incorporating accessibility
                features and demonstrating key user flows for vital sign
                tracking, medication management, and health analytics.
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
              A health monitoring solution that builds user trust through
              simplicity, transparency, and security. Empowers patients to take
              active role in managing their health while providing peace of mind
              through accessible data and clear guidance.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-poppins font-semibold text-primary dark:text-white mb-3">
              Lessons Learned
            </h3>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              Healthcare apps require accessible design, not just nice design.
              Privacy and security are features, not afterthoughts. Universal
              color coding transcends language barriers. Understanding user
              context (older, potentially stressed users) shapes all design
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-primary dark:bg-gray-800 text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Interested in healthcare design?
          </h2>
          <p className="text-lg font-inter mb-8 opacity-90">
            Let's discuss how design can improve health outcomes
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
