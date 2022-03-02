import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyMap from "./MyMap";
import "react-tabs/style/react-tabs.css";

const MyTabs = ({ locations, onDeleteClick }) => {
  /*   useEffect(()=>{
    localStorage.removeItem('locations', JSON.stringify(locations))
  },  [locations]) */

  return (
    <Tabs forceRenderTabPanel>
      <TabList>
        {locations.map((location) => (
          <Tab key={location.id}>
            {location.name}
            <button onClick={() => onDeleteClick(location.id)}>x</button>
          </Tab>
        ))}
      </TabList>
      {locations.map((location) => (
        <TabPanel key={location.id}>
          <MyMap height={300} lat={location.lat} lon={location.lon} />
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default MyTabs;
