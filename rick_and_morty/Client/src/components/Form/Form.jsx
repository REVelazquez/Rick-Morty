import { useState } from "react"
import Validation from "./Validation"
import style from './Form.module.css';


const Form =({login})=>{
   
    const [userData, setUserData]= useState({
        email: '',
        password:''
    })
    const [errors, setErrors]=useState({
        email:'',
        password:''
    })

    
    const handleOnChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
        Validation({...userData, [event.target.name]:event.target.value}, errors, setErrors)
    }    
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        login(userData)
    };
    return(   
        <div className={style.logIn} > 
        <img src="./Welcome.jpg" alt="" />    
        <form onSubmit={handleOnSubmit}>
            <label className={style.email} htmlFor="Email" value='email'> Email: </label>
            <p className={style.danger}>{errors.email}</p>
            <input className={style.inputs} type="email" name='email' value={userData.email} onChange={handleOnChange}/>
            <hr className={style.espacio}/>
            <label className={style.password} htmlFor="Password" value='password'> Password: </label>
             <p className={style.danger}>{errors.password}</p>
            <input className={style.inputs} type="password" name= 'password' value={userData.password} onChange={handleOnChange}/>
            <hr className={style.espacio} />
            <button className={style.btn}>Log in</button>
        </form>
        </div>
        )    
    
}
export default Form;