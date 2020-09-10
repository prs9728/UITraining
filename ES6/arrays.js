/*var numbers=[1,2,3,4,5,6,7,8];
console.log(numbers.reverse());
*/
var numbers=[1,2,3,4,5,6,7,8];
var evenumbers=numbers.filter(function(hey,hello)
{
    return hey%2==1;
})
console.log(evenumbers);