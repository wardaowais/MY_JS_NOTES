let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("click",()=>{
//     // alert("I was clicked , Yayy!")
//     document.querySelector(".box").innerHTML = "<b> Yayy you were clicked . Enjoy your clicked !</b>"
// })


button.addEventListener("dblclick",()=>{
    // alert("I was clicked , Yayy!")
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked . Enjoy your clicked !</b>"
})

button.addEventListener("contextmenu",()=>{
     alert("Font hack us by right click please")
   
})
document.addEventListener("keydown",(e)=>{
   console.log(e.key)
  
})