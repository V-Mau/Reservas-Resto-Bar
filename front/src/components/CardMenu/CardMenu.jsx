

import React from "react";
import Styles from "./CardMenu.module.css";

export const CardMenu = ({ images }) => {
  return (
    <div className={Styles.cardMenuContainer}>
      {images.map((imageRow, rowIndex) => (
        <div key={rowIndex} className={Styles.row}>
          {imageRow.map((image, index) => (
            <div key={index} className={Styles.column}>
              <div className={Styles.CardItem}>
                <img src={image} alt={`Sushi ${index}`} className={Styles.ImgCard} />
                <h1>Ofertas del día..!!!</h1>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
