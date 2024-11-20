let btn = document.querySelectorAll(".btn button");
let input = document.getElementById("display");
let print = document.getElementById("display");
let expression = "";

btn.forEach(button => {
    button.addEventListener("click", evt => {
        const value = evt.target.innerText;

        if (value === "ON") {
            print.value = "0";
            expression = "";
        } 
        else if (value === "OFF") {
            print.value = "";
            expression = "";
        } 
        else if (value === "CA") {
            print.value = "";
            expression = "";
        } 
        else if (value === "C") {
            expression = expression.slice(0, -1);
            print.value = expression;
        } 
        else if (value === "=") {
            try {
                print.value = eval(expression);
                expression = print.value;
            } catch (error) {
                print.value = "Error";
                expression = "";
            }
        } 
        else {
            expression += value;
            print.value = expression;
        }
    });
});
