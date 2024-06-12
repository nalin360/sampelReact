import { useState } from "react";
import calculateWinner from "./CalculateWinner";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
    const [status, setStatus] = useState("current player: " + (xIsNext ? "X" : "O"))
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // console.log(squares);
        const nextSquare = squares.slice();
        
        if (xIsNext) {
            nextSquare[i] = "x"
        } else {
            nextSquare[i] = "0"
        }
        onPlay(nextSquare)
        const winner = calculateWinner(squares)
        console.log(winner);
        if (winner) {
            setStatus( "Winner: " + winner) 
        } else {
            setStatus("current player: " + (xIsNext ? "X" : "O")) 
        }
    }



    return (
        <>
            <div className="p-2 text-white">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )

}