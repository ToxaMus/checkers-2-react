import { Board } from "./board"
import { Colors } from "./colors"
import { Figure } from "./Figure."

export class Ceil {
    readonly x: number
    readonly y: number
    readonly color: Colors
    figure: Figure | null
    board: Board
    avaible: boolean
    
    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x 
        this.y = y
        this.color = color
        this.figure = figure
        this.board = board
        this.avaible = false
    }
}