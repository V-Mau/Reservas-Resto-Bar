// MyBooking.jsx
import React, { useEffect, useState } from 'react';
import Styles from './MyBooking.module.css';
import { BookingCard } from '../../components/BookingCard/BookingCard';
import axios from 'axios';
import { useSelector } from 'react-redux';


// const GETBOOKINGS_URL = "http://localhost:3000/bookings";
const GETUSERBYID_URL = "http://localhost:3000/users";

export const MyBooking = () => {
  
  const [booking, setBooking] = useState([]);

  const actualUserId = useSelector(state => state. users.userData.id);
  console.log(actualUserId);

  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get(GETUSERBYID_URL)
    .then(response => setBooking(response.data))
    .then(data => console.log(data))
    .then(bokings =>  dispatch( setBooking( bokings ) ))
    .catch(error => console.log(error.message));
  }, []);

  

  return (
    <div className={Styles.container}>
      <h1>Lista de Reservas</h1>
    {booking.map(booking => (
      <BookingCard 
       key={booking.id}
        id={booking.id}
        date={booking.date}
        time={booking.time}
        status={booking.status}
        description={booking.description}
        
      />
    ))}
    </div> 
  );
}



