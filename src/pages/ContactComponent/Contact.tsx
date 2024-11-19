import { GetInTouch } from "../../components/GetInTouch/GetInTouch";
import { Layout } from "../Layout";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearForm();
    // Handle form submission, e.g., send data to backend
    console.log("Form submitted:", { name, email, subject, message });
  };

  return (
    <div className=" ">
      <Layout>
        <GetInTouch
          title="What's Next?"
          subtitle="Get in touch"
          text="I'm always open to discussing new projects, creative ideas, or opportunities to work together. Feel free to reach out!"
        />
        <form
          onSubmit={handleSubmit}
          className="container max-w-screen-md mx-auto  rounded-md bg-warmGray-300 shadow-xl p-20 text-center mb-20  md:mx-auto lg:max-w-4xl lg:mx-auto "
        >
          <div className="mb-4 flex flex-col items-start ">
            <label htmlFor="name" className=" text-gray-700 font-bold mb-2">
              Name (required)
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 rounded-md p-20"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex flex-col items-start">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email (required)
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border-none w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline g-opacity-20 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex flex-col items-start">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-bold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow appearance-none border-none rounded-md w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline g-opacity-20 "
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4 flex flex-col items-start">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message (required)
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border-gray rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-oxblood text-white font-bold py-3 px-6 focus:outline-none focus:shadow-outline rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
        <p className="my-10 text-center">
          Prefer direct contact? Reach me at{" "}
          <a
            href="mailto:pratymaa@gmail.com"
            className="text-blue-800 hover:underline"
          ></a>
          pratymaa@gmail.com
        </p>
      </Layout>
    </div>
  );
};
