// await used inside async function

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }


async function getData() {
    //data lane ki promise 
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // this line of code return promise
    // if we want to print data in text form we do the following
    //neechy wali line of code data ko lane ki promise
    let data1 = await x.text()
    //    console.log(data1)
    return data1

    //agar ek dafa data ko read kar lia hy tw dobara se usi api k dta ko wo read nahi hoga dosri api use karni hogi
    //    let data = await x.json()
    //    console.log(data)
}

async function main() {
    console.log("Loading modules")
    console.log("Do something else ")
    console.log("loading modules")
    let data =  getData()
    console.log(data1)
    console.log("Do something else")
    console.log("load data")




}
main()


// let data = getData()
// data.then((v)=>{
//     console.log(data)
// console.log("Process Data")
// })
