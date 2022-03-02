import React, { useState, useEffect } from "react";
import AddLocationForm from "./components/AddLocationForm";
import MyTabs from "./components/MyTabs";
import "./styles.css";

/*  
   Tabs: should render n tabs and inside each tab I want a map. => react-tabs

   MyMap : it should show a map base on a set of coordinates (lng, lat)  => pigeon-maps
*/

export default function App() {
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem("locations")) || [
      { id: 1, lat: 19.4326, lon: -99.1332, name: "Mexico City" },
      { id: 2, lat: 51.3397, lon: 12.3731, name: "Leipzig" },
      { id: 3, lat: 52.52, lon: 13.405, name: "Berlin" },
    ]
  );

  useEffect(() => {
    localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  function handleDeleteClick(id) {
    const removeItem = (locations) =>
      locations.filter((location) => location.id !== id);
    setLocations(removeItem);
  }

  return (
    <div className="App">
      <div className="block">Pidgeon map API + localstorage</div>
      <div className="block">
        <MyTabs locations={locations} onDeleteClick={handleDeleteClick} />
        <AddLocationForm setLocations={setLocations} />
      </div>
    </div>
  );
}
