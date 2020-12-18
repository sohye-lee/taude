import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Cart from '../Cart/CartComponent';

const Header = () => (
    <div className="header__container">
        <div className="header__content row">
            <div className="header__left">
                <a href="/" className="header__brand"><h2 className="logo">TAUDE</h2></a>
            </div>
            <div className="header__right">
                <a href="/cart" className="header__cart"><i className="fa fa-shopping-bag"/> cart</a>
                <a href="/login" className="header__login"><i className="fa fa-unlock-alt"></i> login</a>
            </div>
        </div>
    </div>
);

export default Header;

