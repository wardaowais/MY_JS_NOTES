console.log('THIS IS PROMISE API');



//Making an instances of promises 
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No Number generating was supporting you")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done ")
            resolve("Harry")
        }, 3000);

    }

})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No Number generating was supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done 2")
            resolve("Harry2")
        }, 3000);

    }

})

//---------------Methods for promises-----------
// then(): Attaches callbacks for the fulfillment and rejection cases.
// catch(): Attaches a callback for only the rejection case.
// finally(): Attaches a callback that executes regardless of the promise's outcome.

//---------------Using promises method------------
prom1.then((result) => {
        console.log(result); // Handle the fulfilled case
    })
    .catch((error) => {
        console.log(error); // Handle the rejected case
    })
    .finally(() => {
        console.log("Operation completed."); // Execute regardless of the outcome
    });



//--------------Api For Promises----------------
//-------------Promise.allSettled-------------
//all stelled use kry gy tab chahy resolve ho reject ho ap ko status or value  mil jae promise ki
// let p3 = Promise.allSettled([prom1,prom2])
// p3.then((result)=>{
//     console.log(result);
    
// }).catch(error=>{
//     console.log(error)
// })


//-------------------Promise.all-------------------
//jab both promises ko use karna ho phr yeah all wala use karengy
// let p3 = Promise.all([prom1,prom2])
// p3.then((result)=>{
//     console.log(result);
    
// }).catch(error=>{
//     console.log(error)
// })


//--------------------------Promise.race -----------------
//jab dono promises ki race ho tw jo phle resolve hogi wo print hogi
//for example image use karni hy tw 5 images men se jo phle load ho wo print hojae
// let p3 = Promise.race([prom1,prom2])
// p3.then((result)=>{
//     console.log(result);
    
// }).catch(error=>{
//     console.log(error)
// })

//--------------------Promise.any----------------------
//jis promise ki value sab se phle resolve hwi us ko return lkarde ga agr koi bhi value pronmise ki resolve na hwi tw aggregrate error de dega
// let p3 = Promise.any([prom1,prom2])
// p3.then((result)=>{
//     console.log(result);    
// }).catch(error=>{
//     console.log(error)
// })


//-----------------Promise.resolve---------------
//Makes a resolved promise with the given value 
// let p3 = Promise.resolve([prom1,prom2])
// p3.then((result)=>{
//     console.log(result)
// }).catch(error=>{
//     console.log(error)

// })

//-----------------Promise.reject---------------
//Makes a rejected promise with the given value 
// let p3 = Promise.reject([prom1,prom2])
// p3.then((result)=>{
//     console.log(result)
// }).catch(error=>{
//     console.log(error)

// })

