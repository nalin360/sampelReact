import { useState } from "react";
import Board from "./game/Board";

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function handleRandomizeplayer(currentMove) {
        const max = 9;
        if (currentMove === 0) {
            console.log(Math.floor(Math.random() * max));
            return ( Math.floor(Math.random() * max)) %  2 === 0
        }

        return currentMove % 2 === 0;
    }
    console.log(currentMove);
    const xIsNext =  handleRandomizeplayer(currentMove)


    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        console.log(nextMove);
        if (nextMove === 0) {
            setCurrentMove(0)
        }
        setCurrentMove(nextMove);
    }



    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button className="bg-purple-500 rounded-sm p-1 m-1" onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    

    return (
        <div className="flex flex-row">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="ml-[20px] text-white ">
            {/* <button onClick={handleRandomizeplayer}>Randomize</button> */}
                <ol>{moves}</ol>
            </div>
        </div>
    );
}