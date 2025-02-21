import { FC } from "react"
import { Board } from "../models/board"
import CeilComp from "./ceilComp"

interface boardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComp: FC<boardProps> = () => {
    return (

        <div id="board"
        {board.ceils.map((row, ind) =>
        <React.Fragment key={ind}>
           {row.map(cell => 
                <CeilComp/>
           )}
           </React.Fragment>
           )}
        />
    )
}

export default BoardComp