import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import './Cart.css'

const Cart = (props) => {

    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split("=")[1])
        : 1;

    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
        <div className="cart__container">
            <h1>cart</h1>
            <p>productId : {productId}, Qty: {qty}</p>
        </div>
        )
    }

export default Cart;