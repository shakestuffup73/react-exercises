function choice(items){
  const chosenItem = items[Math.floor(Math.random() * items.length)]
  return chosenItem
}

function remove(items, item){
  if (items.includes(item)){
  const filteredArray = items.filter(food => food !== item)
  const removedItem = item
  console.log('this is item', item)
  return [filteredArray, removedItem]
  }
  else {
    return undefined
  }
}

console.log(remove([
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍎",
  "🍏",
  "🍐",
  "🍒",
  "🍓",
  "🥝",
  "🍅",
  "🥑",
], "🍋"))