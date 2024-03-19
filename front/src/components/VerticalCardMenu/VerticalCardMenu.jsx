// VerticalCardMenu.jsx
import React from 'react';
import styles from './VerticalCardMenu.module.css'; 

const VerticalCardMenu = ({ drinkImages }) => {
  return (
    <div className={styles.VerticalCardMenu}> 
    <h1>Bebidas Locas</h1>
      {drinkImages.map((image, index) => (
        
        <img key={index} src={image} alt={`Imagen ${index}`} /> 
      ))}
    </div>
  );
};

export default VerticalCardMenu;
