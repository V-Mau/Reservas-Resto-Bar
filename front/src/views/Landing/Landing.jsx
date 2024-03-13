import React from 'react';
import style from './Landing.module.css'
import { Link } from 'react-router-dom';


export const Landing = () => {
    return (
        <>
        <div className={`${style.backgroundCustom} ${style.container}`}>
        </div>
          <div className= {`${style.buttonContainer} ${style.buttonWrapper}`}>
          <Link to= "/login">
           <button type="submit"><h1>Bienvenido/a</h1></button>
           </Link>

          </div>
        </>
    )
}