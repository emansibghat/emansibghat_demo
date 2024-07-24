let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
        } else if (e.target.innerHTML === "C") {
            string = "";
        } else {
            string += e.target.innerHTML;
        }
        document.querySelector("input").value = string;
    });
});