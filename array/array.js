let fruit = ["apple","banana","mango"]
console.log(fruit);
console.log(fruit.length)
console.log(fruit[0])
console.log(fruit[1])

//changing array which can possible
fruit[0] = "Not apple";
console.log(fruit)

//type of array 
console.log(typeof(fruit))

//methods of array 
console.log(fruit.toString())
console.log(fruit.join(" and "))
console.log(fruit.pop()) // mango pop hogya hy 
console.log(fruit.push("ayesha"))

//shift pop ka bhai hy first element ko nikal leta hy 
fruit.shift()


//unshift push ka bhai hy first elemet ki jaga push kardeta hy 
fruit.unshift("jack")


//delete element ko index k hisab se delete kardeta hy 
a= [1,2,3,4,5,6]

//delete se woh element tw delete hojata hy but us ki memory allocated hoti hy wo del nahi hoti
delete a[5]
console.log(a.length)

//array concatination
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3))

//sorting the array 
unsort = [7,4,9]
console.log(unsort.sort())

//splice function ek position se element ko nikalny men madad deta hy 
let numbers = [1,2,3,4,5,6]
numbers.splice(1,2)
// is line of code men index 1 men se 2 elemet gaib hogye hy
console.log(numbers)

//agar splice k through koi number add karna hy then given line of code ko use karna pare ga 
let num = [1,2,3,4,5]
num.splice(1,2,444,555)
console.log(num)











