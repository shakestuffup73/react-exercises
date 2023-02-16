import React from 'react'
import '../../helpers/pokemon.js'

const PokeGame = (props) => {

  let hand1 = []
  let hand2 = [...props.pokemon]
  while (hand1.length < hand2.length){
    let randIdx = Math.floor(Math.random() * hand2.length)
    let randPokemon = hand2.splice(randIdx, 1)[0]
    hand1.push(randPokemon)
  }
  console.log('this is hand1', hand1, 'this is hand2', hand2)
  
  return ( 
    <>
      <div>PokeGame!</div>
    </>
  );
}

export default PokeGame;