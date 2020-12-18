import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import './ProductInfo.css';
import { PRODUCTS } from '../../shared/products';
import { SELLERS } from '../../shared/sellers';


function ProductInfo(props) {
    const product = PRODUCTS.find((item) => item._id === +props.match.params.id);
    const seller = SELLERS.find((seller) => seller._id === product.sellerId);
    
    const [ showImage, setShowImage ] = useState(product.imageUrl[0]);
    console.log(showImage)

    const renderImages = product.imageUrl.map(image => (
        <div className="info__smallImgBox" onClick={() => setShowImage(image)}>
            <img 
                src={image} 
                className="info__smallImg" 
                alt={product.name+' image'}
            />
        </div>
    ));

    if (!product) {
        return <div style={{width: "100%", height: "100%", display: 'flex', alignContent: 'center', justifyContent: "center"}}>Sorry, Product Requested Not Found</div>
    }

    return (
        <div className="info__container">
            <Link to="/"><div className="info__goBack"><span><i className="fa fa-angle-left" /> BACK TO MAIN</span></div></Link>
            <div className="info__content">
                <div className="info__main">
                    <div className="info__imageBox">
                        <img src={showImage} className="info__image" alt={product.name}/>
                        <div className="info__imageCarousel">
                            {renderImages}
                        </div>
                    </div>
                    <div className="info__description">
                        <h2>{product.name}</h2>
                        <div className="info__ratings">
                            <ReactStars  
                                count={5}
                                value={product.rating}
                                size={15}
                                activeColor="#ffd700"
                                edit={false}
                            />
                            <span style={{marginLeft: 10}}> {product.numReviews + (product.numReviews>0? " reviews" : " review")}</span>
                        </div>
                        <h3>${product.price}</h3>
                        <h4><span className="head">Materials </span><br/> {product.material}</h4>
                        <h4><span className="head">Description </span> {product.description}</h4>
                    </div>
                </div>
                <div className="info__action">
                    <div className="row">
                        <h3>Seller</h3>
                        <h3>{seller.name}</h3>
                    </div>
                    <hr/>
                    <div className="row">
                        <ReactStars 
                            count={5}
                            value={product.rating}
                            size={15}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <h3> {product.numReviews + (product.numReviews>0? " reviews" : " review")}</h3>
                    </div>
                    <div className="row">
                        <h3>Price</h3>
                        <h3>${product.price}</h3>
                    </div>
                    <div className="row"> 
                        <h3>Status</h3>
                        <h3>{product.countInStock > 5 ? (<span className="skyblue">In Stock</span>) : product.countInStock > 0? (<span className="red">Only {product.countInStock} In Stock</span>): (<span className="red">Unavailable</span>)}</h3>
                    </div>
                    <div className="row" style={{margin: '2rem 0'}}>
                        <label for="qty">Qty</label>
                        <select name="qty" style={{color: 'black', fontSize:"1.8rem", height: '2.9rem', padding: '3px 10px'}} >
                            <option unselectable>select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="row center">
                        <button className="info__cartBtn btn">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductInfo;