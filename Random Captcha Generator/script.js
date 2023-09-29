const display = document.getElementById("generated-captcha")
const check = document.getElementById("entered-captcha")
const checkBtn = document.getElementById("check")
const generate = document.getElementById("gen")
const wrongPara = document.getElementById("wrongCaptcha")
const correctPara = document.getElementById("correctCaptcha")

generate.addEventListener("click" , generateRandomCaptcha)

let str = "";
function generateRandomCaptcha() {
    correctPara.style.display = "none"
    wrongPara.style.display = "none"
    check.value = ""
    let numbers = "1234567890"
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let genpassword = numbers+lower+upper

    str = "";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * genpassword.length);
        str += genpassword.charAt(randomIndex);
    }

    display.value = str
    display.style.textDecoration = "line-through" 
}

checkBtn.addEventListener("click" , () => {
    if (check.value === str) { 
        correctPara.style.display = "block";
    } else {
        wrongPara.style.display = "block";
    }
})
