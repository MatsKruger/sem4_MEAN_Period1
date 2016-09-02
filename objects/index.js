// 1
const obj = {
  name: 'Mats',
  birthday: 'October',
  hobby: 'Music',
  email: 'donno@donno.dk'
}

for (let prop in obj) {
  console.log(obj[prop])
}

for (let prop in obj) {
  if (prop === 'email') {
    delete obj[prop]
  }
}

for (let prop in obj) {
  console.log(obj[prop])
}

console.log(obj.hasOwnProperty('name'))
console.log(obj.hasOwnProperty('phone'))

// 2

const Person = function ({
  firstName,
  lastName,
  age
} = {}) {
  return {
    getInfo: () => ({firstName, lastName, age})
  }
}

const person = new Person()
console.log(person.getInfo())
