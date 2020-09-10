
var users=[{name:"kiran",age:20},{name:"ran",age:30}];

console.log(users[0]);
console.log(users[1]);
var filteredData= users.filter(function(item){
    return item.age>0;
});

console.log(filteredData.map(function(item){return item.age;}));