import Card from "../Card/Card";
import { useState } from "react";
import { connect, useDispatch } from 'react-redux'
import { filterCards, orderCards } from "../../redux/action";
import style from './Favorites.module.css'

const Favorites = ({ myFavorites }) => {
    const dispatch= useDispatch()
    const [aux, setAux] = useState(false);

    
    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(true)
    }
    const handleFilter= (event)=>{
        dispatch(filterCards(event.target.value));
    }
    return (
        <div>
            <select className={style.selectors} onChange={handleOrder}>
                    <option className={style.options} value="A">Ascendente</option>
                    <option className={style.options} value="D">Descendiente</option>
                </select>
            <select className={style.selectors} onChange={handleFilter}>
                <option className={style.options} value="Male">Masculino</option>
                <option className={style.options} value="Female">Female</option>
                <option className={style.options} value="Genderless">Genderless</option>
                <option className={style.options} value="unknown">Unknown</option>
                <option className={style.options} value="allCharacters">All Characters</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);
