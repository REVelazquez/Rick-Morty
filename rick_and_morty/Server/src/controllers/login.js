const user= require('../utils/users')
const login =(res, req)=>{
    const {email, password} = req.query

    const usersFound = users.find((user)=>{
        user.email === email && user.password === password
    }) 

    return usersFound
    ? res.status(200).json({acces: true})
    : res.status(200).json({acces: false})

    // if(usersFound) return res.status(200).json({accees: true})
    // return res.status(400).json({acces:false}) esto es lo mismo que lo otro pero de otra forma
}




module.exports ={
    login
};