

const container = document.querySelector(".container")
const buttonGrid = document.querySelector(".btn")

buttonGrid.addEventListener("click", makeGrid)

function choice(){

    let gridSize = prompt("Input desired grid size");
    if(gridSize <= 100){
        return gridSize
    }else{
        alert("Grid size cannot be larger than 100 x 100")
        return choice()
    }
}

function repeat(n){
    let repeatSquare = ""
    let height = 1;
    let width = 1;
    for (let i=0; i<n*n; i++){
        repeatSquare += '<div class="square"></div>';
        height = n*18
        width = n*18
    }
    
    container.innerHTML = repeatSquare;
    const square = document.querySelectorAll(".square")
    let heigthString =  height.toString().concat("px");
    let widthString =  width.toString().concat("px");
    container.style.height = heigthString;
    container.style.width = widthString;
    
    function randomColor(){
        return Math.floor(Math.random()*256)
    }
    function randomRGB(){
        return `rgb(${randomColor()},${randomColor()},${randomColor()})`
    }
    

    function changeColour(){
        const square = document.querySelectorAll(".square")
        for(let i = 0; i < square.length; i++){
            square[i].style.borderColor= randomRGB()
        }
        
    }
    function revertColour(){
        const square = document.querySelectorAll(".square")
        for(let i = 0; i < square.length; i++){
            square[i].style.borderColor= "black"
        }
    }
    
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener("mouseover", changeColour)
    }
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener("mouseout", revertColour)
    }
   
}
repeat(16)
function makeGrid(){
    repeat(choice())
}







