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

            cell.addEventListener("Click", () => this.makeMove(i,cell));

            //adding the cells to the board
            boardElement.appendChild(cell);
        }
    }

    private makeMove (index: number, cell:HTMLDivElement):void{
        if(this.isGameOver || this.board[index] !== ""){
            return;
        }
        this.board[index]= this.currentPlayer;

        cell.textContent = this.currentPlayer;

        if(this.checkWinner()){
            alert(`${this.currentPlayer} wins!`);
            this.isGameOver = true;
            return;
        }
        if (this.currentPlayer === "X"){
            this.currentPlayer = "0";
        }else{
            this.currentPlayer = "X";
        }
    }

    private checkWinner(): boolean{
        return false;
    }
}