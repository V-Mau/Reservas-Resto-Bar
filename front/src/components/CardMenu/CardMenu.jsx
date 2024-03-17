import React from "react";
import Styles from "./CardMenu.module.css"
import Sushi from '../../../Img/sushi.webp'


export const CardMenu = () =>{
    return (
        
        <div className={Styles.CardMenu}>
           
                <img src={Sushi} alt="Sushi" className={Styles.ImgCard}/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laboriosam temporibus quasi id odit delectus nesciunt, dolorem corrupti voluptas impedit obcaecati iusto laborum vitae adipisci debitis commodi facilis quas. Dolores.
                </p>
        </div>
             
            
    )
}