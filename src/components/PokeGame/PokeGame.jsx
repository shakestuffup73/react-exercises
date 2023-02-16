import React from 'react'
import PokeDex from '../PokeDex/PokeDex'

const PokeGame = (props) => {

  let hand1 = []
  let hand2 = [...props.pokemon]
  while (hand1.length < hand2.length){
    let randIdx = Math.floor(Math.random() * hand2.length)
    let randPokemon = hand2.splice(randIdx, 1)[0]
    hand1.push(randPokemon)
  }
  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

  console.log('this is props:', props)
  
  return ( 
    <>
      <div>
        <PokeDex pokemon={hand1} exp={exp1}/>
        <PokeDex pokemon={hand2} exp={exp2}/>
      </div>
    </>
  );
}

export default PokeGame;