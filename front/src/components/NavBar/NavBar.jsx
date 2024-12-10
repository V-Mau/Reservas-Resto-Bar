import logo from "../../../Img/misuki-_1_.webp";
import avatar from "../../../Img/Kardus Zomm.jpeg";
import StyleSheet from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setUserBooking } from "../../Redux/usersSlice";

export const NavBar = () => {
  const login = useSelector(state => state.actualUser?.userData?.login);
  const userName = useSelector(state => state.actualUser?.userData?.user?.name); // Suponiendo que tienes el nombre del usuario en el estado
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmation = window.confirm("¿Deseas cerrar sesión?");
    if (confirmation) {
      dispatch(setUserData({}));
      dispatch(setUserBooking([]));
      navigate("/"); // En tu caso es la landing
    }
  };

  return (
    <div className={StyleSheet.navbarContainer}>
      <div className={StyleSheet.logoSection}>
        <img src={logo} alt="logo" />
      </div>

      <div className={StyleSheet.linkSection}>
        <NavLink to="/home">
          <span>MENU</span>
        </NavLink>

        {login && (
          <NavLink to="/bookings">
            <span>RESERVAS</span>
          </NavLink>
        )}

        {login && (
          <NavLink to="/bookings/schedule">
            <span>NUEVA RESERVA</span>
          </NavLink>
        )}

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

      {/* Mostrar el avatar y el nombre solo si el usuario está logueado */}
      {login && (
        <div className={StyleSheet.avatarSection}>
          <img src={avatar} alt="avatar" />
         <p>
          <span className={StyleSheet.userName}>
            {userName}
            
            </span>
          </p>  {/* Nombre debajo del avatar */}
        </div>
      )}
    </div>
  );
};
