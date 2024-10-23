import Board from "../Board";
import { useState } from "react";

export default function Game() {

    const [isXNext, setIsXNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setIsXNext(!isXNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}