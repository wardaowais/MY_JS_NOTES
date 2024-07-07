
//Here we get html colletion not array so we cant directly use the for each loop on this 
let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container")
console.log(boxes)


//to convert html into the array we use the following line of code 
let array = Array.from(boxes)
// it becomes an array


//function for random color generator
function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2} , ${val3})`

}

array.forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

