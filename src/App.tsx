import { useEffect, useState } from "react"
import BoardComp from "./components/BoardComp" 
import { Board } from "./ts/board"

function App() {
   const [board, setBoard] = useState(new Board())

   useEffect(() => restart, [])
   
    function restart() {
      const newBoard = new Board()
      newBoard.newAddCells()
      setBoard(newBoard)
    }


  return (
    <div id="app">
      <BoardComp
        board={board}
        setBoard={setBoard}
      />
    </div>
  )
}

export default App
