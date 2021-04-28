import React from 'react';

const Country = (props) => {
    // console.log(props.country);
    const {name, flag, population, region} = props.country;

    const handleAddCountry = props.handleAddCountry;

    const flagStyle = { height: '50px' };
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'};
    const btnStyle = {backgroundColor: 'red', border: 'none', color: 'white', fontSize: '20px', padding: '10px 30px', borderRadius: '10px'};
    return (
        <div style={countryStyle}>
           <h4>Country Name: {name}</h4>
           <img style={flagStyle} src={flag} alt=""/>
           <h4>Population: {population}</h4>
           <h4>Region: {region}</h4>
           <button onClick={() => handleAddCountry(props.country)} style={btnStyle}>Add Country</button>
        </div>
    );
};

export default Country;