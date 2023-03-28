import React from "react";
import './Header.css';

const Header = () => {
    return(
        <header className={'header'}>
            <div className={'logo'}>
                <a href={'#'}>
                    <img src={'https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn'} alt={'none'}/>
                    <span>MAMA TVOYA</span>
                </a>
            </div>
        </header>
    )
}

export default Header;