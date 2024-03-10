// MyBooking.jsx
import React, { useEffect, useState } from 'react';
import Styles from './MyBooking.module.css';
import { BookingCard } from '../../components/BookingCard/BookingCard';
import axios from 'axios';


const GETBOOKINGS_URL = "http://localhost:3000/bookings";

export const MyBooking = () => {
  const [booking, setBooking] = useState([]);
  
  useEffect(() => {
    axios.get(GETBOOKINGS_URL)
    .then(response => setBooking(response.data))
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



