import {NavLink} from 'react-router-dom';
import Style from './Card.module.css'
import { addFav, removeFav } from '../../redux/action';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


const Card = ({id, name, status, species, gender, image, onClose, addFav, removeFav, myFavorites})=> {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={Style.container}>
                  <button className={Style.favorites} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
                  <button className={Style.btn} onClick={()=>onClose(id)}>X</button>
        <NavLink className={Style.links} to={`/detail/${id}`}>
            <h2 className={Style.links}>{name}</h2>
         </NavLink>
         <h2 className={Style.data}>{species}</h2>
         <h2 className={Style.data}>{gender}</h2>
         <h2 className={Style.data}>{status}</h2>

         <img  className={Style.img} src={image} alt=''/>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);