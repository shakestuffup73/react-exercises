import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import styles from './PokeDex.module.css'

const PokeDex = ({ pokemon, exp, isWinner }) => {
  let title
  if (isWinner){
    title = <h1 className={styles.PokeDexWinner}>Winning Hand</h1>
  } else {
    title = <h1 className={styles.PokeDexLoser}>Losing Hand</h1>
  }
  return ( 
    <>
      <div className={styles.PokeDex}>
        <h1>PokeDex!</h1>
        <p>Total Experience: {exp}</p>
        <div>{title}</div>
        <div className={styles.PokeDexCards}>
        {pokemon.map((p) => (
          <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience} key={p.id}/>
        ))}
        </div>
      </div>
    </>
  );
}

export default PokeDex;