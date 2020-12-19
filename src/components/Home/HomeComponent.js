import React, { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actionCreators';
import ProductList from '../ProductList/ProductListComponent';
import Loading from '../LoadingComponent';
import MessageBox from '../MessageBoxComponent';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch(); 
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    },[dispatch])

    return (
        <div className="home__container">
            {loading?  <Loading />
            : error? <MessageBox variant="danger">{error}</MessageBox>
            : <ProductList products={products}/>}
        </div>
    );
}

export default Home;