import { useState } from "react";
import { Panels } from "../Panels/Panels";
import { Tabs } from "../Tabs/Tabs";
import { panelsData } from "./TabbedPanelsData";
import { items } from "./TabbedPanelsData";

export const TabbedPanels = () => {
  const [active, setActive] = useState(0);

  const onTabChangeHandler = (i) => {
    setActive(i);
  };
  return (
    <div className="container mx-auto lg:w-3/4 gap-10 grid grid-cols-7">
      <div className="mx-10 col-span-6 lg:col-span-3">
        <Tabs items={items} onTabChange={onTabChangeHandler} />
      </div>
      <div className=" mx-10 col-span-6 gap-7 align-center lg:col-span-4">
        {panelsData.map(
          (panelData, i) =>
            active === i && (
              <Panels
                key={panelData}
                heading={panelData.heading}
                date={panelData.date}
                text={panelData.text}
                subHeading={panelData.subHeading}
              />
            )
        )}
      </div>
    </div>
  );
};
