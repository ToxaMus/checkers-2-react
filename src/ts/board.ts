import Cell from "./cell";
import { Colors } from "./colors";

export  class Board {
    cells: Cell[][] = []
    
    public newAddCells() {

        for(let i = 0; i < 8; i++) {
            const row: Cell[] = []

            for(let j =0; j < 8; j++) {
                if ((i + j) %2 ) {
                    row.push(new Cell(i, j, null, Colors.BLACK))
                } else {
                    row.push(new Cell(i, j, null, Colors.WHITE))
                }
            }
            
            this.cells.push(row)
        }
    }
} 