const copyIcon = document.querySelector(".copy-icon");
const copyText = document.querySelector(".copied-txt");
const generatedPassword = document.querySelector(".generated-password");
generatedPassword.style.color = "rgba(230, 229, 234, 0.247)";

copyIcon.addEventListener('click', () => {
    if(generatedPassword.style.color !== "rgba(230, 229, 234, 0.247)"){
        copyText.style.display = "block";
    }
})