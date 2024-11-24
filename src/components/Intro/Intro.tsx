import profilePic from "../../assets/profile-pic.png";

export const Intro = () => {
  return (
    <div className="my-5 p-5 bg-white sm:my-10 sm:p-10 w-fit text-left lg:p-20 lg:my-20  shadow-2xl lg:mx-auto ">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="md:order-2">
          <img src={profilePic} alt="" />
        </div>
        <div className="max-w-3xl text-content text-center md:text-left space-y-4">
          <p className="py-0 text-4xl text-tan font-semibold">My name is </p>
          <h1 className=" pt-2 text-3xl lg:text-5xl">Pratima Maharjan</h1>
          <h2 className="py-2 text-xl">
            I am currently Learning Web development
          </h2>

          <div className="info-me my-1">
            <p className="text-lg leading-relaxed text-gray-700 font-light max-w-prose space-y-4">
              I'm a UI/UX designer diving into web development. I'm passionate
              about creating seamless user experiences by blending design with
              technology. I am currently focusing on learning HTML, CSS,
              JavaScript, and React (frontend web development) through online
              platforms like Coursera and Udemy. I have also completed a
              JavaScript course from ReDI School and web development courses
              from TechLabs, along with a project. My hobbies are watching
              movies, listening to music, and traveling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
