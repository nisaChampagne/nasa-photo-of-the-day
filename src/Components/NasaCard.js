import React from 'react';
import { Image } from "./StyledWidgets.js";


export default function NasaCard(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <Image src={props.url}  alt='Space' style={{maxWidth: '400px'}}/>
            <div className='nasa-date'>{props.date}</div>
            <p className='nasa-explanation'>{props.explanation}</p>
            <p>Space and Science... and stuff---famous quote by gas station guy in Houston</p> 
        </div>
    )
}