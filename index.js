document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll("button");

    let currInput = "";
    let operators = ["+", "-", "*", "/"];

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let value = this.innerText;
            switch (value) {
                case "C":
                    currInput = "";
                    display.innerText = "";
                    break;

                case "Back":
                    currInput = currInput.slice(0, -1);
                    display.innerText = currInput;
                    break;
                    
                case "=":
                    try {
                        currInput = eval(currInput).toString();
                        display.innerText = currInput;
                    } catch {
                        display.innerText = "Error";
                        currInput = "";
                    }
                    break;
                default:
                    if (
                        operators.includes(value) &&
                        (currInput === "" || operators.includes(currInput.slice(-1)))
                    ) {
                        return;
                    }
                    currInput += value;
                    display.innerText = currInput;
            }
        });
    }
});
