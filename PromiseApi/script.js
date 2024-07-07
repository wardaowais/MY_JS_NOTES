let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 1")
        
    }, 1000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("value 2")
        reject(new Error)
        
        
    }, 2000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
        
    }, 3000);
})

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

// promise.all chalya or or ek bhi promise reject hwi tw error dekhny ko mile ga koi bhi prmise print nahi hogi
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

//or agar kisi bhi promise men error aa jae or phr bhi ham all promise ko chalana chahty hon tw we should ude the following code
// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

//3eno men se jo sab se phle hojae or agar iis men koi bhi reject hojati hy tw error aata hy 
// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

//or promise.race k against ham value chahty hen k error na aaye so we should use the folling block of code
let promise_all = Promise.any([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})

// p1.resolve(1)
// p2.reject(1)