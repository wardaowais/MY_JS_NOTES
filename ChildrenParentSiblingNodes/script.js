console.log("Hello World")
// let cont = document.body.childNodes
// let cont = document.body.childNodes[0]

// document.body.childNodes
// NodeList(9) [text, div.container, text, script, text, comment, text, script, text]
// document.body.childNodes[1]

// let container = document.body.childNodes[1]

// container.firstElementChild

// container.firstElementChild.style.color = "red"

// container.lastElementChild.parentElement

document.body.firstElementChild
//child node se all child node including html elemnt , text node , comment node 
document.body.firstElementChild.childNodes
//children se sare html elemnt mil jae 
document.body.firstElementChild.children
//siblings men next elemnt sibling 
document.body.firstElementChild.children[1].nextElementSibling

//table methods
document.body.children[1].rows
document.body.children[1].thead
document.body.children[1].caption
document.body.children[1].tFont

//tr.cell
//tbody.rows
