import React from 'react';
import './Home.css';
import ProductList from '../ProductList/ProductListComponent';

const Home = ({products}) => (
    <div className="home__container">
        <ProductList />
    </div>
)

export default Home;