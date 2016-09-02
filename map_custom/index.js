const arr = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']

function myMap (myArray, callback) {
  let newArr = []

  for (let i = 0; i < myArray.length; i += 1) {
    newArr.push(myArray[i].toUpperCase())
  }
  callback(newArr)
}
myMap(arr, newArr => {
  console.log(newArr)
})
console.log(arr.map(item => item.toUpperCase()))
