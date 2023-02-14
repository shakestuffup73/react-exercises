import foods from '../../helpers/foods.js'
import {choice, remove} from '../../helpers/helpers.js'

const randomFruit = () => {
  let randomItem = choice(foods)
  let result = remove(foods, randomItem)
  // let filteredArrayLength = result[0].length
  return ( 
    <>
      <div>
        <h1>I'd like one: {randomItem}</h1>
      </div>
      <div>
        <h1>Here you go: {result}</h1>
      </div>
    </>
  );
}

export default randomFruit;