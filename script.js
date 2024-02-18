let color = 'black';

function addPaintListeners(color){
    blocks = document.querySelectorAll(".block");

    blocks.forEach(block => {
        
        block.addEventListener('mouseover',() => {
            paintBlock(block, color);
        });
    });
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

board = document.querySelector(".board");
resizeBoard(board, 10);

resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener("click", () => {
    
    ammountBlocks = prompt("select size (max 100)");
    // first we clear the div
    resizeBoard(board,ammountBlocks);
});

addPaintListeners(color);

