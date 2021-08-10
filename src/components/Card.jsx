import React from 'react';

const Card = ({img, client}) => {
  return (
    <div className="card" target="_blanck">
      <img className="card-img-top" src={img} alt="card" />
      <div className="card-title">
        <h2 className="client">{client}</h2> 
      </div>
    </div>
  );
};

export default Card;