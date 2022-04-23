import React, { useContext } from 'react';
import {FaMoon , FaSun} from 'react-icons/fa';
import {CountrtyContext} from "./CountriesContext";
import {Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom";

const Navbar = () => {
    const {dark , setDark } = useContext(CountrtyContext)
       
    const LightDark = () => {
        setDark(!dark)
    }

    return <div>
    <div className={dark? "nav-light" :"nav-dark"}>
        <Container className='nav' >
            <h4 className='nav-text' >Where is the World ?</h4>
            <button  className='nav-but' onClick={LightDark} >
                {dark ? <FaSun /> : <FaMoon />}Dark Mode
            </button>
        </Container>
    </div>
    <Outlet/>
    </div>
}


export default Navbar;