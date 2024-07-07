//----------making factorial using javascript 
function calculateFact(number){
    if(number==1 || number==0){
        return 1 
    }
    else {
        return number*(number-1)
    }

}
console.log(calculateFact(5))

//Using harry bhai function 
let a = 7

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}



//-------------factorial using for loop
let n = 6
var fact;
for (i=0 ; i<=n ; i++){
    if(n==0){
        fact =0
    }
    else if(n==1){
        fact = 1
       
    }
    else{
     fact = n*(n-1)    
    }
}
console.log(fact)


//------making array of for factorial number
let factArray=[] ;
let number= 6
for(i=1; i<=number ;i++){
    factArray.push(i)
}

//-------------factorial using reduce 
//variable function
const red=(a,b)=>{
  return a*b

}

console.log(factArray.reduce(red))

