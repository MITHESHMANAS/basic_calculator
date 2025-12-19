
const displayy = document.getElementById("display");

function setoperator(input) {
    displayy.textContent += input;   
}

function cal() {
    const expr = displayy.textContent;
    try {
        displayy.textContent = eval(expr);   
    } catch {
        displayy.textContent = "Error";
    }
}

function clearDisplay() {
    displayy.textContent = "";
}
