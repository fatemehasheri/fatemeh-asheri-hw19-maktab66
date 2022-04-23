import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CountrtyContext } from "./CountriesContext";
import { Link } from "react-router-dom";
const BordersCountry = ({ borders }) => {

   const { dataCountries } = useContext(CountrtyContext);
   const [bordersCountry, setbordersCountry] = useState([]);
   
   useEffect(() => {
      const Country = Object.values(dataCountries).filter((country) => borders.includes(country?.alpha3Code));
      setbordersCountry(Country);
   }, []);
   
   return (
      <div>
         {bordersCountry.map((country) => (
            <Link to={`/${country.alpha2Code}`} style={{ color: "inherit", textDecoration: "none" }}>
               <button className="country-btn1">{country.name}</button>
            </Link>
         ))}
      </div>
   );
};

export default BordersCountry;