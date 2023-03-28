import React from "react";
import classes from './ProfileHeader.module.css';

const ProfileHeader = () => {
    return(
        <div className={'ProfileHeader'}>
            <div className={classes.MainBanner}>
                <img className={classes.Banner} src={'https://cdn.discordapp.com/attachments/1006393106381406238/1090157331490295828/profilebanner.jpg'} alt={'ProfileBanner'}/>
            </div>
            <div className={classes.ProfileHeader__in}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileHeader;