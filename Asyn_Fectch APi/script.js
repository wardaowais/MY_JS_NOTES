// await used inside async function

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })
}

async function main() {
    console.log("Loading modules")
    console.log("Do something else ")
    console.log("loading modules")
    let data = await getData()
    console.log(data)
    console.log("Do something else")
    console.log("load data")




}
main()


// let data = getData()
// data.then((v)=>{
//     console.log(data)
// console.log("Process Data")
// })
