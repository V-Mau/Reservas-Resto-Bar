// BookingCard
import React from 'react';
import Styles from './BookingCard.module.css'

export const BookingCard = ({ id, date, time, status, description }) => {
 

  date = new Date(date);
  const dateFormat = `
  ${date.getDate()} /
  ${date.getMonth() + 1} /
  ${date.getFullYear()}`
  return (
    <>
      <div className={Styles.bookingCard}>
        <p> Reservación</p>
        <span>{dateFormat}</span>
        <span>{time} hs</span>
        <span className={status === 'active'? Styles.active : Styles.canceled}>{status === 'active'? 'Pendiente (cancelar)' : 'Cancelada'}</span>
        <span>{description}</span>
      </div>
    </>
  );
}


