import React, { useEffect, useState } from "react";
import axios from "axios"
import { Country } from "./country";
import "./App.css"

export const CountriesList = () => {
  const [countries, setCountries] = useState([])
  const getCountries = () => {
   axios.get("https://restcountries.com/v2/all").then(res => {
     setCountries(res.data)
  })
}

  useEffect(() => {
     getCountries()
  }, [])

  return (
    <div className="countries">
      <h1>Countries List App</h1>
      <div className="list">
        {countries.map((country, idx) => {
          return (
            <Country key={idx} country={country}/>
          )
        })}
      </div>
    </div>
  )
}