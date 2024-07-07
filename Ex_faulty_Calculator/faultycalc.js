r= Math.random()
let a = prompt("Enter first Number")
let b = prompt("Enter Second Number")
let c = prompt("Enter Operation")

let obj = {
    "*" : "+",
    "-" : "/",
    "+": "-"

}

if(r>0.1){
    //perform correct operations 
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
 


}
else {
    //perform wrong operations
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
 
   
}