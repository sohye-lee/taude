import * as ActionTypes from '../actionTypes';
import Axios from 'axios';

export const addToCart = (productId, qty) => async(dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: ActionTypes.CART_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.imageUrl[0],
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
      },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };

  export const removeFromCart = (productId) => async (dispatch, getState) => {

    dispatch({type: ActionTypes.CART_DELETE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };