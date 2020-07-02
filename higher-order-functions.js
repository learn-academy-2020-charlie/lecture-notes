// Higher Order Functions

// Higher order funtion - is a built in method that takes a function as an argument or returns a function as a result

// A higher order function in JavaScript is a set of built in commands. All the commands operate on functions. A higher order function either takes a function as an argument or returns a function as a result. Higher order functions are used for iteration.

// Iteration: is a process where a specific command or code block is repeated a specified number of times or until a condition is met


// forEach()

var studentNames = ["Trip", "Selam", "Erica", "Ryan"]

// Takes a function as an argument
studentNames.forEach((currentValue, index) => console.log(`the index is ${index}`))

// currentValue === array[i]
// index === i


// Returns a function as the result
var getNames = (value) => console.log(`Hi, ${value}`)
studentNames.forEach(getNames)

// map()

var studentNames = ["Trip", "Selam", "Erica", "Ryan"]

var names = studentNames.map((value, index) => `Hi, ${value} at the index of ${index}`)
console.log(names)
console.log(names)
console.log(studentNames)


// multiply all numbers by 3, if the num is even or odd

var mult3 = myNums.map(value => {
  let timesThree = value*3
  if(timesThree % 2 === 0){
    return `The number ${timesThree} is even`
  } else {
    return `The number ${timesThree} is odd`
  }
})
console.log(mult3)


// Wrap the logic into a function so it can be reused

const oddOrEven = (array) => {

  let mult3 = array.map(value => {
    let timesThree = value*3
    if(timesThree % 2 === 0){
      return `The number ${timesThree} is even`
    } else {
      return `The number ${timesThree} is odd`
    }
  })
  return mult3

}
// console.log(oddOrEven(myNums1))
// console.log(oddOrEven(myNums2))



const nums = (array) => {
  return array.map((value, index) => {
    return `Value: ${value} and the index: ${index}`
  })
}
console.log(nums(myNums1))
console.log(nums(myNums2))



// filter()

let myNums1 = [4, 67, 34, 9, 76, -3]
let myNums2 = [3, 4, 78, 2, 45, -4]


const onlyOdds = (array) => {
  return array.filter(value => {
    if(value % 2 !== 0){
      return value
    }
  })
}
console.log(onlyOdds(myNums1))
console.log(onlyOdds(myNums2))



// create a function that takes an array of mixed data and returns an array with only odd numbers

let mixedData = [56, true, null, "hello", 45, 67, 9, "yo!", 2]

const oddNums = (array) => {
  return array.filter(value => {
    return typeof value === "number" && value%2 !== 0
  })
}
console.log(oddNums(mixedData))
