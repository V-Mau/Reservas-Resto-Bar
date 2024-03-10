import { Home } from "./views/Home/Home";
import {NavBar} from './components/NavBar/NavBar'
import {MyBooking} from './views/Booking/MyBooking' 
import { Login } from "./views/Login/Login";
function App() {
  

  return (
    <>
      <NavBar/>
      <Login/>
      {/* <Home/> */}
      {/* <MyBooking/> */}
      
    </>
  );
}

export default App;
