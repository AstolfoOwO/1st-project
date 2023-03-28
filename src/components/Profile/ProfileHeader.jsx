import React from "react";
import './Profile.Header.css';

const ProfileHeader = () => {
    return(
        <div className={'ProfileHeader'}>
            <div className={'MainBanner'}>
                <img className={'banner'} src={'https://phonoteka.org/uploads/posts/2021-04/1619790169_1-phonoteka_org-p-anime-fon-dlya-bannera-2.png'} alt={'ProfileBanner'}/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileHeader;