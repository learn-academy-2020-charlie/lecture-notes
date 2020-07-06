// JavaScript Objects 7/6/2020

// older way to create objects
// {"key": "value"}

// cool way using symbols
// {key1: "value", key2: "another value", key3: "yet another", key4: 67, key5: true, Key6: [3, 4, 5]}


// JSON - JavaScript Object Notation
let myObject = {
  key1: "value",
  key2: "another value",
  key3: "yet another",
  key4: 67,
  key5: true,
  key6: [3, 4, 5]
}

// Retrieving the value by calling the object name and the key
// console.log(myObject.key1)
// console.log(myObject.key4)
console.log(myObject.key6.map(value => value*2))

// let breakfast = {
//   item1: "eggs",
//   item2: "toast",
//   item3: "cereal",
//   item4: {
//     fruit1: "banana",
//     fruit2: "strawberry",
//     fruit3: "blueberry"
//   },
//   menu: function(){
//     return `Today we can have ${this.item1}, ${this.item2}, ${this.item3}, ${this.item4.fruit1}, ${this.item4.fruit2}, ${this.item4.fruit3}.`
//   }
// }
// console.log(breakfast.menu())


// Objects are the intersection of data and behavior
// Methods are functions that belong to objects



let breakfast = {
  item1: "eggs",
  item2: "toast",
  item3: "cereal",
  item4: {
    fruit1: "banana",
    fruit2: "strawberry",
    fruit3: "blueberry"
  }
}
// object destructuring
let { fruit1, fruit2, fruit3 } = breakfast.item4

// console.log(fruit1, fruit2, fruit3)

let { item1 } = breakfast
// console.log(item1)




// console.log(cashMoney.length)


// let eachItem = cashMoney.map(value => value.person)
// console.log(eachItem)

// const getPerson = (array) => {
//   return array.map(value => {
//     return value.worth
//   })
// }
// console.log(getPerson(cashMoney))


let cashMoney = [
  {worth: 1, person: "George W"},
  {worth: 5, person: "Abe"},
  {worth: 10, person: "Hamilton"},
  {worth: 20, person: "Jackson"}
]

// get only the objects with worth amounts that are odd numbers
const onlyOdd = (array) => {
  let oddBills = array.filter(value => {
    return value.worth % 2 !== 0
  })
  return oddBills.map(value => value.person)
}
// console.log(onlyOdd(cashMoney))
