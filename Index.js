
const container = document.querySelector(".container")


function repeat(n){
    let repeatSquare = ""
    for (let i=0; i<n; i++){
        repeatSquare += '<div class="square"></div>';
    }
    container.innerHTML = repeatSquare
}

repeat(10)

