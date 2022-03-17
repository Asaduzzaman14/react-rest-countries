import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
    const { flags, population, region, name } = props.country
    return (
        <div className='country'>
            <h2>Country name: {name.common}</h2>

            <h3>populataion: {population}</h3>
            <img src={flags.png} alt="" />
            <p> region: {region}</p>
        </div>
    )
};

export default Country;