import React, { useEffect, useState } from "react";
import "./style.css";

const initializeSquare =
  JSON.parse(window.localStorage.getItem("squares") as string) || Array(9).fill(null);

function NewGame() {
  const [squares, setSquares] = useState(initializeSquare);

  useEffect(() => {
    window.localStorage.setItem("squares", JSON.stringify(squares));
  });

  const nextValue: string = calculateNextValue(squares);
  const winner: string = calculateWinner(squares);
  const status: string = calculateStatus(winner, squares, nextValue);

  function calculateStatus(winner: string, squares: any, nextValue: string) {
    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
      ? `Match Tied`
      : `Next Player: ${nextValue}`;
  }

  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return "";
  }

  function calculateNextValue(squares: string[]) {
    return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
  }

  function selectSquare(i: number) {
    if (winner || squares[i]) {
      return;
    }

    let squaresCopy = [...squares];
    squaresCopy[i] = nextValue;
    setSquares(squaresCopy);
  }

  function renderSquare(i: number) {
    return (
      <button className="box" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  function restart() {
    setSquares(Array(9).fill(null));
  }

  return (
    <>
      <div> {status} </div>
      <div className="game-board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      <button type="button" onClick={() => restart()}>
        Reset
      </button>
    </>
  );
}

export default NewGame;
