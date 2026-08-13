
function factorial(n:number):number
{
if (n===0){
    return 1}
else if (n<0){
    throw new Error("The number cannot be negative")
}
let result=1
for (let i=1;i<=n;i++){
    result=result*i
}
return result
}
console.log(factorial(4))
console.log(factorial(0))
// console.log(factorial(-17)

