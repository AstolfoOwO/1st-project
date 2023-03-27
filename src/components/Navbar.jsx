import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className={'nav'}>
            <div className={'buttons'}>
                <a href={'#'}>Profile</a>
                <a href={'#'}>News Feed</a>
                <a href={'#'}>Messages</a>
                <a href={'#'}>Music</a>
                <a className={'settings'} href={'#'}>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;