"use strict";

let gameDiv = document.getElementById("game-container");

for (let i = 0; i < 16; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row")
    for (let i = 0; i < 16; i++) {
        let gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        gridRow.appendChild(gridCell);
    }
    
    gameDiv.appendChild(gridRow);
}
