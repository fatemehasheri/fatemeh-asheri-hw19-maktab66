import React, { useState, useContext } from "react";
import { CountrtyContext } from "./CountriesContext";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import Card from 'react-bootstrap/Card';

const SearchBox = () => {
   const [searchCountry, setSearchCountry] = useState([]);
   const [valueSearch, setValueSearch] = useState('');

   const {dataCountries,dark} = useContext(CountrtyContext);

   const handleSearch = (e) => {
      const value = e.target.value;
      setValueSearch(value)
      const newFilter = Object.values(dataCountries).filter(country =>country?.name.toLowerCase().includes(value.toLowerCase()));
      if(value === "") {
         setSearchCountry([])
      }else {
         setSearchCountry(newFilter);
      }
   };

   const clearSearch = () => {
      setValueSearch('')
      setSearchCountry([])
   }

   return (
      <>
         <div>
         
               <input className="input" type="text" value={valueSearch} placeholder="Search a Country..." onChange={handleSearch}/>
               <span>
                  {searchCountry.length == 0 ? <SearchIcon /> : <CloseIcon id="close-btn" onClick={clearSearch}/>}
               </span>
         
               {searchCountry.length != 0 && (
               <>
                  <h1 className='h1'>Search countries</h1>
                  <div className="card-countries">
                     {searchCountry.map((country, key) => {
                        return (
                           <Link to={`/${country.alpha2Code}`} className="link" key={key}>
                              <Card className="card mt-5 ms-4 me-4 " key={country?.numericCode}>
                                 <Card.Img className='card-img' src={country?.flags.png} />
                                 <Card.Body className={dark? "card2-light" :"card2-dark"}>
                                    <Card.Title>{country?.name}</Card.Title>
                                    <Card.Text>Population:{country?.population}</Card.Text>
                                    <Card.Text>Region:{country?.region}</Card.Text>
                                    <Card.Text>Capital:{country?.capital}</Card.Text>
                                 </Card.Body>
                              </Card>
                           </Link>
                        );
                     })}
                  </div>
                  <h1 className='h1'>countries</h1>
               </>
            )}
         </div>
      </>
   );
};

export default SearchBox;