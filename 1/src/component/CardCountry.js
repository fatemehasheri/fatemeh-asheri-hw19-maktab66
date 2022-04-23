import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CountrtyContext } from "./CountriesContext";
import { IoMdArrowBack } from "react-icons/io";
import {Container} from 'react-bootstrap';
import BordersCountry from "./BordersCountry";

const CardCountry = () => {
   const { dataCountries ,dark } = useContext(CountrtyContext);
   const [dataCountry, setdataCountry] = useState({});
   let params = useParams();

   useEffect(() => {
      const Country = Object.values(dataCountries).filter(
        (country) => country.alpha2Code == params.alpha2Code
      );
      setdataCountry(Country[0]);
   });

    return (
        <div className={dark? "card-light" :"card-dark mb"}  >
            <Container>
            <div>
                <Link to="/"> 
                    <button className="country-btn"><IoMdArrowBack />Back</button>
                </Link>
            </div>

            <div className="flex">
                <div>
                    <img className="country-img" src={dataCountry?.flags?.png} />
                </div>
                <div>
                    <ul className="country-ul">
                        <h2>{dataCountry?.name}</h2>
                        <li>
                            <strong>Native Name: </strong>
                            {dataCountry?.nativeName}
                        </li>
                        <li>
                            <strong>Population: </strong>
                            {dataCountry?.population}
                        </li>
                        <li>
                            <strong>Region: </strong>
                            {dataCountry?.region}
                        </li>
                        <li>
                            <strong>Sub Region: </strong>
                            {dataCountry?.subregion}
                        </li>
                        <li>
                            <strong>Capital: </strong>
                            {dataCountry?.capital}
                        </li>
                    </ul>
                </div>

                <div className="country-ul-li">
                    <ul className="country-ul">
                        <li>
                            <strong>Top Level Domain: </strong>
                            {dataCountry?.topLevelDomain}
                        </li>
                        <li>
                            <strong>Currencies: </strong>
                            {dataCountry?.currencies ? dataCountry?.currencies[0]?.name : "---"}
                        </li>
                        <li>
                            <strong>Language: </strong>
                            {dataCountry?.languages?.map((language, index) => (
                                <span key={index}>{language.name}</span>
                            ))}
                        </li>
                    </ul>
                </div>
                

            </div>
            <div className="country-border">
                <strong className="country-name-border">Border Countries:</strong>
                {dataCountry?.borders ? (<BordersCountry borders={dataCountry?.borders}/>) : (" - ")}
            </div>
            </Container>
        </div>
        
    );
};

export default CardCountry;