let p1 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("Resolved after 2 seconds")
        resolve(56)
        
    }, 2000);
})
p1.then((value)=>{
    console.log(value)
    return new Promise(( resolve , reject) =>{
        setTimeout(() => {
            resolve("Promise 2")
            
        }, 2000);
        
    })
    

}).then((value)=>{
    console.log("we are done")
    return 2

}).then((value)=>{
    console.log("now we are pakka done")
})