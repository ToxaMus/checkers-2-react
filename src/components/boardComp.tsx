import React, { FC } from "react";
import { Board } from "../ts/board";
import CellComp from "./CellComp"

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
}


const BoardComp: FC<BoardProps> = ({ board }) => {
   return (
        <div id="board">
            {board.cells.map((row, ind) =>
                <React.Fragment key={ind}>
                    {row.map(cell =>
                        < CellComp cell={cell} key={`${cell.x} ${cell.y}`} />
                    )}
                </React.Fragment>
            )}
        </div>

    )
}

export default BoardComp
