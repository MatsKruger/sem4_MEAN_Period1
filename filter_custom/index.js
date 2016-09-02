const arr = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

function myFilter(array,callback) {
    let newArr = [];
    array.forEach(item => {
        if (item.length <= 3) newArr.push(item);
    });
    callback(newArr)
}
myFilter(arr, newArr => {
    console.log(newArr);
});
console.log(arr.filter(item => item.length <= 3));
