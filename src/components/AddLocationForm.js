import React, { useState } from "react";

const AddLocationForm = ({ setLocations }) => {
  const [{ name, lat, lon }, setFormState] = useState({
    name: "",
    lat: "",
    lon: "",
  });

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLat = (num) => !!num && isFinite(num) && Math.abs(num) <= 90;
    const isLon = (num) => !!num && isFinite(num) && Math.abs(num) <= 180;
    if (!name) return alert("The name of the new location cannot be empty");
    if (!isLat(lat)) return alert("Invalid value for latitude");
    if (!isLon(lon)) return alert("Invalid value for longitude");
    setLocations((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        lat: parseFloat(lat),
        lon: parseFloat(lon),
      },
    ]);
    setFormState({
      name: "",
      lat: "",
      lon: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        name="lat"
        type="number"
        value={lat}
        onChange={handleInputChange}
        placeholder="Latitude"
      />
      <input
        name="lon"
        type="number"
        value={lon}
        onChange={handleInputChange}
        placeholder="Longitude"
      />
      <button>Add location</button>
    </form>
  );
};

export default AddLocationForm;
