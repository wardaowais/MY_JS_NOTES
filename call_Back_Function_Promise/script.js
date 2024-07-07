// java script is asynchoronous in nature example is settime out function execute late instead of 1st postion
//their are some a synchoronous function in java let timeout()


console.log("Harry is a hacker")
console.log("Rohan is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

//funtion ko as a variable pass karen yeah call back function hy 



const fn =() =>{
   console.log("nothing")
}
const callBAck = (arg,fn)=>{
   console.log(arg)
   fn()
  
}

const loadScript = (src , callback) => {
   let sc =  document.createElement("script");
   sc.src = src;
   sc.onload = callBAck("Warda",fn)
   document.head.append(sc)


  
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callBAck)


// if we give one call back into another and another call back fuction inside this function so a pyramid of dom created whose solution is promises

