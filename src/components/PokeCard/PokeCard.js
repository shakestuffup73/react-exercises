import React from "react";
import styles from './PokeCard.module.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const PokeCard = (props) => {
  let imgSrc = `${POKE_API}${props.id}.png`
  return ( 
    <>
      <div className={styles.PokeCard}>
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        <h3>{props.exp}</h3>
        <img src={imgSrc} alt='pokemon' />
      </div>
    </>
  );
}

export default PokeCard;