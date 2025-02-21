import { FC } from "react";
import Cell from "../ts/cell";

interface CellProps {
    cell: Cell
}

const CellComp: FC<CellProps> = ({cell}) => {
    return (
        <div className={["cell", cell.color].join(' ')}></div>
    )
}  

export default CellComp
