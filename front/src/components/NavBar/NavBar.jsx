import React from "react";
import logo from "../../../Img/misuki-_1_.webp";
import avatar from "../../../Img/Kardus Zomm.jpeg";
import StyleSheet from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setUserData, setUserBooking } from "../../Redux/usersSlice";


export const NavBar = () => {
  const login = useSelector(state => state.actualUser?.userData?.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmetion = window.confirm("¿Deseas cerrar sesión?");
    if(confirmetion){
      dispatch(setUserData({}));
      dispatch(setUserBooking([]));
      navigate("/") // en mi caso es landing
    }
  }

  return (
    <div className={StyleSheet.navbarContainer}>

      <div className={StyleSheet.logoSection}>
        <img src={logo} alt="logo" />
      </div> 
      <div className={StyleSheet.linkSection}>

        <NavLink to="/home"> 
        <span>MENU</span>
        </NavLink>

        { 
        login && 
        <NavLink to="/bookings"> 
        <span >RESERVAS</span>
        </NavLink> 
        }
         { 
        login && 
        <NavLink to="/bookings/schedule"> 
        <span>NUEVA RESERVA</span>
        </NavLink> 
        }

        <NavLink to="/about">
          <span>ABOUT</span>
          </NavLink>

        <NavLink to="/contact">
          <span>CONTACTOS</span>
          </NavLink>
                {login ? (
                  <span onClick={handleLogout}>LOGOUT</span>
                ) : (
                  <NavLink to="/login">
                    <span>LOGIN</span>
                  </NavLink>
                )}
            </div>
            <div className={StyleSheet.avatarSection}>
              <img src={avatar} alt="avatar" />
            </div>
          </div>
  );
}
