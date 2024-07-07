let a = [ 1,34,67,89]


//------------simple for loop 
for(i=0;i<=a.length;i++){
    console.log(a[i])
}


//------------for each loop 
a.forEach((value , index, array) => {
    console.log(value,index,array)
})


//--------------for in use for object 
obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
        
    }
}

fruit =["mango","apple","banana"]
//----------------for of loop 
for (const iterator of fruit) {
    console.log(iterator)
    
}



