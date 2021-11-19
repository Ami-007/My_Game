
// select the icons and tiles to be used
const elementIcons = document.querySelectorAll(".icons_button");
const tiles = document.querySelectorAll(".input");
const fireIcon = document.getElementById("#fire-icon");
const windIcon = document.getElementById("wind-icon");
const waveIcon = document.getElementById("wave-icon");
const earthIcon = document.getElementById("earth-icon");
const eraseButton = document.querySelector(".erase");
const checkButton = document.querySelector(".check");
const clearButton = document.querySelector(".clear");


for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    clearButton.addEventListener("click", () => {
        tile.innerHTML = "";
        console.log("click");
    });
};


// when player figures out a new icon placement-
// they select the square and then the icon to go into that square

// there will be buttons to erase an answer and a button to check the answers
// incorrect answers will be highlighted red until a new input.

// Upon any input squares change to white colour

// can add extra challanges in new HTML pages


