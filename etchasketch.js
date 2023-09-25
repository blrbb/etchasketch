"use strict";

let gameDiv = document.getElementById("game-container");
let numCellsPerEdge = 64;
resetGame();

function resetGame()
{
    document.getElementById("game-container").innerHTML = '';
    do {
        numCellsPerEdge = parseInt(prompt("How many squares per side? (Max 150)",numCellsPerEdge),10);
    }
    while (!Number.isInteger(numCellsPerEdge) || numCellsPerEdge > 150);
    for (let i = 0; i < numCellsPerEdge; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row")
        for (let i = 0; i < numCellsPerEdge; i++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridRow.appendChild(gridCell);
        }

        gameDiv.appendChild(gridRow);
    }
    let gridCells = Object.values(document.getElementsByClassName("grid-cell"));
    gridCells.forEach( e => e.addEventListener("mouseover", ev => changeCellColor(ev)));
}

function changeCellColor(ev)
{
        ev.target.style.backgroundColor="green";
}