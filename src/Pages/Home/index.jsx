import React from "react";
import photo from "../../Assets/fotinho.jpg"
import Github from "../../Assets/Github.png"
import Instagram from "../../Assets/Instagram.png"
import Twitter from "../../Assets/Twitter.png"
import Pinterest from "../../Assets/Pinterest.png"
import { Card } from "../../Components/Card/card";


export function Home(){
    const link = [
        {
            img: Github,
            title: 'GitHub',
            url: 'https://github.com/rareold14',
            description: 'Apenas o perfil de um dev totalmente principiante.'
        },

        {
            img: Instagram,
            title: 'Instagram',
            url: 'https://www.instagram.com/rareold__14/',
            description: 'Vá direto ao meu nada interessante Instagram. Divirta-se.'
        },

        {
            img: Twitter,
            title: 'Twitter',
            url:'https://twitter.com/Dragon15J',
            description: 'Está empoeirado, mas uma vez a cada passagem do Cometa Halley eu entro lá, eu juro.'
        },

        {
            img: Pinterest,
            title: 'Pinterest',
            url: 'https://br.pinterest.com/rareold14/',
            description: 'Terra onde viajo para inspirar minhas peripécias de cada século.'
        }

    ];




    return(
        <>
        <div className='container d-flex p-4 align-items-center justify-content-center flex-column'>
            <img src={photo} alt='' height={'114px'} width={'114px'} className='px-2' class='rounded-circle'/>
            <h5>João Pedro Rodrigues</h5>
            <p>@rareold14</p>
        </div>
        <div className="container p-4">
            {link.map(link=> {
                return(
                   <Card links={link}/>
                )
            })}
              
        </div>
        <div className='text-center mt-4'>
            <p>Feito por João Pedro Rodrigues. Ad astra per aspera🌠 </p>
        </div>
        
        </>
    )
}



