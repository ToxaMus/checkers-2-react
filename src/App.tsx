import { useEffect, useState } from "react"
import BoardComp from "./components/boardComp"  
import { Board } from "./models/board"

function App() {
  const [board, setBoard] = useState(new Board)

  useEffect(() => restart())

  function restart() {
    const newBoard = new Board()
    newBoard.initCeils()
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
