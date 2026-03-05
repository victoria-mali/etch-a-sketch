
const container = document.querySelector(".container");


for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    width = 800 / 16;
    squareDiv.style.width = width + "px";
    container.appendChild(squareDiv);
};

const divs = document.querySelectorAll(".square");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.classList.add("hover");
});
}) 
let squaresPerSide;

function createGrid(grid, squaresPerSide) {
    for (let i = 0; i < grid; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    width = 800 / squaresPerSide;
    squareDiv.style.width = width + "px";
    container.appendChild(squareDiv);
};
}


function updateGrid(squaresPerSide) {
    squaresPerSide = parseFloat(prompt("Enter a number for squares per side up to 100"));
    console.log(squaresPerSide);
    divs.forEach(div => div.remove());
    let grid = squaresPerSide * squaresPerSide;
    createGrid(grid, squaresPerSide);
}


const btnChange = document.querySelector(".btn-change");

btnChange.addEventListener("click", updateGrid);

