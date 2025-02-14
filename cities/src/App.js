import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";
import Navbar from "./components/Navbar"; 
import { citiesData } from "./data";

const App = () => {
  const [cities, setCities] = useState(citiesData);

  const addCity = (city) => setCities([...cities, city]);

  return (
    <Router>
      <div className="container">
        <Navbar /> 
        <h1>Cities App</h1>
        <Routes>
          <Route path="/" element={<CitiesList cities={cities} />} />
          <Route path="/add-city" element={<AddCity addCity={addCity} />} />
          <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
