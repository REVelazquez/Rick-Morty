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

// const URL_BASE='https://be-a-rym.up.railway.app/api/character/'
// const API_KEY='acae4beaabe1.506e060bbebd630bb2b1'
const email= 'rvelazquez@gmail.com';
const password='pass123';
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   const location= useLocation();
   const navigate= useNavigate();
   const [characters, setCharacters]=useState([]);
   const [access, setAccess]= useState(false);
   
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data}= await axios(URL + `?email=${email}&password=${password}`)
         const {access} =data;
            setAccess(access);
            access && navigate('/home');
         }
         catch (error) {
         console.log(error.message)
      }
   }
   
   useEffect (() => {!access && navigate('/');
      },[access]);
   

const onSearch = async (id) => {
   try {
      const {data}=axios(`http://localhost:3001/rickandmorty/character/${id}`)
   
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data])};
   } catch (error) {
      alert('¡No hay personajes con este ID!')
   }
}

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   
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
