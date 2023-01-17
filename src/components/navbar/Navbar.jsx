import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { GiEgyptianBird } from 'react-icons/gi';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="pt_navbar">
            <div className="pt_navbar-links">
                <div className="pt_navbar-links_logo">
                    <GiEgyptianBird size="2em" />
                </div>
                <div className="pt_navbar-links_container">
                    <p><a href="#home">Park'teryx</a></p>
                    <p><a href="#men">Men</a></p>
                    <p><a href="#women">Women</a></p>
                    <p><a href="#explore">Explore</a></p>
                    <p><a href="#regear">Regear</a></p>
                </div>
            </div>
            <div className="pt_navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign up</button>
            </div>
            <div className="pt_navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="pt_navbar-menu_container scale-up-center"> 
                        <div className="pt__navbar-menu_container-links">
                            <p><a href="#home">Park'teryx</a></p>
                            <p><a href="#men">Men</a></p>
                            <p><a href="#women">Women</a></p>
                            <p><a href="#explore">Expore</a></p>
                            <p><a href="#regear">Regear</a></p>
                        </div>
                        <div className="pt_navbar-menu_container-links-sign">
                            <p>Sign In</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;