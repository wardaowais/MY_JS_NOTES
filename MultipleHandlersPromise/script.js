let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        alert("hey ia mresolved ")
        resolve(1);
        
    }, 2000);
})

p1.then(()=>{
    console.log("congratulations this promise is now resolved ")
})

p1.then(()=>{
    console.log("hurray ")
})