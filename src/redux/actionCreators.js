import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.PRODUCTS_LIST_REQUEST
    });

    try {
        const { data } = await axios.get('/api/products');
        dispatch({ type: ActionTypes.PRODUCTS_LIST_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: ActionTypes.PRODUCTS_LIST_FAIL, payload: error.message});
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: ActionTypes.PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
      const { data } = axios.get(`/api/products/${productId}`);
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










    // return (await Axios.get(`/api/products/${productId}`))
    //     .then(response => {
    //         if (response.ok) {
    //                 return response;
    //             } else {
    //                 const error = new Error(`Error ${response.status}`);
    //                 error.response = response;
    //                 throw error;
    //             }
            
    //         },
    //         error => {
    //             const errMess = new Error(error.message);
    //             throw errMess;
    //         })
    //     .then(response => response.json())
    //     .then(product => dispatch(productDetailSuccess(product)))
    //     .catch(error => dispatch(productFailed(error.message)));
        
// };

// export const productLoading = () => ({
//     type: ActionTypes.PRODUCT_DETAILS_REQUEST
// });

// export const productFailed = errMess => ({
//     type: ActionTypes.PRODUCT_DETAILS_FAIL,
//     payload: errMess
// });

// export const productDetailSuccess = product => ({
//     type: ActionTypes.PRODUCT_DETAILS_SUCCESS,
//     payload: product
// })