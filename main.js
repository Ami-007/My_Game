
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
const startButton = document.querySelector(".start");

// console.log(elementIcons);

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
        } else {
            alert("Please select an input");
        };
    }
};
};

for (let i = 0; i < elementIcons.length; i++) {
    const icon = elementIcons[i];
    icon.addEventListener("click", () => {
        icon.classList.toggle("clicked");
})
};



// fireButton.classList.toggle("clicked");
//     windButton.classList.toggle("clicked");
//     waveButton.classList.toggle("clicked");
//     earthButton.classList.toggle("clicked");


for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    resetButton.addEventListener("click", () => {
        tile.innerHTML = "";
    });
};


for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        tile.addEventListener("click", () => {
            tile.classList.toggle("active") && getIcon();
        });
};





// startButton.addEventListener("click", () => {
//         fireButton.classList.add("clicked");
//         windButton.classList.add("clicked");
//         waveButton.classList.add("clicked");
//         earthButton.classList.add("clicked");
// });


// for (let i = 0; i < tiles.length; i++) {
//     const tile = tiles[i];
//     tile.addEventListener("click", () => {
//         tile.classList.toggle("active")

//     });
        // if (tile.classList.contains("active")) {

        //     if (fireButton.classList.contains("clicked")) {
        //         tile.appendChild(fireIcon);
        //     } else if (windButton.classList.contains("clicked")) {
        //         tile.appendChild(windIcon);
        //     } else if (waveButton.classList.contains("clicked")) {
        //         tile.appendChild(waveIcon);
        //     } else if (earthButton.classList.contains("clicked")) {
        //         tile.appendChild(earthIcon);
        //     } else {
        //         alert("Please select an input");
        //     };
//         }
//     };




// for (let i = 0; i < tiles.length; i++) {
//     const tile = tiles[i];
//     tile.addEventListener("click", () => {
//     if (fireIcon.classList.contains("fire")) {
//     tile.appendChild(fireIcon); 
// };
// });
// };


// When the erase button is clicked, it removes the html from the selected tile

// when player figures out a new icon placement-
// they select the square and then the icon to go into that square

// there will be buttons to erase an answer and a button to check the answers
// incorrect answers will be highlighted red until a new input.

// Upon any new input red squares change to white colour

// can add extra challenges in new HTML pages

