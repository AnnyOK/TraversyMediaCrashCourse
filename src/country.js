import React from "react";

export const Country = ({country}) => {
  return (
    <div className="country">
      <p>Name: {country.name}</p>
      <p>Population:{country.population}</p>
      <p>Capital city:{country.capital}</p>
      <p>Flag:{country.flag}</p>
    </div>
  )
}