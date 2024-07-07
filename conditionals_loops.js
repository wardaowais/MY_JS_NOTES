let age = 45;
if(age > 45){
    console.log("You are not eligible for married ")
}
else if (age < 45){
    console.log("I can marry with you")
}

else {
    console.log("Please try again later")
}

//arithmetic operators + - * / ** ++ --
// comparision operator ==  != ===(equal value and type) !==(not equal value and type)> < >=  <= ?

// logical operatoe && || !(logical not )


// loops 

//--------------for loop 
// for (let i = 0; i < 100; i++) {
//     console.log("My name is warda")
    
// }

let obj = {
    name: "warda",
    "job title ": "Software Engineer",
    class : "BSSE"

}

//----------------for in loop 
for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        let element = obj[key];
        console.log(key ,element)
    }
}

//------------- while loop
let i = 0
while(i<=5){
    console.log("My name is warda")
    i++;
}

// while loop

do{
    console.log("I am pagal")
    i++
}
while(i<=5);