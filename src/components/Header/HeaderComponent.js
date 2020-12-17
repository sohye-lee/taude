import React from 'react';
import './Header.css';

const Header = () => (
    <div className="header__container">
        <div className="header__content row">
            <div className="header__left">
                <a href="/" className="header__brand"><h2 className="logo">TAUDE</h2></a>
            </div>
            <div className="header__right">
                <a href="/" className="header__cart"><i class="fa fa-shopping-bag"/> cart</a>
                <a href="/" className="header__login"><i class="fa fa-unlock-alt"></i> login</a>
            </div>
        </div>
    </div>
);

export default Header;

