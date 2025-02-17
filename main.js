"use strict";
class TTT {
    constructor() {
        this.board = new Array(9);
        for (let i = 0; i < 9; i++) {
            this.board[i] = "";
        }
        this.currentPlayer = "X";
        this.isGameOver = false;
        this.createBoard();
    }
    // private createBoard():void{
    //     console.log("board is called working");
    //     const boardElement = document.getElementById("board") as HTMLDivElement;
    //     if(!boardElement){
    //         console.error("board not working");
    //         return;
    //     }
    //     //CLEARS any existing content in the board
    //     boardElement.innerHTML = "";
    //     for(let i=0; i< this.board.length;i++){
    //         //creating a new box (div) for each cell
    //         const cell = document.createElement("div");
    //         //giving it a class name to edit later
    //         cell.classList.add("cell");
    //         //stores the number of cell so we know its position
    //         cell.dataset.index = i.toString();
    //         cell.addEventListener("click", () => this.makeMove(i,cell));
    //         //adding the cells to the board
    //         boardElement.appendChild(cell);
    //         console.log(`there are ${i} created`);
    //     }
    //     console.log("the board is working");
    // }
    createBoard() {
        console.log("board is called working");
        const boardElement = document.getElementById("board");
        if (!boardElement) {
            console.error("board not found");
            return;
        }
        boardElement.innerHTML = ""; // Clears board
        for (let i = 0; i < this.board.length; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i.toString();
            cell.addEventListener("click", () => this.makeMove(i, cell));
            boardElement.appendChild(cell);
            console.log(`Cell ${i} created`, cell);
        }
    }
    makeMove(index, cell) {
        if (this.isGameOver || this.board[index] !== "") {
            return;
        }
        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        if (this.checkWinner()) {
            alert(`${this.currentPlayer} wins!`);
            this.isGameOver = true;
            return;
        }
        if (this.currentPlayer === "X") {
            this.currentPlayer = "0";
        }
        else {
            this.currentPlayer = "X";
        }
    }
    checkWinner() {
        return false;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    new TTT();
});
