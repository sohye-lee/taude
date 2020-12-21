import * as ActionTypes from '../actionTypes';
import Axios from 'axios';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.PRODUCTS_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('/api/products');
        dispatch({ type: ActionTypes.PRODUCTS_LIST_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: ActionTypes.PRODUCTS_LIST_FAIL, payload: error.message});
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ 
      type: ActionTypes.PRODUCT_DETAILS_REQUEST, payload: productId 
    });
    const { data } = await Axios.get(`/api/products/${productId}`);
    try {
      dispatch({ type: ActionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ 
        type: ActionTypes.PRODUCT_DETAILS_FAIL, 
        payload: 
        error.response && error.response.data.message 
        ? error.response.data.message
        : error.message
      });
    }
};

