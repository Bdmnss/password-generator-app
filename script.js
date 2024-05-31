const copyIcon = document.querySelector(".copy-icon");
const copyText = document.querySelector(".copied-txt");
const generatedPassword = document.querySelector(".generated-password");
generatedPassword.style.color = "rgba(230, 229, 234, 0.247)";
const slider = document.querySelector(".slider");
const output = document.querySelector(".character-length");
output.innerHTML = slider.value;
const checkboxArr = [...document.getElementsByClassName("checkbox")];
const checkedCheckboxArr = [];


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