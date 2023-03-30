import React from "react";
import Header from "./header/Header";
import classes from './Profile.module.css';

const Profile = (props) => {
    return(
        <div className={classes.Profile}>
            <Header name='Данила Иммершн' description='Фишман, встань мид!' location='Tokyo'/>
        </div>
    )
}

export default Profile;
