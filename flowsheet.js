const green = "#CEF6CE";
const red = "#F6CECE";

var customColors = [];
var color = green;

// Selection
var genboxes = document.getElementsByClassName('genbox');

for(let i = 0; i < genboxes.length; i++) {
    let box = genboxes[i];
    box.addEventListener("click", function() {
        box.style.backgroundColor = color;
    });
}

// Let the console know the extension is improted
console.log("Color my flowsheet");