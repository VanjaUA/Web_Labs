import React from "react";
import Logo from "../../../../components/Logo";
import Navbar from "./Navbar";
import './Header.css'

const Header = () => {
    return(
        <header className="header">
            <Logo/>
            <Navbar/>
        </header>
    )
}
export default Header;