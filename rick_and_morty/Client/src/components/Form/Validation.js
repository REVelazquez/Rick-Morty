const regexEmail=/\S+@\S+\.\S+/

const Validation= (userData, errors, setErrors)=>{
    if(!regexEmail.test(userData.email)){
        setErrors({...errors, email:'Email invalido'})
    }    
    else if(userData.email.length === 0){
        setErrors({...errors, email: 'Por favor completa este campo'}) 
    } 
    else if(userData.email.length <35){
        setErrors({...errors, email:'No puede superar los 35 caracteres'})
    }
    else{
        setErrors({...errors, email:''})
    }

    if(userData.password.length < 6 || userData.password.length>10){
        setErrors({...errors, password:'La password debe contener entre 6 y 10 caracteres'})
    }
    else if(!/\d/.test(userData.password)){
        setErrors({...errors, password:'Debe contener al menos un numero'})
    }else{
        setErrors({...errors, password:''})
    }

}

export default Validation;