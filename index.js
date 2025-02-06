document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll("button");

    let Curr = "";
    let operators = ["+", "-", "*", "/"];

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "C") {
                // Clear the entire input
                Curr = "";
                display.innerText = "";
            } else if (value === "Back") {
                // Remove the last character from input
                Curr = Curr.slice(0, -1);
                display.innerText = Curr;
            } else if (value === "=") {
                try {
                    Curr = eval(Curr).toString();
                    display.innerText = Curr;
                } catch {
                    display.innerText = "Error";
                    Curr = "";
                }
            } else {
                if (
                    operators.includes(value) &&
                    (Curr === "" || operators.includes(Curr.slice(-1)))
                ) {
                    return;
                }

                Curr += value;
                display.innerText = Curr;
            }
        });
    });
});
