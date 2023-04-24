import style from './Cards.module.css';
import Card from "../Card/Card";
const Cards=({ characters, onClose }) => {

   return (
      <div className={style.home}>
         {
            characters.map(({ id, name, status, species, gender, image }) => {
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     onClose={onClose}
                  />
               )
            })
         }
      </div>
   )
}
export default Cards;