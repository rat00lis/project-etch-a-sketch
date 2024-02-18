let SELECTED_COLOR = 'black';
let BOARD = document.querySelector(".board");
let AMMOUNT_BLOCKS = 10;

function randomColor(){

}
function addPaintListeners(){
    if (SELECTED_COLOR == 'rainbow'){
        selectedColorDiv = document.querySelector('.colorSelected');
        selectedColorDiv.textContent = ':3';
    }else{
        selectedColorDiv = document.querySelector('.colorSelected');
        selectedColorDiv.textContent = '';
    }
    blocks = document.querySelectorAll(".block");

    blocks.forEach(block => {
        
        block.addEventListener('mouseover',() => {
            if(SELECTED_COLOR!='rainbow'){
                paintBlock(block, SELECTED_COLOR);
            }
            else{
                paintBlock(block, randomColor());
            }
        });
    });
    
}
function readjustColor(){
    colorSelected = document.querySelector(".colorSelected");
    colorSelected.style.backgroundColor = SELECTED_COLOR;
}
function resizeBoard(BOARD, AMMOUNT_BLOCKS) {
    AMMOUNT_BLOCKS = ((AMMOUNT_BLOCKS > 0) && (AMMOUNT_BLOCKS <= 100)) ? AMMOUNT_BLOCKS : 10;
    BOARD.innerHTML = '';

    for (index = 0; index < AMMOUNT_BLOCKS; index ++){
        const blocksJoined = new DocumentFragment();
        let row = document.createElement("div");
        row.classList = "row";
        for (index_2 = 0; index_2 < AMMOUNT_BLOCKS; index_2 ++){
            let blockUnit = document.createElement("div");
            blockUnit.classList = "block";
            row.appendChild(blockUnit);
        }
        blocksJoined.appendChild(row);
        BOARD.appendChild(blocksJoined);
    }
    addPaintListeners(SELECTED_COLOR);
}

function paintBlock(block, color){
    let colorOpacity = block.style.opacity? block.style.opacity : 0;
    let currentColor = block.getAttribute('data-color', color);
    //reset opacity if color changed
    if (color != currentColor){
        colorOpacity = 0;
        block.setAttribute('data-color', color);
    }
    block.style.backgroundColor = color;
    block.style.opacity = (parseFloat(colorOpacity) + 0.1).toString();
}

function resetBoard(){
    resizeBoard(BOARD, AMMOUNT_BLOCKS)
}

function changeColor(newColor = prompt('Select Color')){
    SELECTED_COLOR = newColor;
    readjustColor(newColor);
    addPaintListeners(SELECTED_COLOR);
}
function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}


function main(){
    resizeBoard(BOARD, AMMOUNT_BLOCKS);
    readjustColor(SELECTED_COLOR);
    addPaintListeners(SELECTED_COLOR);
}


