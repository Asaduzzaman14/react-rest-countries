import React, { useEffect, useState } from 'react';
import Country from '../countryy/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>hello i am form countries:{countries.length}</h1>

            {
                countries.map(country => <Country
                    name={country.name.common}
                    population={country.population}
                    area={country.area}>

                </Country>)
            }

        </div>
    );
};

export default Countries;