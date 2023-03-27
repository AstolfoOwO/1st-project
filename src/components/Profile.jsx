import React from "react";
import './Profile.css';

const Profile = () => {
    return(
        <div className={'content'}>
            <div>
                <img className={'banner'} src={'http://m.gettywallpapers.com/wp-content/uploads/2021/07/Anime-4k-Wallpaper.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;