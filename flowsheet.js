const colors = ["#CEF6CE", "#F6CECE", "#44A1A0", "#FF9F1C"];

var color = undefined;

// Selection
var genboxes = document.getElementsByClassName('genbox');

for(let i = 0; i < genboxes.length; i++) {
    let box = genboxes[i];
    box.addEventListener("click", function() {

        if(color != undefined) {
            box.style.backgroundColor = color;
        }
    });
}

// Inject DOM elements
injectDom();

function injectDom() {
    let container = document.createElement("DIV");
    container.id = "color_my_flowsheet";

    let noColor = createColorButton(undefined);
    container.appendChild(noColor);

    for(let i = 0; i < colors.length; i++) {
        let newColor = colors[i];
        let btn = createColorButton(newColor);
        container.appendChild(btn);
    }

    document.body.appendChild(container);
}

function createColorButton(newColor) {
    let btn = document.createElement("button");
    btn.classList.add("flowsheet_color_btn");

    btn.style.backgroundColor = newColor;

    if(newColor == undefined) {
        btn.innerText = "X";
    }

    btn.addEventListener("click", function() {
        color = newColor;
    });

    return btn;
}

// Let the console know the extension is improted
console.log("Color my flowsheet");