
//------Is file men ham ny 3 kaam kie hen 
// Map : ek array ko map karty hwe dosra array build karna
//filter : array par filter wala function laga kar us ko filter karna 
//Reduce : Jab ham ek fuction ko run karna chahty hen k jo function ho wo array ki valuse par run hota jae tw ham reduce use karty hen 




//------------------Map-------------------
let arr = [1,3,4,6,7]

//----Method 1:
var newArr = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element**2)
}

//---------Method 02: 
var newArr2 = arr.map((e)=>{
    return e**2
})
console.log(newArr2)




//------------------------filter (Main topic)-------------


//making varible function to find the number greater than seven
//Method 01 
const greaterThanSeven = (e)=>{
    if (e>7){
        return true
    }
    else{
        return false 
    }
}
//Method 02:
//-----------making function with asan tareeqa----------------- 
/*
function greaterThanSeven(e){
    if(e>7){
        return true
    }
     return false 
           
}

*/
//filter work 
console.log(newArr.filter(greaterThanSeven))


//----------------------Reduce---------------------
let arr2 = [1,2,3,4,5,6,7]

//Method 01: variable function
const red = (a,b)=>{
    return (a+b)
}
//Method 02: using function key word
// function red(a,b){
//     return a+b;
// }

//ek ese array ko return karo joke reduce karta hy ek ese array ko jab ham us pe red function apply karty hen

console.log(arr2.reduce(red))



//Array .from
console.log(Array.from("warda"))