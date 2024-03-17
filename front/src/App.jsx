import React from "react";
import {Routes,Route} from 'react-router-dom';
import { Home } from "./views/Home/Home";
import {NavBar} from './components/NavBar/NavBar'
import {MyBooking} from './views/Booking/MyBooking' 
import { Login } from "./views/Login/Login";
import { Register }  from './views/Register/Register';
import { useSelector } from "react-redux";
import { Landing } from "./views/Landing/Landing";

function App() {

  const users = useSelector(state => state.actualUser)
  console.log(users );

  

  return (
    <div>
    
     <NavBar/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/bookings" element={<MyBooking/>}/>
      <Route path="/bookingForm" element={<BookingForm/>}/>
    </Routes>
    </div>
    
    );
  }
    
  export default App;
      