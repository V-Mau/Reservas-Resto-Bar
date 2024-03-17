// BookingCard
import React from 'react';
import Styles from './BookingCard.module.css'

export const BookingCard = ({ id, date, time, status, description, handleCancel  }) => {
 

  date = new Date(date);
  const dateFormat = `
  ${date.getDate()} /
  ${date.getMonth() + 1} /
  ${date.getFullYear()}`;
  const handleClick = () => {
    if(window.confirm(
      `¿Estas seguro que deseas cancelar la reserva ${dateFormat} a las ${time} hs ?`
      )){
      handleCancel(id);
    }
    
  }
  return (
    
      <div className={Styles.bookingCard}>
        <p> Reservación</p>
        <span>{dateFormat}</span>
        <span>{time} hs</span>
        <span>{description}</span>
        {status === 'active' ? ( <span className={Styles.active } onClick={handleClick}>
          Activo (cancelar)
          </span>) : ( <span className={Styles.cancelled}>Cancelado</span>)
          }
       
      </div>
    
  );
}


