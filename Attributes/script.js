
//yeah code fissrt wali id ki class dedega jo us men lagi hogi 
//----------get Attribute--------
let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a)


//--------has attribute----------
//this return true or false
console.log(first.hasAttribute("class"))
console.log(first)

//------setattribute--------------
first.setAttribute("hidden", "true")
//---------Remove Attribute------
first.removeAttribute("class")


//--dataset se sare data- wale attribute aajaty hen
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)