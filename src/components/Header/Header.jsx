import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={'header'}>
            <div className={classes.logo}>
                <a href={'#s'}>
                    <img className={classes.logo_img} src='https://cdn.discordapp.com/attachments/1006393106381406238/1090277741322043432/9_20230328204933.png' alt={'icon'}/>
                    <span >BANANA</span>
                </a>
            </div>
            <div className={classes.SearchBox}>
                <form>
                    <input placeholder={'Поиск'}/>
                </form>
            </div>
        </header>
    )
}

export default Header;