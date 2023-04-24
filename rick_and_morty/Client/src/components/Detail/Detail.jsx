import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css'

const URL_BASE='https://be-a-rym.up.railway.app/api/character/'
const API_KEY='acae4beaabe1.506e060bbebd630bb2b1'

const Detail=()=>{
    const {id}=useParams()
    const [character, setCharacter]= useState({})
    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);//array de de dependencia que es lo que corta el ciclo y deja de pedir infinitamente cosas
       
        return(
            <div>
                 <h1 className={style.name}>{character?.name}</h1>
            <div className={style.container}>
                <div >
                <h2 className={style.tittle}>Gender:</h2>
                <h3 className={style.text}>{character?.gender}</h3>
                </div>
                <div >
                <h2 className={style.tittle}>Species:</h2>
                <h3 className={style.text}>{character?.species}</h3>
                </div>
                <div >
                <h2 className={style.tittle}>Status:</h2>
                <h3 className={style.text}>{character?.status}</h3>  
                </div>
                <div >                   
                <h2 className={style.tittle}>Origin:</h2>
                <h3 className={style.text}>{character?.origin?.name}</h3>
                </div>
                <div >
                <h2 className={style.tittle}>Location:</h2>
                <h3 className={style.text}>{character?.location?.name}</h3>
                </div>
                
                <img className={style.image} src={character?.image} alt={character.name}/>          
        </div>
        </div>
    )
}

export default Detail;