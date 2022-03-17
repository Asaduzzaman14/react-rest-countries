import React, { useEffect, useState } from 'react';
import Country from '../countryy/Country';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <h2 className='heading'>Total Countries:{countries.length}</h2>
            <div className='country-container'>{countries.map(country =>

                <Country country={country}
                    key={country.cca3}
                ></Country>
            )}</div>
            <Footer></Footer>
        </div>
    );
};

export default Countries;