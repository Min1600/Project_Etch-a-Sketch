
const container = document.querySelector(".container")


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
    let heigthString =  height.toString()
    let heigthFinal = heigthString.concat("px")
    let widthString =  width.toString()
    let widthFinal = widthString.concat("px")
    container.style.height = heigthFinal
    container.style.width = widthFinal 

}

repeat(10)

