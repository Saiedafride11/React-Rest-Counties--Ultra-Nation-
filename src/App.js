import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
      setCountries(data);
      // console.log(data);
      // const names = data.map(country => country.name);
      // console.log(names);
    })
    .catch(err => console.log(err))
  }, [])

  const handleAddCountry = (country) => {
    // console.log("Country Added", country);
    const newCart = [...cart, country];
    setCart(newCart)
  }

  return (
    <div className="App">
      <h1>Total Country: {countries.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      {/* <ul>
        {
          countries.map(country => <li>{country.name}</li>)
        }
      </ul> */}


        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
    </div>
  );
}

export default App;
