import React from 'react';

// Let's import the ProductCard we built in components
import ProductCard from '../components/ProductCard';

const Home = () => {

    // creating an array of fake products for testing the design.
    // This section will be replaced with logic for fetching the JSON response of products from API
    // and generating an array of products of the same structure.
    const fakeProducts = [
        {id: 1, name: 'Iphone', price : 1000},
        {id: 2, name: 'S23', price: 20},
        {id: 3, name: 'Vivo', price: 10},
        {id: 4, name: 'Redmi', price: 5}
    ];

    return (
        <div className='container mt-5 w-100 mx-auto'>
            <h1>
                Products
            </h1>
            <div className='row w-100'>
                {fakeProducts.map((product) => (
                    // console.log(product);
                    <ProductCard key={product.id} product = {product} />
                ))}
            </div>
        </div>
    );


};


export default Home;