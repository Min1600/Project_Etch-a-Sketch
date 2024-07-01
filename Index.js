
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
    let height = 1;
    let width = 1;
    for (let i=0; i<n*n; i++){
       const newDiv= document.createElement("div")
       newDiv.setAttribute("class", "square");
        height = n*18
        width = n*18
       newDiv.addEventListener("mouseover", () => newDiv.style.borderColor="blue")
       newDiv.addEventListener("mouseout", () => newDiv.style.borderColor="black")
        container.appendChild(newDiv);

    }
    
    let heigthString =  height.toString().concat("px");
    let widthString =  width.toString().concat("px");
    container.style.height = heigthString;
    container.style.width = widthString;
    
}
function resetGrid(){
    document.querySelectorAll(".square").forEach(e => e.remove());
}
function makeGrid(){
    repeat(choice())
}



