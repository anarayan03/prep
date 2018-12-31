function sumAll(...num : number[])
{
let sum : number = 0;
for(let data of num)
{
sum = sum+data;
//console.log(data)
}
console.log(sum)
}

sumAll(1,2,3,4,5)