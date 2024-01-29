import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className="header__navbar">
            <ul className="header__items-list">
                <li className="header__item">
                    <Link to="/" className="header__link link">Home</Link>
                </li>
                <li className="header__item">
                    <Link to="/catalog" className="header__link link">Catalog</Link>
                </li>
                <li className="header__item">
                    <Link to="/cart" className="header__link link">Cart</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;