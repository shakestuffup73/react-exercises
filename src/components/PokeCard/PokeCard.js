import React from "react";
import styles from './PokeCard.module.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const PokeCard = (props) => {
  let imgSrc = `${POKE_API}${props.id}.png`
  return ( 
    <>
      <div className={styles.PokeCard}>
        <h1 className={styles.PokeCardTitle}>{props.name}</h1>
        <img src={imgSrc} alt='pokemon' />
        <div className={styles.PokeCardData}>Type: {props.type}</div>
        <div className={styles.PokeCardData}>EXP: {props.exp}</div>
      </div>
    </>
  );
}

export default PokeCard;