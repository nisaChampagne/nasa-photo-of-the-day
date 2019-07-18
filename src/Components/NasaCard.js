import React from 'react';

export default function NasaCard(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.url}  alt='Space' style={{maxWidth: '300px'}}/>
            <div>{props.date}</div>
            <p>{props.explanation}</p>
            <p>Space and Science... and stuff---famous quote by gas station guy in Houston</p> 
        </div>
    )
}