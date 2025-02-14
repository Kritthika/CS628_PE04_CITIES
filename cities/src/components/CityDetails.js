import React from "react";
import { useParams, Link } from "react-router-dom";

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities[id];

  return city ? (
    <div>
      <h2>{city.name}</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
      <Link to="/" className="button">Back to Cities List</Link>
    </div>
  ) : (
    <p>City not found</p>
  );
};

export default CityDetails;
