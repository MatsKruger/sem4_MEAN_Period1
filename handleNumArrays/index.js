var a = [1,2,3];
var b = [1,2,3];

const handleNumArrays = (na1,na2,callback) => callback(na1.map((item, index) => item + na2[index]));

handleNumArrays(a,b,function(res){
 console.log(res.join(","));
})

handleNumArrays(a,b,function(res){
    console.log(res.reduce((prev, curr) => prev + curr));
});

handleNumArrays(a,b,function(res){
    console.log(res.map(item => item * 10).join(','));
})
