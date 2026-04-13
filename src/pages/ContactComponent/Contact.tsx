import { GetInTouch } from "../../components/GetInTouch/GetInTouch";
import { Layout } from "../Layout";
import { useState } from "react";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Show success message
    setIsSubmitted(true);
    clearForm();
    console.log("Form submitted:", { name, email, subject, message });
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div>
      <Layout>
        <GetInTouch
          title="What's Next?"
          subtitle="Get in touch"
          text="I'm always open to discussing new projects, creative ideas, or opportunities to work together. Feel free to reach out!"
        />
        <div className="container max-w-screen-md mx-auto px-4 py-20 md:mx-auto lg:max-w-2xl lg:mx-auto">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-400">
              ✓ Thank you for your message! I'll get back to you soon.
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="rounded-md bg-warmGray-100 dark:bg-gray-800 shadow-xl p-8 md:p-12 mb-12 transition-colors duration-300"
          >
            <div className="mb-6 flex flex-col items-start">
              <label
                htmlFor="name"
                className="text-gray-700 dark:text-gray-200 font-bold mb-2"
              >
                Name (required)
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex flex-col items-start">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              >
                Email (required)
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex flex-col items-start">
              <label
                htmlFor="subject"
                className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow appearance-none border rounded-md w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col items-start">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              >
                Message (required)
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-oxblood text-white font-bold py-3 px-6 hover:bg-opacity-90 focus:outline-none focus:shadow-outline rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          <div className="bg-warmGray-100 dark:bg-gray-800 rounded-md p-8 md:p-12 transition-colors duration-300">
            <h2 className="text-3xl font-poppins font-bold mb-6 text-hover-glow text-gray-800 dark:text-white">
              Other Ways to Connect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Prefer direct contact? Reach me at{" "}
              <a
                href="mailto:pratymaa@gmail.com"
                className="text-oxblood font-semibold hover:underline"
              >
                pratymaa@gmail.com
              </a>
            </p>
            <div className="flex gap-6 mt-6">
              <a
                href="https://linkedin.com/in/pratima-maharjan"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-oxblood hover:opacity-70 transition"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/pr4t1ma"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-oxblood hover:opacity-70 transition"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-oxblood hover:opacity-70 transition"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
