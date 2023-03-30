import React from "react";
import classes from './Header.module.css';

const Header = (props) => {
    return(
        <div className={classes.Header}>
            <div className={classes.MainBanner}></div>
            <div className={classes.MainProfile}>
                <div className={classes.MainProfileLeft}>
                    <div className={classes.MainProfileAvatar}>
                        <img src='https://sun1.megafon-irkutsk.userapi.com/s/v1/ig2/AcAWK1NIp5Z8euYF3Hwdf7vjLSF4vcmZ6urALDMybLpvtptjy2h9FMW1H-vONVjuM_20__w1_ex8hSkTt4Yl4G9B.jpg?size=200x200&amp;quality=95&amp;crop=0,155,769,769&amp;ava=1' alt={'l'}/>
                    </div>
                    <div className={classes.OwnerPageName}>
                        <h2>{props.name}</h2>
                        <span>{props.description}</span>
                        <div className={classes.OwnerPageInfo}>
                            <a href='/'><i className="fa-solid fa-location-dot"></i>{props.location}</a>
                            <a href='/'><i className="fa-solid fa-info"></i>Подробнее</a>
                        </div>
                    </div>
                </div>
                <div className={classes.MainProfileRight}>
                    <a href='/'><i className="fa-solid fa-edit"></i>
                        Редактировать профиль
                    </a>
                    <a href='/'>
                        <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fill-rule="evenodd"></path></svg>
                        Еще
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;