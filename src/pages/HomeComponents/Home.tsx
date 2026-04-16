// import { FeaturedProject } from "../FeaturedProject/FeaturedProject";
import { Heading } from "../../components/Heading/Heading";
import { TextAnimate } from "../../components/TextAnimate/TextAnimate";
import imgBundesplaz from "../../assets/images/bundes-01.png";
import imgTask from "../../assets/images/Taask.jpg";
import imgBerlinbite from "../../assets/images/brlinbites.png";
import imgHealth from "../../assets/images/Healthapp.png";
import { Intro } from "../../components/Intro/Intro";
import { Project } from "../../components/Project/Project";
import { TabbedPanels } from "../../components/TabbedPanels/TabbedPanels";
import { Layout } from "../Layout";
import { About } from "../../components/About/About";

export const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Layout>
        <section className="bg-white dark:bg-gray-900">
          <Intro />
        </section>

        <section className="animate-fade-in-up">
          <About />
        </section>

        <section
          id="skills"
          className="animate-fade-in-up pt-5 bg-white dark:bg-gray-900"
        >
          <div className="container max-w-4xl mx-auto">
            <div className="mb-16">
              <Heading text="My Skills" variant="slide" withBorders={false} />
              <div className="">
                <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
              </div>
            </div>
            <TabbedPanels />
          </div>
        </section>

        <section
          id="projects"
          className="animate-fade-in-up pt-5 mb-20 bg-white dark:bg-gray-900"
        >
          <div className="container max-w-4xl mx-auto ">
            <div className="mb-16">
              <Heading
                text="My featured Projects"
                variant="rotate"
                withBorders={false}
              />
              <div className="">
                <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
              </div>
            </div>
            <div className="Projects grid gap-20 grid-cols-1 my-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
              <div className="stagger-delay-1 animate-fade-in-up">
                <Project
                  img={imgBundesplaz}
                  bgColor="#F5C824"
                  title="Bundesplatz kino"
                  web="https://pr4t1ma.github.io/bundesplatz-kino/#/"
                  github="https://github.com/pr4t1ma/bundesplatz-kino"
                  figma="https://www.figma.com/proto/TEZivjw1eL9fvCDt5Sdltq/Bundesplatz-Kino-Berlin?node-id=900-5151&t=K3cH3NJaEn9U4BUw-1&scaling=min-zoom&content-scaling=fixed&page-id=271%3A726&starting-point-node-id=900%3A6693"
                  projectPath="/project/bundesplatz-kino"
                  text="Bundesplatz Kino is a local cinema targeting nearby residents. I redesigned their website with a focus on providing the best user experience. I conducted research, user interviews, and user testing to identify pain points and addressed these issues in the new design.
            "
                />
              </div>
              <div className="stagger-delay-2 animate-fade-in-up">
                <Project
                  title="Reuse Record"
                  github="https://github.com/TechLabs-Berlin/ws24-reuse-record"
                  text="The project received valuable support from Baukreisel,
             providing expert knowledge and testing. My contribution involved
              developing the project using React with Tailwind CSS. Additionally,
               I expanded my skills by learning React Native Expo to create a mobile
               app in response to project requirements."
                />
              </div>

              <div className="stagger-delay-3 animate-fade-in-up">
                <Project
                  img={imgBerlinbite}
                  bgColor="#ddc"
                  title="Berlin bites"
                  figma="https://www.figma.com/proto/IVBX8yWlBTr5jAuJU99CRT/Wireframe?node-id=480-23769&t=fb3oAlZFBfsLMSRi-1&scaling=min-zoom&content-scaling=fixed&page-id=143%3A29354&starting-point-node-id=143%3A31615"
                  text="The problem we aim to solve with this website is helping users find the best restaurants in Berlin. Berlin Bites is an AI-driven restaurant recommender that analyzes user reviews to deliver personalized dining suggestions"
                />
              </div>
              <div className="stagger-delay-4 animate-fade-in-up">
                <Project
                  img={imgTask}
                  title="Tassk"
                  figma="https://www.figma.com/proto/HLS6XWJzJjfZAfafl3YXu6/Task-management-app?node-id=445-8052&t=tYhmJTxzb4kfJb5O-1&scaling=scale-down&content-scaling=fixed&page-id=7%3A2&starting-point-node-id=445%3A8122&show-proto-sidebar=1"
                  projectPath="/project/task-management"
                  text="The primary audience for the task management app consists of users working in IT companies. The main goal of this app is to enable users to work effectively and efficiently by prioritizing deadlines and tasks."
                />
              </div>
              <div className="stagger-delay-5 animate-fade-in-up">
                <Project
                  img={imgHealth}
                  title="Health App"
                  bgColor="#00A8AB"
                  figma="https://www.figma.com/proto/iXi2ChI0nOwo3D3qPWXz7m/Health-app?node-id=424-2483&t=vQFsUL1HYAMFtaV0-1&scaling=min-zoom&content-scaling=fixed&page-id=424%3A2283&starting-point-node-id=424%3A2491"
                  projectPath="/project/health-app"
                  text="The problem we are addressing is managing health issues, specifically controlling blood pressure and sugar levels by tracking vital signs. Our solution aims to provide users with a comprehensive tool for monitoring their health metrics, offering personalized insights and alerts to help them maintain optimal health."
                />
              </div>
              <div className="stagger-delay-6 animate-fade-in-up">
                <Project
                  title="Book store"
                  github="https://github.com/TechLabs-Berlin/ws24-reuse-record"
                  text="By designing this book store library website, we aim to create a valuable resource that enhances the user's ability to find and explore books easily. I used the latest technologies such as React.js with Tailwind CSS for the frontend and Node.js with Express for the backend."
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};
