const textarea = document.querySelector(".text-area")
const word_counter = document.querySelector(".word-number")
const char_counter = document.querySelector(".char-number")
const insta_counter = document.getElementById("insta-number")
const twitter_counter = document.querySelector(".twitter-number")

textarea.addEventListener("input", (e) => {
    charCounter(e);
    wordCounter(e);
    twitterCounter(e);
    instaCounter(e);
});

let space_length_word = 0
function wordCounter(e) {
    let word = e.target.value;
    word = word.trim()
    word = word.split(" ")
    if (word === "") {
        space_length_word = 0
    }else if (word.indexOf(" ")===-1){
        space_length_word = 1
    }
    else{
        const str = word.split(/\s+/)
        space_length_word= str.length
    }
    word_counter.innerText = space_length_word
}

function charCounter(e) {
    char_counter.innerText = e.target.value.length
}

let insta_limit = 160;
let twitter_limit = 280;

function colorChange(word , count) {
    if (word==="twitter") {
        if (count > 280) {
            twitter_counter.classList.add("change-color")
        } else {
            twitter_counter.classList.remove("change-color")
        }
    } else {
        if (count > 160) {
            insta_counter.classList.add("change-color")
        } else {
            insta_counter.classList.remove("change-color")
        }
    }
}

function instaCounter(e) {
    insta_counter.innerText = insta_limit - e.target.value.length
    colorChange("instagram" , e.target.value.length)
}

function twitterCounter(e) {
    twitter_counter.innerText = twitter_limit - e.target.value.length
    colorChange("twitter" , e.target.value.length)
}



