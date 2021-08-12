import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Card = ({img, client}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? "card light" : "card dark"} target="_blanck">
      <img className="card-img-top" src={img} alt="card" />
      <div className="card-title">
        <h2 className="client">{client}</h2> 
      </div>
    </div>
  );
};

export default Card;