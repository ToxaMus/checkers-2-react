import { Colors } from "./colors"
import Figure from "./figure"

class Cell {
    readonly x: number
    readonly y: number
    figure: Figure | null
    color: Colors    

    constructor(x: number, y: number, figure: Figure | null, color: Colors) {
        this.figure = figure
        this.y = y    
        this.x = x
        this.color = color
    }
}

export default Cell