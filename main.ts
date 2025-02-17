class TTT {
    private board:string[];
    private currentPlayer: string;
    private isGameOver: boolean;

    constructor(){
        this.board = new Array(9);
        for(let i=0; i<9; i++){
            this.board[i] = "";
        }

        this.currentPlayer= "X";
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

    private createBoard(): void {
        console.log("board is called working");
        const boardElement = document.getElementById("board") as HTMLDivElement;
    
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
    

    private makeMove (index: number, cell:HTMLDivElement):void{
        if(this.isGameOver || this.board[index] !== ""){
            return;
        }
        this.board[index]= this.currentPlayer;

        cell.textContent = this.currentPlayer;

        if(this.checkWinner()){
            document.getElementById("status")!.textContent = (`${this.currentPlayer} wins!`);
            this.isGameOver = true;
            return;
        }

        if(!this.board.includes("")){
            document.getElementById("status")!.textContent = "It's a tie!";
            this.isGameOver = true;
        }
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        document.getElementById("status")!.textContent = `Player ${this.currentPlayer}'s turn`;
        }

    private checkWinner(): boolean{
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,7], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        
        if(
            /*top*/ (this.board[0] !== "" && this.board[0] === this.board[1] && this.board[1] === this.board[2])
            ||
            /*middle*/ (this.board[3] !== "" && this.board[3] === this.board[4] && this.board[4]=== this.board[5])
            ||
            /*bottom*/ (this.board[6] !== "" && this.board[6] === this.board[7] && this.board[7] === this.board[8])
            ||
            /*left column*/ (this.board[0] !== "" && this.board[0] === this.board[3] && this.board[3] === this.board[7])
            ||
            /*middle column*/ (this.board[1] !== "" && this.board[1] === this.board[4] && this.board[4] === this.board[7])
            ||
            /*right column*/ (this.board[2] !== "" && this.board[2] === this.board[5] && this.board[5] === this.board[8])
            ||
            /*diagonal \ */ (this.board[0] !== "" && this.board[0] === this.board[4] && this.board[4] === this.board[8])
            ||
            /*diagonal / */ (this.board[2] !== "" && this.board[2] === this.board[4] && this.board[4] === this.board[6]) 
        ){
        return true;
    }
    return false;
}
}
document.addEventListener("DOMContentLoaded", () => {new TTT();

});