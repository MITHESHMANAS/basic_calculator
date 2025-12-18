
const displayy = document.getElementById("display");

function setoperator(input) {
    displayy.textContent += input;   // append to display
}

function cal() {
    const expr = displayy.textContent;
    try {
        displayy.textContent = eval(expr);   // calculate
    } catch {
        displayy.textContent = "Error";
    }
}

function clearDisplay() {
    displayy.textContent = "";
}
