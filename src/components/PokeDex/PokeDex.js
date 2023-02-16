import React from 'react'
import pokemon from '../../helpers/pokemon';
import PokeCard from '../PokeCard/PokeCard'
import styles from './PokeDex.module.css'

const PokeDex = () => {

  return ( 
    <>
      <div>
        <h1>PokeDex!</h1>
        <div className={styles.PokeDexCards}>
        {pokemon.map((p) => (
          <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))}
        </div>
      </div>
    </>
  );
}

export default PokeDex;