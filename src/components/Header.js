import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const Header = () => {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>
            <div className="header__logo">
                <img 
                    src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png" 
                    alt="Hulu Logo"
                />
            </div>
        </div>
    )
}

export default Header
