let e = document.getElementsByTagName("div")
console.log(e)
//----matches 
e[2].matches["#red"]


//----closest
e[0].closest("#red")
//null
e[0].closest(".container")
e[0].closest("html")



//-----contains 
//returns true if element b is inside element a 
document.querySelector(".container").contains(e[2])
//true
document.querySelector(".container").contains(querySelector("body"))
//false
document.querySelector(".body").contains(document.querySelector(".container"))

