import React from 'react';
import '../../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function index({ userPhoto }) {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src='https://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Drive-icon.png' alt='Vijay'/>
                <span>Drive</span>
            </div>
            <div className='header__searchContainer'>
                <div className='header__searchBar'>
                    <SearchIcon />
                    <input type='text' placeholder='Search in Drive'/>
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className='header__icons'>
                <span>
                    <HelpOutlineIcon className='header__help'/>
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <Avatar className='header__avatar' src={userPhoto} alt='Vijay'/>
            </div>
        </div>
    )
}

export default index
