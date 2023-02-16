import React from "react";
import styles from './PokeCard.module.css'
// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const PokeCard = (props) => {

  let imgPadding = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
  let imgSrc = `${POKE_API}${imgPadding(props.id)}.png`

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