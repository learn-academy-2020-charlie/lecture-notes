// ***Classes*****************************************************************
// Classes are a particular type of function that contain data and behavior.
// They are the blueprints of objects.

// constructor: a special method for creating and initializing objects
// this: a JavaScript keyword that refers to the object it belongs to
// new: creating a new instance of a class (aka a tangible object)

PascalCase
class HomeLoan {
  // constructors can have arguments
  constructor(string, social, dueDate = "1st") {
    this.name = string,
    this.payDate = dueDate
    this.debt = 300000
  }
  // methods
  makePayment() {
    this.debt -= 1000
  }

  missPayment() {
    this.debt += 200
  }
}

// new instance
var myHouse = new HomeLoan()
console.log(myHouse.debt);
myHouse.makePayment()
myHouse.makePayment()
myHouse.makePayment()
myHouse.makePayment()
myHouse.makePayment()
console.log("My house " + myHouse.debt);

// classes are reusable
var yourHouse = new HomeLoan()
console.log("Your house " + yourHouse.debt);
console.log(HomeLoan.debt);


// Creating an array of loans & mapping over that array.
var loanArray = []
var andeesHouse = new HomeLoan("Andee")
loanArray.push(andeesHouse)
var tripsHouse = new HomeLoan("Trip")
loanArray.push(tripsHouse)
var jakobsHouse = new HomeLoan("Jakob")
loanArray.push(jakobsHouse)
var miguelsHouse = new HomeLoan("Miguel")
loanArray.push(miguelsHouse)
console.log(loanArray);

andeesHouse.missPayment()
andeesHouse.missPayment()
andeesHouse.makePayment()
jakobsHouse.makePayment()
jakobsHouse.makePayment()
jakobsHouse.makePayment()
jakobsHouse.missPayment()
miguelsHouse.makePayment()
tripsHouse.makePayment()
console.log(loanArray);

var showInfo = loanArray.map(value => {
  return `${ value.name } still owes ${ value.debt }`
})
console.log(showInfo);

// constructors can hold and data type (arrays, etc)

// ***Class Inheritance*******************************************************
// super: within in the constructor method we call super() which passes the attributes from the constructor in the parent class

// Parent class
class Loan {
  constructor() {
    this.payDate = "1st"
  }

  getInfo() {
    return `Your due date is the ${ this.payDate }!`
  }
}

// Child class
class AutoLoan extends Loan {
  constructor() {
    // super() passes the attributes from the parent class
    super()
    this.debt = 10000
    this.interest = 13
  }

  refinance() {
    // here we can reassign this.interest from the default value assigned from the parent
    this.interest = 13
  }
}

var myCar = new AutoLoan()
console.log(myCar.interest);
myCar.refinance()
console.log(myCar.interest);
