const URL = `https://rickandmortyapi.com/api/character/`;
const axios = require("axios");

const getCharById = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await axios.get(`${URL}${id}`);
        const {name, status, gender, species, origin, image} = response.data;

        if(name){
            const character = {
                id,
                name,
                status,
                gender,
                species,
                origin,
                image
        }
        return res.status(200).json(character);
    }
    return res.status(404).send("Not Found");
}catch(error){
    return res.status(500).send(error.message);
}
}


module.exports = {
    getCharById
};