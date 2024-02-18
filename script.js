function resizeBoard(board, ammountBlocks) {
    board.innerHTML = '';
    // then you get the size of the board and divide it into the blocks
    boardWidth = board.clientWidth;
    blockWidth = Math.floor(boardWidth / ammountBlocks);

    for (index = 0; index < ammountBlocks; index ++){
        const blocksJoined = new DocumentFragment();
        let row = document.createElement("div");
        row.classList = "row";
        for (index_2 = 0; index_2 < ammountBlocks; index_2 ++){
            let blockUnit = document.createElement("div");
            blockUnit.classList = "block";
            blockUnit.style.width = blockWidth + `px`;
            blockUnit.style.height = blockWidth + 'px';
            console.log(blockWidth);
            row.appendChild(blockUnit);
        }
        blocksJoined.appendChild(row);
        board.appendChild(blocksJoined);
    }
}

board = document.querySelector(".board");
resizeBoard(board, 10);

resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener("click", () => {
    
    ammountBlocks = prompt("select size (max 100)");
    // first we clear the div
    resizeBoard(board,ammountBlocks);
});