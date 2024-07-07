//we can make make asyn any function  and inside this function we can await the promise
//async kisi bhi function se phle lagya tw is ka matlb hy yeah promise return karraha hy 
//different async function execute paralell


async function warda() {

    let karachiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree")

        }, 2000);
    })


    let hydWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degree")

        }, 5000);
    })

    //  karachiWeather.then(alert);
    //  hydWeather.then(alert)


    //yaha par karachiWeatherc promise jo value return kare ga wo is varible men aajy ga
    console.log("fetching karachi Weather Please wait")
    let karachiW = await karachiWeather
    console.log("fetched karachi weather " + karachiW)

    console.log("fetching hyderabad Weather Please wait")
    let hydW = await hydWeather
    console.log("fetched hyd weather " + hydW)

    return [karachiW, hydW]


}

const cherry = async () => {
    console.log("Hey i am cherry and i am not waiting")
}

const main1 = async () => {


    let a =  await warda()
    let b = await cherry()
 
}

main1()