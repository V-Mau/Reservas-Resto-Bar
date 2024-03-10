import React from 'react';
import { CardMenu } from '../../components/CardMenu/CardMenu';
import Styles from './Home.module.css';


export  const Home = () => {
    return (
        <div className={Styles.container}>

            
            <CardMenu/>
            <CardMenu/>
            <CardMenu/>
            
            

        </div>
    );
}
