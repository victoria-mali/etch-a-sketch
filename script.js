
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


/* div.addEventListener("mouseover", () => {
    div.classList.add("hover");
}); */