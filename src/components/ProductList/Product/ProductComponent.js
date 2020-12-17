import React from 'react';
import './Product.css';
import ReactStars from 'react-rating-stars-component';


const Product = ({product}) =>  (
    <div key={product._id} className="product__box">
        <a className="product__imageBox" href={`/product/${product._id}`}> 
            <img className="product__image" src={product.imageUrl} alt={product.name} />
        </a>
        <div className="product__description">
            <a href={`/product/${product._id}`}> 
                <h2 className="product__title">{product.name}</h2>
            </a>
            <ReactStars 
                count={5}
                value={product.rating}
                size={15}
                activeColor="#ffd700"
                edit={false}
            />
            <h5 className="product__price">$ {product.price}</h5>
        </div>
    </div>
)

export default Product;