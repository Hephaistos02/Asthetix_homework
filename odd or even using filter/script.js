let arr = [1,2,3,4,5,6,7,8,9,10]
const even = arr.filter((n)=>n%2==0)
const odd = arr.filter((n)=>n%2==1)

console.log("The even numbers are: " +even);
console.log("The odd numbers are: " +odd);