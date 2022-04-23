import React, { useState , useEffect} from 'react';
import axios from 'axios';

export const CountrtyContext = React.createContext();

const CountriesContext = ({ children }) => {
    const [dataCountries , setdataCountries] = useState([])
    const [dark, setDark] = React.useState(false);
    
    useEffect(() => {
       axios.get('https://restcountries.com/v2/all')
        .then(res => setdataCountries(res.data))
    }, [])
 


    return (
        <CountrtyContext.Provider value={{ dataCountries, dark, setDark }}>
            { children }      
        </CountrtyContext.Provider>
    )
}


export default CountriesContext;