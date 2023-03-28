import React from "react";
import classes from './NavbarButton.module.css';

const NavbarButton = (className, href='#', text='button') => {
    return(
        <div className={classes.button}>
            <a href={href}>{text}</a>
        </div>
    )
}

export default NavbarButton;