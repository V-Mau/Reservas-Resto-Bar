// MyBooking.jsx
import React, { useEffect, useState } from 'react';
import { BookingCard } from '../../components/BookingCard/BookingCard';
import axios from 'axios';
import {useDispatch, useSelector } from 'react-redux';
// import Styles from './MyBooking.module.css';
const GETUSERBYID_URL = "http://localhost:3000/users/";




export const MyBooking = () => {
  
  const actualUserId = useSelector(state => state.actualUser?.userData?.user?.id);
  
 
  const bookings= useSelector(state => state.actualUser.userBooking);
   

  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get(GETUSERBYID_URL + actualUserId)
    .then(response => response.data.bookings)
    .then(bokings =>  dispatch(setUserBookingg( bokings )))
    .catch(error => console.log(error.message));
    
  }, [actualUserId, dispatch]);
  const CANCEL_URL ="http://localhost:3000/bookings/cancel/"
  const handleCancel = (bookingId) => {
    axios.put(CANCEL_URL + bookingId)
    .then(response => response.data)
    .then(data => {
      axios.get(GETUSERBYID_URL + actualUserId)
      .then(response => response.data.bookings)
      .then(bokings =>  dispatch(setUserBookingg( bokings )))
      .catch(error => console.log(error.message));
    })
    .catch(error => alert(`Error al cancelar la reserva: ${error?.response?.message}`)); 
    
  

  return (
    <div className={Styles.container}>
      <h1>Lista de Reservas</h1>
      <div className={Styles.bookingList}>
      {bookings.length ?
        bookings.map((booking) => (
         <BookingCard 
          key={booking.id}
          id={booking.id}
          date={booking.date}
          time={booking.time}
          description={booking.description}
          handleCancel={handleCancel}
         />
      ))
        : <h2>No hay reservas</h2>
      
      
    }
    
      </div> 
    </div> 
  );
}





  return (
    <div className={Styles.container}>
      <h1>Lista de Reservas</h1>
      <div className={Styles.bookingList}>
      {bookings.length ?
        bookings.map((booking) => (
         <BookingCard 
          key={booking.id}
          id={booking.id}
          date={booking.date}
          time={booking.time}
          description={booking.description}
         />
      ))
        : <h2>No hay reservas</h2>
      }
      </div> 
    </div> 
  );
} 


