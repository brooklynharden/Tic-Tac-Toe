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

    private createBoard():void{
        const boardElement = document.getElementById("board") as HTMLDivElement;

        //CLEARS any existing content in the board
        boardElement.innerHTML = "";

        for(let i=0; i< this.board.length;i++){

            //creating a new box (div) for each cell
            const cell = document.createElement("div");

            //giving it a class name to edit later
            cell.classList.add("cell");

            //stores the number of cell so we know its position
            cell.dataset.index = i.toString();

            //adding the cells to the board
            boardElement.appendChild(cell);
        }
    }
}