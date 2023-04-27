const URL = `https://rickandmortyapi.com/api/character/`;
const axios = require("axios");

const getCharById = async (req, res) => {
   
    try {
        const { id } = req.params;
        const {data} = await axios(`${URL}/${id}`)
        
        if(!data.name) throw new Error (`Faltan datos del personaje con ID: ${id}`);
          
        const character= {
            id:data.id,
            name:data.name,
            status:data.status,
            gender:data.gender,
            species:data.species,
            origin:data.origin,
            image:data.image,    
            
        }
        res.status(200).json(character);
        // return res.status(404).send('Not found')
    } catch (error) {
        return error.message.includes('ID')
        ?res.status(404).send(error.message)
        :res.status(500).json(error.response.data.error) } 
}



module.exports = {getCharById};