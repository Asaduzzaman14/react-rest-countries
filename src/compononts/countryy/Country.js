import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>

            <h2>Country: {props.name}</h2>
            <h3>Copulation:{props.population}</h3>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;