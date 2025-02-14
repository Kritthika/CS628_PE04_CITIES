import React from "react";
import { Link } from "react-router-dom";

const CitiesList = ({ cities }) => {
  return (
    <div>
      <h2>Cities List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <Link to={`/cities/${index}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-city" className="button">Add City</Link>
    </div>
  );
};

export default CitiesList;
