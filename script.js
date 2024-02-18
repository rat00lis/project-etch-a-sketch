let SELECTED_COLOR = 'black';
let BOARD = document.querySelector(".board");
let AMMOUNT_BLOCKS = 10;

function addPaintListeners(){

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
    addPaintListeners();
}

function paintBlock(block, color){
    let colorOpacity = parseFloat(block.style.opacity) || 0;
    if(color == 'eraser'){
        colorOpacity = colorOpacity > 0 ? colorOpacity - 0.1 : 0;
        block.style.opacity = colorOpacity;
    }
    else{
        if (colorOpacity < 1) {
            colorOpacity += 0.1;
        }
    
        block.style.opacity = colorOpacity;
        block.style.backgroundColor = color;
    }
}

function resetBoard(){
    resizeBoard(BOARD, AMMOUNT_BLOCKS);
}

function changeColor(newColor = prompt('Select Color')){
    if (newColor == 'rainbow'){
        console.log('rainbow');
        selectedColorDiv = document.querySelector('.colorSelected');
        selectedColorDiv.textContent = ':3';
    }else{
        selectedColorDiv = document.querySelector('.colorSelected');
        selectedColorDiv.textContent = '';
    }
    SELECTED_COLOR = newColor;
    readjustColor(newColor);
}
function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
function toggleGrid(){
    let enableButton = document.querySelector('#toggleGrid');
    blocks.forEach(block => {
        block.classList.toggle('border');
    });
    enableButton.classList.toggle('gridEnabled');
    enableButton.textContent = enableButton.textContent == 'Enable Grid' ? 'Disable Grid' : 'Enable Grid';
}


function main(){
    resizeBoard(BOARD, AMMOUNT_BLOCKS);
    readjustColor(SELECTED_COLOR);
    addPaintListeners();
    toggleGrid();
}

