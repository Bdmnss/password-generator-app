const copyIcon = document.querySelector(".copy-icon");
const copyText = document.querySelector(".copied-txt");
const generatedPassword = document.querySelector(".generated-password");
generatedPassword.style.color = "rgba(230, 229, 234, 0.247)";
const slider = document.querySelector(".slider");
const output = document.querySelector(".character-length");
output.innerHTML = slider.value;
const checkboxArr = [...document.getElementsByClassName("checkbox")];
const checkedCheckboxArr = [];
const strong1 = document.getElementById("strong1");
const strong2 = document.getElementById("strong2");
const strong3 = document.getElementById("strong3");
const strong4 = document.getElementById("strong4");
const strengthSizeText = document.querySelector(".strength-size-txt");
const button = document.getElementById("btn");

copyIcon.addEventListener('click', () => {
    if(generatedPassword.style.color !== "rgba(230, 229, 234, 0.247)"){
        copyText.style.display = "block";
    }
})

slider.oninput = function() {
  output.innerHTML = this.value;
}

checkboxArr.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        if(checkbox.checked == true) {
            checkedCheckboxArr.push(checkbox)
        }
        if(checkbox.checked == false) {
            checkedCheckboxArr.splice(checkbox, 1)
        }
    })
})

button.addEventListener("click", () => {
    if(checkedCheckboxArr.length == 0) {
        removeEveryFill();
    } else if(checkedCheckboxArr.length == 1) {
        tooWeak();
    } else if(checkedCheckboxArr.length == 2) {
        weak();
    } else if(checkedCheckboxArr.length == 3) {
        medium();
    } else if(checkedCheckboxArr.length == 4) {
        strong();
    }
})

function removeEveryFill() {
    strong1.style.backgroundColor = "#18171f";
    strong1.style.border = "solid 2px #e6e5ea";
    strong2.style.backgroundColor = "#18171f";
    strong2.style.border = "solid 2px #e6e5ea";
    strong3.style.backgroundColor = "#18171f";
    strong3.style.border = "solid 2px #e6e5ea";
    strong4.style.backgroundColor = "#18171f";
    strong4.style.border = "solid 2px #e6e5ea";
    strengthSizeText.textContent = "";
}

function tooWeak() {
    removeEveryFill();
    strong1.style.backgroundColor = "#f64a4a";
    strong1.style.border = "none";
    strengthSizeText.textContent = "TOO WEAK!";
}

function weak() {
    removeEveryFill();
    strong1.style.backgroundColor = "#fb7c58";
    strong1.style.border = "none";
    strong2.style.backgroundColor = "#fb7c58";
    strong2.style.border = "none";
    strengthSizeText.textContent = "WEAK";
}

function medium() {
    removeEveryFill();
    strong1.style.backgroundColor = "#f8cd65";
    strong1.style.border = "none";
    strong2.style.backgroundColor = "#f8cd65";
    strong2.style.border = "none";
    strong3.style.backgroundColor = "#f8cd65";
    strong3.style.border = "none";
    strengthSizeText.textContent = "MEDIUM";
}

function strong() {
    removeEveryFill();
    strong1.style.backgroundColor = "#a4ffaf";
    strong1.style.border = "none";
    strong2.style.backgroundColor = "#a4ffaf";
    strong2.style.border = "none";
    strong3.style.backgroundColor = "#a4ffaf";
    strong3.style.border = "none";
    strong4.style.backgroundColor = "#a4ffaf";
    strong4.style.border = "none";
    strengthSizeText.textContent = "STRONG";
}