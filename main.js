
// select the icons and tiles to be used
const elementIcons = document.querySelectorAll(".icons__button");
const tiles = document.querySelectorAll(".input");
const fireIcon = document.querySelector(".fire");
const windIcon = document.querySelector(".wind");
const waveIcon = document.querySelector(".wave");
const earthIcon = document.querySelector(".earth");
const fireButton = document.querySelector("#fire-btn");
const windButton = document.querySelector("#wind-btn");
const waveButton = document.querySelector("#wave-btn");
const earthButton = document.querySelector("#earth-btn");
const checkButton = document.querySelector(".check");
const resetButton = document.querySelector(".reset");


// GET CORRECT ICON
// function to run an if else statement to select the correct icon when clicked

function getIcon() {
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        if (tile.classList.contains("active")) {
            if (fireButton.classList.contains("clicked")) {
                tile.innerHTML = `${`<i class="fab fa-gripfire fire"></i>`}`;
            } else if (windButton.classList.contains("clicked")) {
                tile.innerHTML = `${`<i class="fas fa-wind wind"></i>`}`;
            } else if (waveButton.classList.contains("clicked")) {
                tile.innerHTML = `${`<i class="fas fa-water wave"></i>`}`;
            } else if (earthButton.classList.contains("clicked")) {
                tile.innerHTML = `${`<i class="fas fa-mountain earth"></i>`}`;
            };
        }
    };
};


// NESTED LOOP TO ENSURE ONLY ONE ICON SELECTED AT A TIME
// for loop to obtain individual icons from the node list and then inner for loop to remove clicked
// class from previous clicked icons before toggling clicked class. Currently does not toggle.


for (let i = 0; i < elementIcons.length; i++) {
    const icon = elementIcons[i];
    icon.addEventListener("click", () => {

        for (let i = 0; i < elementIcons.length; i++) {
            const icon = elementIcons[i];
            icon.classList.remove("clicked")
        };
        icon.classList.toggle("clicked");
    });
};


// RESET BUTTON
// for loop to get tile from tiles nodelist to be able to target inner HTML of tiles.
// Applying eventlistener to the reset button so it can clear inner HTML of tiles.


for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    resetButton.addEventListener("click", () => {
        tile.innerHTML = "";
    });
};


// NESTED LOOP TO ENSURE ONLY ONE TILE CAN BE SELECTED AT A TIME
// for loop to get individual tile from tiles node list in order to apply event listener
// inner for loop to remove active class on click and then move on to outer loop to add
// active class and run getIcon function

for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    tile.addEventListener("click", () => {

        for (let i = 0; i < tiles.length; i++) {
            const tile = tiles[i];
            tile.classList.remove("active")
        };
        tile.classList.toggle("active") && getIcon();
    });
};

// When the erase button is clicked, it removes the html from the selected tile

// incorrect answers will be highlighted red until a new input.

// Upon any new input red squares change to white colour

// can add extra challenges in new HTML pages

