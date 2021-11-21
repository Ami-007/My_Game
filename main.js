
// select the icons and tiles to be used
const elementIcons = document.querySelectorAll(".icons_button");
const tiles = document.querySelectorAll(".input");
const fireIcon = document.querySelector(".fire");
const windIcon = document.querySelector(".wind");
const waveIcon = document.querySelector(".wave");
const earthIcon = document.querySelector(".earth");
// const eraseButton = document.querySelector(".erase");
const checkButton = document.querySelector(".check");
const resetButton = document.querySelector(".reset");
// const iconButtons = document.querySelectorAll(".icons__button")


console.log(elementIcons);

for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    resetButton.addEventListener("click", () => {
        tile.innerHTML = "";
    });
};


for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    tile.addEventListener("click", () => {
        tile.classList.toggle("active");
    if (fireIcon.classList.contains("fire")) {
        tile.appendChild(fireIcon); 
    }
});

};




// When the erase button is clicked, it removes the html from the selected tile

// when player figures out a new icon placement-
// they select the square and then the icon to go into that square

// there will be buttons to erase an answer and a button to check the answers
// incorrect answers will be highlighted red until a new input.

// Upon any new input red squares change to white colour

// can add extra challenges in new HTML pages


