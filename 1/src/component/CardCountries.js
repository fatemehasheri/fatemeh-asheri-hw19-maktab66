import React,{useContext} from 'react';
import Card from 'react-bootstrap/Card';
import {CountrtyContext} from "./CountriesContext";
import { Link } from "react-router-dom";
import SearchBox from './SearchBox';

const Cardcountries = () => {
    const {dataCountries, dark}=useContext(CountrtyContext)
    return (
        <div className={dark? "card-light" :"card-dark"}>
            <SearchBox />
            <div className="ms-4 me-4 card-countries">
                {Object.values(dataCountries).map((itemCountery)=>{
                    return(
                        <Link to={`${itemCountery.alpha2Code}`} className='link'>
                            <Card className="card mt-5 ms-4 me-4" key={itemCountery?.numericCode}>
                                <Card.Img className='card-img' src={itemCountery?.flags.png} />
                                <Card.Body className={dark? "card2-light" :"card2-dark"}>
                                    <Card.Title>{itemCountery?.name}</Card.Title>
                                    <Card.Text>Population:{itemCountery?.population}</Card.Text>
                                    <Card.Text>Region:{itemCountery?.region}</Card.Text>
                                    <Card.Text>Capital:{itemCountery?.capital}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Cardcountries;
