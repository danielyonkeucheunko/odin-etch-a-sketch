const container = document.getElementById("container");

const canvasSize = 960;
let gridSize = 16;

function initializeGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.className = "square";
            container.appendChild(square);
        }
    }
}

function addEventListeners() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseenter", function (event) {
            event.target.style.backgroundColor = "black";
        });
    });
}

function changeGridSize() {
    container.replaceChildren();

    gridSize = parseInt(prompt("Enter a valid grid size (1-100)"));
    while (gridSize == null || gridSize < 1 || gridSize > 100) {
        gridSize = parseInt(prompt("Enter a valid grid size (1-100)"));
    }

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.className = "square";
            container.appendChild(square);
        }
    }

    document.documentElement.style.setProperty(
        "--size",
        String(canvasSize / gridSize) + "px"
    );

    addEventListeners();
}

initializeGrid();
addEventListeners();

const button = document.querySelector("button");
button.addEventListener("click", changeGridSize);
