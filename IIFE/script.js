let a = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(456)

    }, 3000);
})
}


(async () => {
    let b = await a()
    console.log(c)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)

}
)()
