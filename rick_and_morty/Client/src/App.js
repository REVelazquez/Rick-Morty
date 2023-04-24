import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import {useState, useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios';


function App() {
   const [characters, setCharacters]=useState([]);
   const [access, setAccess]= useState(false);
   
   const EMAIL= 'rvelazquez@gmail.com';
   const PASSWORD='pass123';
   // const URL_BASE='https://be-a-rym.up.railway.app/api/character/'
   // const API_KEY='acae4beaabe1.506e060bbebd630bb2b1'
   const location= useLocation();
   const navigate= useNavigate();
    

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response=> response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   const login = function(userData){
      if(userData.email===EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      }else{
         alert('Credenciales incorrectas')
      };
   };
   

   useEffect (() => {!access && navigate('/');
      },[access]);

    
   return (
      <div className='App'>
         {location.pathname === '/' ? <Form login={login}/> :<Nav onSearch={onSearch} setAccess={setAccess} /> }         
          
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
         
      </div>
   );
}

export default App;
