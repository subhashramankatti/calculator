document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector("input[type='text']");
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            let buttonText = e.target.innerText;
            
            if (buttonText === "=") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "AC") {
                display.value = "";
            } else if (buttonText === "DEL") {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += buttonText;
            }
        });
    });
});
