
import {Routes,Route} from 'react-router-dom';
import { Home } from "./views/Home/Home";
import {NavBar} from './components/NavBar/NavBar'
import {MyBooking} from './views/Booking/MyBooking' 
import { Login } from "./views/Login/Login";
import { Register }  from './views/Register/Register';
import { useSelector } from "react-redux";
import { Landing } from "./views/Landing/Landing";
import { BookingForm } from "./views/BookingForm/BookingForm";
import { About } from "./views/Abuot/Abaout";
import { Contacto } from "./views/Contactos/Contacto";



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
      <Route path="/bookings/schedule" element={<BookingForm/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contacto/>}/>
    </Routes>
    </div>
    
    );
  }
    
  export default App;
      