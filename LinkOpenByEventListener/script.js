google = document.getElementsByClassName("google")
google.addEventListener("click", function () {
    window.location = "https://www.google.com";
    win.focus()

})



const fetchContent = async  (url) => {

con = await fetch(url);
let a = await con.json()
return a;
}
I
setInterval(async function () {
    let url = "https://jsonplaceholder.typicode.com/todos/1" 
    console.log(await fetchContent(url))
}, 3000)