import { useEffect, useState } from 'react';
import './App.css';
import Countries from './compononts/Country/Countries';

function App() {
  return (
    <div>
      <Countries></Countries>
      {/* <Countries></Countries> */}
      {/* <LoadCountries></LoadCountries> */}

    </div>
  )
}

function LoadCountries() {

  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>vesiting every country of the world</h1>
      <h3>All contries:{countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h3>name: {props.name}</h3>
      <p>population : {props.population}</p>
    </div>
  )
}


export default App;