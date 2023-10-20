let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let container = document.querySelector('.container');
let toggle = document.getElementById('toggle');
let footer = document.querySelector('.footer');


// Function to handle button clicks
function handleButtonClick(buttonText) {
    if (buttonText === "=") {
        try {
            const result = eval(value.innerHTML);
            if (isNaN(result) || !isFinite(result)) {
                value.innerHTML = "Error";
            } else {
                value.innerHTML = result;
            }
        } catch (error) {
            value.innerHTML = "Error";
        }
    } else if (buttonText === "Clear") {
        value.innerHTML = "";
    } else {
        value.innerHTML += buttonText;
    }
}

// Add click event listeners to buttons
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        handleButtonClick(this.innerHTML);
    });
}

// Add keydown event listener to the entire document
document.addEventListener('keydown', function (event) {
    // Map key codes to button texts
    const keyMappings = {
        'Enter': '=',
        'Escape': 'Clear',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '.': '.'
    };

    const keyText = keyMappings[event.key];
    console.log(event.key);

    if (keyText !== undefined) {
        handleButtonClick(keyText);
    }
});


// toggle.onclick = function()
// {
//     container.classList.toggle("dark");
//     footer.classList.toggle("bg-footer");
// }