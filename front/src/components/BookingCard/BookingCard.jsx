
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
    
     <div className={Styles.container}>
      <h1>Reservación</h1>
      <div className={Styles.bookingCard}>
        
        <span>{dateFormat}</span>
        <span>{time} hs</span>
        <span>{description}</span>
        {status === 'active' ? ( <span className={Styles.cancelButton } onClick={handleClick}>
          Cancelar
          </span>) : ( <span className={Styles.cancelled}>Cancelado</span>)
          }
       
      </div>
     </div>
      
    
  );
}


