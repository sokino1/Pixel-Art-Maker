// Select color input
let colorInput = document.getElementById("colorPicker");

// Select size input
let pixelCanvas = document.getElementById("pixelCanvas");
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");


// Make the grid
let sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid()
});


// When size is submitted by the user, call makeGrid()
function makeGrid() {
  let pixel = document.createElement('table')
    const height = inputHeight.value;
    const width = inputWidth.value;
    for (let a = 0; a < width; a++) {
        const row = pixel.insertRow();
        for (let k = 0; k < height; k++) {
            const cell = row.insertCell();
            cell.addEventListener("click",event=>{
                event.preventDefault();
                event.target.style.backgroundColor = colorInput.value
            })
        }
    }
    let spawn = pixelCanvas.childNodes? pixelCanvas.childNodes:[]
    if(spawn && spawn.length===1){
        pixelCanvas.replaceChild(pixel,spawn[0])
    }else{
        pixelCanvas.append(pixel)
    }
}