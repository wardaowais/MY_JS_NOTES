function printname(name) {
    console.log("Hey"+ "My name is "+ name)
    
}

// printname("warda")
// printname("yusra")

function sum_(a,b,c=5){
    // console.log(a+b)
    return a+b+c
}
console.log(sum_(4,6))


//--------------arrow function----
const func1 = (x)=>{
    console.log("I am an arrow function ",x)
}

func1(34)
func1(45)