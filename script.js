
const container = document.querySelector(".container");
let squaresPerSide;

function createGrid(grid, squaresPerSide) {
    for (let i = 0; i < grid; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    width = 650 / squaresPerSide;
    squareDiv.style.width = width + "px";
    container.appendChild(squareDiv);
}
}

createGrid(256, 16);


function updateGrid(squaresPerSide) {
    const divs = document.querySelectorAll(".square");
    divs.forEach(div => div.remove());
    squaresPerSide = parseFloat(prompt("Enter a number for squares per side up to 100"));

    if (squaresPerSide > 100) {
        alert("Error! Input a number from 1 to 100");
    } else {
        let grid = squaresPerSide * squaresPerSide;
        createGrid(grid, squaresPerSide);
    }
}


const btnChange = document.querySelector(".btn-change");
btnChange.addEventListener("click", updateGrid);


const divs = document.querySelectorAll(".square");
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.classList.add("hover");
});
}) 

