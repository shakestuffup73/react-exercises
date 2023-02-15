import React from "react";
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const PokeCard = (props) => {
  let imgSrc = `${POKE_API}${props.id}.png`
  return ( 
    <>
      <div className='PokeCard'>
        <h1>{props.name}</h1>
        <img src={imgSrc} alt='pokemon' />
      </div>
    </>
  );
}

export default PokeCard;