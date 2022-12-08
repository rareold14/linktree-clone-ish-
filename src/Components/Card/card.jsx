import React from 'react'
import './colors.css'

export function Card (props){
    return(
        <>
        <a href={props.links.url}>
            <div className="card-image justify-content-center text-center">
            <img src={props.links.img} alt=""  height={'76px'} width={'76px'}/>
            
        </div>
        </a>
        <div>
            <h4>{props.links.title}</h4>
            <p>{props.links.description}</p>
        </div>
        </>
        
    )
}