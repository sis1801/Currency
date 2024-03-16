import React, { useState } from 'react';
import CountryCard from './CountryCard';

export default function CurrencySearch() {
  const [currency, setCurrency] = useState('');
  const [countries, setCountries] = useState([]);

  const fetchCountriesByCurrency = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/currency/${currency}`);
      const data = await response.json();
      setCountries(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const handleSearch = () => {
    fetchCountriesByCurrency();
  };

  return (
    <div style={{justifyContent:"center", alignItems:"center"}}>
      <h1> Search Country by it's Currency</h1>
      <input
        type="text"
        placeholder="Enter currency code (e.g., USD)"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        style={{fontSize:"30px", fontFamily:"sans-serif",border:"1px solid",borderRadius:"10px",marginRight:"10px"}}
      />
      <button onClick={handleSearch} style={{fontSize:"30px", fontFamily:"sans-serif",border:"1px solid",borderRadius:"10px"}}>Search</button>
      <br/><br/>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px",justifyContent:"center"}}>
        {countries.map((country) => (
          <CountryCard key={country.name.common}
          flagimg={country.flags.png}
          name ={country.name.common}
          capital = {country.capital}/>
          
        ))}
      </div>
    </div>
  );
}

