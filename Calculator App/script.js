let btn = document.querySelectorAll("button")
const input = document.getElementById("display")
let arr = Array.from(btn)
let str = ""

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "AC") {
            str = "";
            input.value = str;
        }
        else if (e.target.innerHTML == "DEL") {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }
        else if (e.target.innerHTML == "=") {
            // Check if an operator is at the beginning or end of the string
            if (isOperator(str[0]) || isOperator(str[str.length - 1])) {
                // alert("Operators cannot be at the beginning or end.");
                input.value = "Error"
            }
            else {
                // Check for consecutive operators and remove them
                let cleanedStr = str.replace(/([+*\/-])\1+/g, '$1');
                str = cleanedStr;
                input.value = eval(str);
            }
        }
        else if (isOperator(e.target.innerHTML)) {
            // Check if the last character is an operator
            if (isOperator(str[str.length - 1])) {
                // alert("Two operators cannot come side by side.");
                input.value = "ERROR"
            }
            else {
                str += e.target.innerHTML;
                input.value = str;
            }
        }
        else {
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})
