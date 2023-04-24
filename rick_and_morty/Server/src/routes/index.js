const {login} = require ('../controllers/login')
const {getCharById} = require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')

const router = requiere('express').Router();

router.get('/character/:id', (req, res)=>{// una forma valida y correcta seria poner ('/charater/:id', login)
    getCharById(req, res)
});
router.get('/login', (req, res)=>{
    login(req, res)
})
router.post('/fav', (req, res)=>{
    postFav(req, res)
})
router.delete('/fav/:id', (req, res)=>{
    deleteFav(req, res)
});

module.exports={
    router
}