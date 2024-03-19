import React from 'react';
import { CardMenu } from '../../components/CardMenu/CardMenu';
import VerticalCardMenu from '../../components/VerticalCardMenu/VerticalCardMenu'; 
import Styles from './Home.module.css';
import { imgDrink } from '../../helpers/imgDrink';
import imgCardMenu from '../../helpers/imgCardMenu'; 

export const Home = () => {
  const cardMenuImages = imgCardMenu;
  const chunkSize = 3; 
  const chunkedImages = [];
  
  
  for (let i = 0; i < cardMenuImages.length; i += chunkSize) {
    chunkedImages.push(cardMenuImages.slice(i, i + chunkSize));
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.column}>
        <CardMenu images={chunkedImages} />
      </div>
      <VerticalCardMenu drinkImages={imgDrink} /> 
    </div>
  );
}

