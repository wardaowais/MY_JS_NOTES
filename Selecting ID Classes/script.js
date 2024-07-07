// console.log("warda")

//----class selector 
// let wardam = document.getElementsByClassName("box")
// console.log(wardam)

// wardam[2].style.backgroundColor = "red"

//------Id selector 
// document.getElementById("red").style.backgroundColor="red"

//query selector ek element ko return karta hy jab k query selector all node list ko return karta hy 
// document.querySelector(".box").style.backgroundColor="red"


// document.querySelectorAll(".box").forEach(element => {
//     element.style.backgroundColor="red"
// });


//document.querySelectorAll(".box") it return the html collection like array of class box and return node list 


document.getElementsByTagName("div").forEach=(e=>{e.style.backgroundColor ="red"
})


