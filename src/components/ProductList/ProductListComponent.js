import React, { Component } from 'react';
import './ProductList.css';
import { PRODUCTS } from '../../shared/products';
import Product from './Product/ProductComponent';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
        };
    }


    renderItems(products) {
        return products.map(product => (
            <Product 
                key={product._id}
                product={product}
            />
        ))
    }

    render() {

        

        return (
            <div className="productList__container">
                {this.renderItems(this.state.products)}
            </div>
        )
    }

}


export default ProductList;