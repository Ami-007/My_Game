// select the icons and tiles to be used
const elementIcons = document.querySelectorAll(".icons__button");
const tiles = document.querySelectorAll(".input");
const fireIcon = `${`<i class="fab fa-gripfire fire"></i>`}`;
const windIcon = `${`<i class="fas fa-wind wind"></i>`}`;
const waveIcon = `${`<i class="fas fa-water wave"></i>`}`;
const earthIcon = `${`<i class="fas fa-mountain earth"></i>`}`;
const fireButton = document.querySelector("#fire-btn");
const windButton = document.querySelector("#wind-btn");
const waveButton = document.querySelector("#wave-btn");
const earthButton = document.querySelector("#earth-btn");
const checkButton = document.querySelector(".check");
const resetButton = document.querySelector(".reset");

//  resetTiles function
// function contains for loop to loop through nodelist of tiles
// and select individual tiles. Then runs an if statement to check if resetHTML parameter
// if resetHTML parameter is met then innerHTML becomes blank string

const resetTiles = (resetHtml) => {
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];

        if (resetHtml) {
            tile.innerHTML = "";
        }

        tile.classList.remove("correct", "incorrect");
    };

};

// RESET BUTTON
// added event listener so that when reset button is clicked
// the resetTiles function runs.

resetButton.addEventListener("click", () => {
    resetTiles(true);
});

// winSolution function
// resetTiles function runs as false, so if statement parameter is not met. 
// variables are declared
// if else statement is run to toggle add classList to provide feedback on if tiles are correct

const winSolution = () => {

   resetTiles(false);

    tile2 = document.getElementById("tile2");
    tile4 = document.getElementById("tile4");
    tile5 = document.getElementById("tile5");
    tile7 = document.getElementById("tile7");
    tile9 = document.getElementById("tile9");
    tile10 = document.getElementById("tile10");
    tile11 = document.getElementById("tile11");
    tile13 = document.getElementById("tile13");
    tile14 = document.getElementById("tile14");
    tile16 = document.getElementById("tile16");


    {
        if (tile2.innerHTML === windIcon) {
            tile2.classList.add("correct");
        } else {
            tile2.classList.add("incorrect");
        };

        if (tile4.innerHTML === earthIcon) {
            tile4.classList.add("correct");
        } else {
            tile4.classList.add("incorrect");
        };

        if (tile5.innerHTML === waveIcon) {
            tile5.classList.add("correct");
        } else {
            tile5.classList.add("incorrect");
        };

        if (tile7.innerHTML === windIcon) {
            tile7.classList.add("correct");
        } else {
            tile7.classList.add("incorrect");
        };

        if (tile9.innerHTML === earthIcon) {
            tile9.classList.add("correct");
        } else {
            tile9.classList.add("incorrect");
        };

        if (tile10.innerHTML === waveIcon) {
            tile10.classList.add("correct");
        } else {
            tile10.classList.add("incorrect");
        };

        if (tile11.innerHTML === fireIcon) {
            tile11.classList.add("correct");
        } else {
            tile11.classList.add("incorrect");
        };

        if (tile13.innerHTML === windIcon) {
            tile13.classList.add("correct");
        } else {
            tile13.classList.add("incorrect");
        };

        if (tile14.innerHTML === fireIcon) {
            tile14.classList.add("correct");
        } else {
            tile14.classList.add("incorrect");
        };

        if (tile16.innerHTML === waveIcon) {
            tile16.classList.add("correct");
        } else {
            tile16.classList.add("incorrect");
        };
    };

};

// GET CORRECT ICON
// function to run an if else statement to select the correct icon when clicked

const getIcon = () => {
    for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        if (tile.classList.contains("active")) {
            if (fireButton.classList.contains("clicked")) {
                tile.innerHTML = fireIcon;
            } else if (windButton.classList.contains("clicked")) {
                tile.innerHTML = windIcon;
            } else if (waveButton.classList.contains("clicked")) {
                tile.innerHTML = waveIcon
            } else if (earthButton.classList.contains("clicked")) {
                tile.innerHTML = earthIcon;
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

// CHECK BUTTON
// event listener added to check button so when it is clicked it runs the winSolution function

checkButton.addEventListener("click", () => {
    winSolution();
    // if (tile.classList.contains("correct")) {
    //     alert("Congratulations! You solved it!")
    // }
});

// When the erase button is clicked, it removes the HTML from the selected tile

// incorrect answers will be highlighted red until a new input.

// Upon any new input red squares change to white colour

// can add extra challenges in new HTML pages