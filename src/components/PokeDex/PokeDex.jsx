import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import styles from './PokeDex.module.css'

const PokeDex = ({ pokemon, exp, isWinner }) => {

  return ( 
    <>
      <div>
        <h1>PokeDex!</h1>
        <p>Total Experience: {exp}</p>
        <p>{isWinner ? 'Winner' : 'Loser'}</p>
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