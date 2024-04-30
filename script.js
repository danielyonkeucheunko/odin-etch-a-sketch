const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseenter", function (event) {
        event.target.className = "filledSquare";
    });
});
