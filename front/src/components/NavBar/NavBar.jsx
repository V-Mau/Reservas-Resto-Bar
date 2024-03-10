import React from 'react';
import logo from '../../assets/trustpilot-2.svg'
import avatar from '../../../Img/Kardus Zomm.jpeg'
import StyleSheet from './NavBar.module.css'

export  const NavBar = () => {
    return (
        <div className={StyleSheet.navbarContainer}>
            <div className={StyleSheet.logoSection}>
                <img src={logo} alt="logo" />
            </div>
            <div className={StyleSheet.linkSection}>
                <span>HOME</span>
                <span>RESERVAS</span>
                <span>ABOUT</span>
                <span>CONTACTOS</span>
            </div>
            <div className={StyleSheet.avatarSection}>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    );
}
