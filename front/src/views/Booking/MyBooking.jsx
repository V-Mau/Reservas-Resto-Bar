
import React, { useEffect, useMemo } from 'react';
import { BookingCard } from '../../components/BookingCard/BookingCard';
import { setUserBooking } from '../../Redux/usersSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './MyBooking.module.css';

const GET_USER_BY_ID_URL = "http://localhost:3000/users/";

export const MyBooking = () => {
  
  const actualUserId = useSelector(state => state.actualUser?.userData?.user?.id);
  console.log('ID de usuario:', actualUserId);

  const bookings = useSelector(state => state.actualUser.userBooking);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (actualUserId) {
      axios.get(GET_USER_BY_ID_URL + actualUserId)
        .then(response => response.data.bookings)
        .then(bookings => dispatch(setUserBooking(bookings)))
        .catch(error => console.log("Error fetching bookings:", error.message));
    }
  }, [actualUserId, dispatch]);

  const memoizedBookings = useMemo(() => bookings, [bookings]);

  const CANCEL_URL = "http://localhost:3000/bookings/cancel/";
  const handleCancel = (bookingId) => {
    axios.put(CANCEL_URL + bookingId)
      .then(response => response.data)
      .then(data => {
        axios.get(GET_USER_BY_ID_URL + actualUserId)
          .then(response => response.data.bookings)
          .then(bookings => dispatch(setUserBooking(bookings)))
          .catch(error => console.log(error.message));
      })
      .catch(error => alert(`Error al cancelar la reserva: ${error?.response?.data?.message}`)); 
  }; 

  return (
    <div className={Styles.container}>
      
    
      {memoizedBookings.length ?
        memoizedBookings.map((booking) => (
           <BookingCard 
            key={booking.id}
            id={booking.id}
            date={booking.date}
            time={booking.time}
            description={booking.description}
            status={booking.status}
            handleCancel={handleCancel}
           />
        )) :
        <h2>No hay reservas</h2>
      }
    </div> 
  );
}

