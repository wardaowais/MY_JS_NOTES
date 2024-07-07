// let promise = new Promise(function(resolve,reject){
//     alert("Heloo")
//     resolve(56)
// })

// console.log("hello")
// setTimeout(function()  {

//     console.log("Hello in 2 sec")
    
// }, 2000);
// console.log("My name is "+"hello 3")
// console.log(promise)


// //promise object have two properties state and result
// //promise is used to do things parallel like if we have 50 promises so all these promises execute parallel



//promise syntax resolve
let p = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("i am a promise and am fulfilled")
        resolve(true)
    
}, 4000);

})


//promise syntax rejected
let pr = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("i am a promise and am rejected")
        reject(new Error("i am an error"));
    
}, 4000);

})

//in this line of code both promise execute parallel
// console.log(p,pr)

// what happens when p runs

//in consuming code like then and catch we can pass 2 results value and error
p.then((value)=>{
    console.log(value)
})

pr.catch((error)=>{
    console.log("some error occur in pr")
})

//catch and then in one function through then

pr.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)


})