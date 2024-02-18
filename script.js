let color = 'black';
let board = document.querySelector(".board");
let ammountBlocks = 10;

function randomColor(){

}
function addPaintListeners(color){
    if (color == 'rainbow'){
        selectedColorDiv = document.querySelector('.colorSelected');
        selectedColorDiv.textContent = ':3';
    }else{
        selectedColorDiv = document.querySelector('.colorSelected');
        selectedColorDiv.textContent = '';
    }
    blocks = document.querySelectorAll(".block");

    blocks.forEach(block => {
        
        block.addEventListener('mouseover',() => {
            if(color!='rainbow'){
                paintBlock(block, color);
            }
            else{
                paintBlock(block, randomColor());
            }
        });
    });
    
}
function readjustColor(color){
    colorSelected = document.querySelector(".colorSelected");
    colorSelected.style.backgroundColor = color;
}
function resizeBoard(board, ammountBlocks) {
    ammountBlocks = ((ammountBlocks > 0) && (ammountBlocks <= 100)) ? ammountBlocks : 10;
    board.innerHTML = '';

    for (index = 0; index < ammountBlocks; index ++){
        const blocksJoined = new DocumentFragment();
        let row = document.createElement("div");
        row.classList = "row";
        for (index_2 = 0; index_2 < ammountBlocks; index_2 ++){
            let blockUnit = document.createElement("div");
            blockUnit.classList = "block";
            row.appendChild(blockUnit);
        }
        blocksJoined.appendChild(row);
        board.appendChild(blocksJoined);
    }
    addPaintListeners(color);
}

function paintBlock(block, color){
    block.style.backgroundColor = color;
}

function resize(){
    ammountBlocks = prompt("select size (max 100)");
        // first we clear the div
        resizeBoard(board,ammountBlocks);
}

function resetBoard(){
    resizeBoard(board, ammountBlocks)
}

function changeColor(newColor = prompt('Select Color')){
    color = newColor;
    readjustColor(newColor);
    addPaintListeners(color);
}
function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function main(){
    resizeBoard(board, ammountBlocks);
    readjustColor(color);
    addPaintListeners(color);
}


