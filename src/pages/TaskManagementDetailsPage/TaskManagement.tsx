import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import imgTask from "../../assets/images/Taask.jpg";

export default function TaskManagementPage() {
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
            Tassk
          </h1>
          <p className="text-xl text-primary dark:text-gray-300 font-inter mb-8 leading-relaxed">
            A mobile-first task management application designed for IT
            professionals. This project demonstrates user-centered design
            focused on productivity, efficient task prioritization, and seamless
            workflow management.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://www.figma.com/proto/HLS6XWJzJjfZAfafl3YXu6/Task-management-app?node-id=445-8052&t=tYhmJTxzb4kfJb5O-1&scaling=scale-down&content-scaling=fixed&page-id=7%3A2&starting-point-node-id=445%3A8122&show-proto-sidebar=1"
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
                3
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                User Personas
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                5+
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                User Interviews
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                20+
              </p>
              <p className="font-inter text-primary dark:text-gray-300">
                Wireframe Screens
              </p>
            </div>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-4xl font-poppins font-bold text-accent mb-2">
                8
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
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={imgTask}
            alt="Tassk Task Management App"
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
              <strong>Role:</strong> UX/UI Designer & Product Strategist
            </p>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
              <strong>Objective:</strong> Design a task management application
              that enables IT professionals to prioritize deadlines, collaborate
              efficiently, and maximize productivity
            </p>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              <strong>Duration:</strong> 8 months (Research, Design,
              Prototyping, User Testing)
            </p>
          </div>

          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-6">
              Key Challenges
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>✓ Complex feature set needs simplification</li>
              <li>✓ Team collaboration must be intuitive</li>
              <li>✓ Mobile and desktop parity required</li>
              <li>✓ Time tracking integration needed</li>
              <li>✓ Competing app functionality overwhelming</li>
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
                Conducted 5+ interviews with IT professionals, project managers,
                and development team leads to understand their workflow, pain
                points, and productivity challenges. Key finding: Users struggle
                with task prioritization and unclear deadlines across multiple
                projects.
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
                <li>• Users need quick, at-a-glance task overview</li>
                <li>• Deadline visibility is critical for planning</li>
                <li>• Collaboration features must be non-intrusive</li>
                <li>• Mobile access essential for on-the-go teams</li>
                <li>
                  • Drag-and-drop prioritization preferred over modal dialogs
                </li>
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
                Primary users are IT professionals, software developers, and
                project managers working in agile teams. Secondary users include
                team leads and product owners who need oversight of multiple
                projects and team members.
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
                Design Approach
              </h3>
              <div className="space-y-4 font-inter text-primary dark:text-gray-300">
                <p>
                  Clean, minimal interface focused on clarity and efficiency.
                  Color-coded priority levels for quick visual scanning.
                </p>
                <p>
                  Emphasis on white space to reduce cognitive load. Icons and
                  visual indicators replace text where possible.
                </p>
                <p>
                  Dark mode support recognizing that developers often work in
                  low-light environments.
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
                    style={{ backgroundColor: "#FF6B6B" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      High Priority
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #FF6B6B
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#4ECDC4" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Medium Priority
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #4ECDC4
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: "#95E1D3" }}
                  ></div>
                  <div>
                    <p className="font-poppins font-semibold text-primary dark:text-white">
                      Low Priority
                    </p>
                    <p className="font-inter text-sm text-primary dark:text-gray-300">
                      #95E1D3
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
              Created 20+ wireframes mapping out core user flows: task creation,
              priority management, deadline setting, team collaboration, and
              time tracking. Developed 3 distinct user personas with tailored
              user paths for each role.
            </p>
            <div className="bg-tertiary dark:bg-gray-800 p-6 rounded-lg h-64 flex items-center justify-center">
              <p className="font-inter text-primary dark:text-gray-300 text-center">
                [Wireframe Mockup - 20+ screens designed]
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
                Task Management
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Drag-and-drop task prioritization</li>
                <li>✓ Color-coded priority levels</li>
                <li>✓ Due date visual indicators</li>
                <li>✓ Task templates for recurring work</li>
                <li>✓ Subtask breakdown functionality</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Collaboration
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Team task assignment</li>
                <li>✓ Real-time status updates</li>
                <li>✓ Comment & feedback thread</li>
                <li>✓ Task sharing & visibility control</li>
                <li>✓ Team progress dashboard</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Time Tracking
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Built-in timer functionality</li>
                <li>✓ Time estimate vs. actual tracking</li>
                <li>✓ Detailed time reports by task</li>
                <li>✓ Weekly productivity analytics</li>
                <li>✓ Billable hours tracking</li>
              </ul>
            </div>

            <div className="bg-primary dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-poppins font-semibold text-accent mb-4">
                Organization
              </h3>
              <ul className="space-y-2 font-inter text-white dark:text-gray-300 text-sm">
                <li>✓ Multiple project management</li>
                <li>✓ Custom tag & label system</li>
                <li>✓ Advanced filtering & search</li>
                <li>✓ Kanban board view</li>
                <li>✓ Calendar timeline view</li>
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
              <li>✓ Intuitive drag-and-drop interface</li>
              <li>✓ Clear visual priority system</li>
              <li>✓ Fast task creation workflow</li>
              <li>✓ Excellent mobile responsiveness</li>
              <li>✓ Time tracking integration helpful</li>
            </ul>
          </div>

          <div className="bg-tertiary dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-bold text-accent mb-6">
              Areas for Enhancement
            </h3>
            <ul className="space-y-3 font-inter text-primary dark:text-gray-300">
              <li>• Calendar integration with external tools</li>
              <li>• More detailed analytics & reporting</li>
              <li>• Automation rules for recurring tasks</li>
              <li>• API for third-party integrations</li>
              <li>• Team capacity planning view</li>
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
                Mobile-First Responsive Design
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
                Prioritized mobile experience recognizing that IT professionals
                access tasks from various devices and locations. Touch-friendly
                interface with optimized tap targets. All core functionality
                available on mobile without compromising desktop experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-bold text-primary dark:text-white mb-4">
                Visual Hierarchy & Information Architecture
              </h3>
              <p className="font-inter text-primary dark:text-gray-300 leading-relaxed mb-4">
                Structured information for quick scanning: urgent tasks appear
                first, color-coding provides instant priority recognition,
                deadline proximity highlighted. Dashboard provides customizable
                widgets for personalized views.
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
                High-fidelity prototype in Figma demonstrates complete user
                flows, transitions, and interactive elements. Accessible to
                stakeholders and user testing participants.
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
              A task management solution that reduces cognitive load through
              visual design, enables efficient prioritization, and integrates
              collaboration seamlessly without overwhelming users.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-poppins font-semibold text-primary dark:text-white mb-3">
              Lessons Learned
            </h3>
            <p className="font-inter text-primary dark:text-gray-300 leading-relaxed">
              Complex feature sets require ruthless prioritization.
              Understanding specific user workflows (IT vs. general users)
              enables more targeted, effective design. Color-coding and visual
              systems communicate faster than text.
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
            Check out the interactive prototype or let's discuss your project
            needs
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
