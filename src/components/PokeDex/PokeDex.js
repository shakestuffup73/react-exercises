import React from 'react'
import pokemon from '../../helpers/pokemon';
import PokeCard from '../PokeCard/PokeCard'

const PokeDex = () => {

  return ( 
    <>
      <div>
        <h1>PokeDex!</h1>
        {pokemon.map((p) => (
          <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))}
      </div>
    </>
  );
}

export default PokeDex;