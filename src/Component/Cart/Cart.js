import React from 'react';

const Cart = (props) => {
    // console.log(props.cart);
    const cart = props.cart;

    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;  
    // }

    const totalPopulation = cart.reduce((sum, country) => sum + country.population,0);
    return (
        <div>
            <h4>This is Cart: {cart.length}</h4>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;