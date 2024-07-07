document.querySelector(".box") //select the first calss name="box"
// can also write as document.getElementsByClassName("box")


//-------------------Inner Html And Outer Html Method------
document.querySelector(".box").innerHTML
// output : 'This'

document.querySelector(".container").innerHTML
/* output:
'\n        <div class="box">This</div>\n      
  <div class="box">This</div>\n        
  <div class="box">This</div>\n       
   <div class="box">This</div>\n       
    <div class="box">This</div>\n      
  <div class="box">This</div>\n    '
  */

  document.querySelector(".container").innerText
  // 'This\nThis\nThis\nThis\nThis\nThis'

//Outer Html se inner htmol us class ki or us ki wo class ki outer html dono miil jati hen
document.querySelector(".container").outerHTML


//---------------------TagName and Node Name ------------
//The difference between tagname and node name is that tag name is only applicable for element but node name is applicable for any type of node (text node , comment node )



// Finding tag name
document.querySelector(".container").tagName
// output: 'Div'

//Finding node nmae
document.querySelector(".container").nodeName
document.querySelector(".container").childNodes[0].nodeName

//-----------------Text Content Methods ------------------
document.querySelector(".container").textContent


/*output: '\n        This\n        This\n        This\n        This\n        This\n        This\n    '*/

//----------------------------hidden Method --------
//we can write like this for hidden our element 
//<div hidden  >I am hidden box </div>
// we can check hidden through hidden method 
document.querySelector(".container").hidden
//output: false

//checking that element which i keep hidden
document.body.firstElementChild.hidden
//output : true

//This is container one chilred which i keep unhidden
document.body.children[1].hidden
//output : false
//i can hide this elemment by using the code below
document.body.children[1].hidden = true
document.querySelector(".container").hidden= true


//-----------------Changing Inner Html -----------
document.querySelector(".ch").innerHtml = "Hey I am Warda"
// output : the text on web page will be change to "Hey i am warda"

//-----------------Attribute Method ------------------


document.querySelector(".st").hasAttribute("style")
//output: true 

document.querySelector(".st").getAttribute("style")
//output: 'color:blue; display: inline;'

document.querySelector(".st").setAttribute("style","display : flex;")
//output: undefined
document.querySelector(".st").getAttribute("style")
//output:'display : flex;'

document.querySelector(".st").removeAttribute("style")
//output: undefined

//---------------Change any of the website of the world by using following line of code-------------
document.designMode = "on "

//----------checking who created data set ----------
document.querySelector(".ch").dataset
//output:DOMStringMap {createdby: 'warda', conceptby: 'owais'}