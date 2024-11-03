import { Calculator } from "../Calculator/Calculator";
import { Counter } from "../ConditionalTerms/UseStateIncreDecre/Counter";
import { TodoList } from "../TodoList/TodoList";
import { Accordion } from "../TodoList/Accordion/Accordion";
import { accordionData } from "../Data/AccordionData";
import Registrationform from "../RegistrationForm/Registrationform";
import Customhook from "../Customhook/Customhook";

export const Works = () => {
  return (
    <div>
      <TodoList />

      <Calculator />
      <div className="container mx-auto">
        <h1 className="text-center text-oxblood font-bold">Accordion</h1>
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
      <Registrationform />
      <Customhook />
    </div>
  );
};
