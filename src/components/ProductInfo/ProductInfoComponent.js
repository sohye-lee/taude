import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

import Loading from '../LoadingComponent';
import MessageBox from '../MessageBoxComponent';

import { PRODUCTS } from '../../shared/products';
import { SELLERS } from '../../shared/sellers';
import './ProductInfo.css';
import { detailsProduct } from '../../redux/actions/productActions';


const ProductInfo= (props) => {
    const product = PRODUCTS.find((item) => item._id === +props.match.params.id);
    
    
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, product1, error } = productDetails;
    
    
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    
    
    const seller = SELLERS.find((seller) => seller._id === product.sellerId);
    const [ showImage, setShowImage ] = useState(product.imageUrl[0]);
    const [ qty, setQty ] = useState(1);
    
    const renderImages = product.imageUrl.map(image => (
        <div className="info__smallImgBox" onClick={() => setShowImage(image)}>
            <img 
                key={product.imageUrl.indexOf(image)}
                src={image} 
                className="info__smallImg" 
                alt={product.name+' image'}
            />
        </div>
    ));



    const addToCartHandle = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }


    return (
        
        <div className="info__container">
            <Link to="/"><div className="info__goBack"><span><i className="fa fa-angle-left" /> BACK TO MAIN</span></div></Link>
            {loading?  <Loading />
            : error? <MessageBox variant="danger">{error}</MessageBox>
            :(<div className="info__content">
                <div className="info__main">
                    <div className="info__imageBox">
                        <img src={showImage} className="info__image" alt={product.name}/>
                        <div className="info__imageCarousel">
                            {renderImages}
                        </div>
                    </div>
                    <div className="info__description">
                        <h2>{product.name}</h2>
                        <div className="info__ratings row">
                            <ReactStars  
                                count={5}
                                value={product.rating}
                                size={15}
                                activeColor="#ffd700"
                                edit={false}
                            />
                            <span> {product.numReviews + (product.numReviews>0? " reviews" : " review")}</span>
                        </div>
                        <h3>${product.price}</h3>
                        <h4><span className="head">Materials </span><br/> {product.material}</h4>
                        <h4><span className="head">Description </span><br/> {product.description}</h4>
                    </div>
                </div>
                <div className="info__action">
                    <div className="info__seller row">
                        <h3>Seller</h3>
                        <h3>{seller.name}</h3>
                    </div>
                
                    <div className="info__ratings row" style={{paddingLeft:0}}>
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
                    {
                        product.countInStock > 0 && (
                            <div>
                                <div className="row" style={{margin: '2rem 0'}}>
                                    <label htmlFor="qty">Qty</label>
                                    <select 
                                        name="qty" 
                                        style={{color: 'black', fontSize:"1.8rem", height: '2.9rem', padding: '3px 10px'}} 
                                        onChange={e => setQty(e.target.value)}
                                        value={qty}
                                    >
                                        {
                                            [...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="row center">
                                    <button onClick={addToCartHandle} className="info__cartBtn btn">ADD TO CART</button>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>)}
        </div>
    )
}


export default ProductInfo;