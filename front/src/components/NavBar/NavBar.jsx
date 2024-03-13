import React from 'react';
import logo from '../../assets/trustpilot-2.svg'
import avatar from '../../../Img/Kardus Zomm.jpeg'
import StyleSheet from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export  const NavBar = () => {

    const login = useSelector(state => state.userData)
    console.log(login);

    return (
        <div className={StyleSheet.navbarContainer}>
            <div className={StyleSheet.logoSection}>
                <img src={logo} alt="logo" />
            </div>
            <div className={StyleSheet.linkSection}>

                
                <Link to="/home">HOME</Link> 
                <Link to="/home">HOME</Link>
                {
                 login &&   
                    <Link to="/bookings">RESERVAS</Link>
                }
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACTOS</Link>
            </div>
            <div className={StyleSheet.avatarSection}>
                <img src={avatar} alt="avatar" />
                
            </div>
        </div>
                

    );
}
