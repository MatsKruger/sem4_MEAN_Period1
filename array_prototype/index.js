const arr = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

Array.prototype.myMap = function(callback) {
    let newArr = [];

    for(let i = 0; i < this.length; i += 1) {
        newArr.push(this[i].toUpperCase());
    }
    callback(newArr);
}
Array.prototype.myFilter = function(callback) {
    let newArr = [];
    this.forEach(item => {
        if (item.length <= 3) newArr.push(item);
    });
    callback(newArr)
}
arr.myFilter(newArr => {
    console.log(newArr);
});
console.log(arr.filter(item => item.length <= 3));
arr.myMap(newArr => {
    console.log(newArr);
})
console.log(arr.map(item => item.toUpperCase()));
