
const container = document.querySelector(".container");


for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
};

const divs = document.querySelectorAll(".square");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.classList.add("hover");
});
}) 


function createGrid(grid) {
    for (let i = 0; i < grid; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
};
}

let squaresPerSide;

function updateGrid(squaresPerSide) {
    squaresPerSide = parseFloat(prompt("Enter a number for squares per side up to 100"));
    divs.forEach(div => div.remove());
    let grid = squaresPerSide * squaresPerSide;
    createGrid(grid);
}


const btnChange = document.querySelector(".btn-change");

btnChange.addEventListener("click", updateGrid);

