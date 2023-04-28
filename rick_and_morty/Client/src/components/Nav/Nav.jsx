
import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'

const Nav= ({onSearch, setAccess})=>{
    const audio= new Audio('./components/multimedia/pickleRickAudio')
    const [getAnimated, setGetAnimated]=useState(false)

//     const miBoton = document.getElementById("miBoton");

// miBoton.addEventListener("click", function() {
//   miBoton.classList.toggle("claseNueva");
// });

    const handleClick = ()=>{
        audio.play()
        setGetAnimated(true)
        if(getAnimated){
            clearTimeout()
        }
        setTimeout(() => {
            setGetAnimated(false)
        }, 1100);
  
    }
    const handleLogOut = () => {
        setAccess(false);
    }
    return(
        <nav  className={style.nav}>
             <SearchBar onSearch={onSearch}/>
             {/* esto va abajo id="miBoton" class="claseInicial" */}
             <button  className={style.animated} onClick={handleClick} >
                 Click me 
            </button>  
             <button className={style.btn}>
                <NavLink className={style.links} to='/about'>About</NavLink>
            </button>

            <button className={style.btn}> <NavLink className={style.links} to='/favorites'> Favorites</NavLink></button>

            <button className={style.btn}>
                <NavLink className={style.links} to='/home' >Home</NavLink>            
            </button>  

            <button className={style.logOut}  onClick={handleLogOut}> Log out </button>
              
        </nav>
    )
}

export default Nav;
