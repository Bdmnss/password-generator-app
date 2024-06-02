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

copyIcon.addEventListener("click", () => {
  /*copying generated password and displays text copied*/
  let copyedText = generatedPassword.innerHTML;
  if (generatedPassword.style.color !== "rgba(230, 229, 234, 0.247)") {
    copyText.style.display = "block";
    navigator.clipboard.writeText(copyedText)
  }
});

slider.oninput = function () {
  /*this listener gives number character length when slider moves*/
  output.innerHTML = this.value;
};

/*this function calculates length of array to decorate strength div*/
checkboxArr.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
      checkedCheckboxArr.push(checkbox);
    }
    if (checkbox.checked == false) {
      checkedCheckboxArr.splice(checkbox, 1);
    }
    console.log(checkedCheckboxArr);
  });
});

button.addEventListener("click", () => {
  if (checkedCheckboxArr.length == 0) {
    removeEveryFill();
  } else if (checkedCheckboxArr.length == 1) {
    tooWeak();
  } else if (checkedCheckboxArr.length == 2) {
    weak();
  } else if (checkedCheckboxArr.length == 3) {
    medium();
  } else if (checkedCheckboxArr.length == 4) {
    strong();
  }
  generatePassword();
});

/******************/
/*styling strength*/
/******************/

function removeEveryFill() {
  /*this function removes everything from strength div*/
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

/*********************/
/*generating password*/
/*********************/

const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");
let password = "";
let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowers = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()";

function generatePassword() {
  if (
    checkbox1.checked == true &&
    checkbox2.checked == true &&
    checkbox3.checked == true &&
    checkbox4.checked == true
  ) {
    allSelected();
  } else if (
    checkbox1.checked == true &&
    checkbox2.checked == true &&
    checkbox3.checked == true
  ) {
    upperLowerNumber();
  } else if (
    checkbox1.checked == true &&
    checkbox2.checked == true &&
    checkbox4.checked == true
  ) {
    upperLowerSymbols();
  } else if (
    checkbox1.checked == true &&
    checkbox3.checked == true &&
    checkbox4.checked == true
  ) {
    upperNumberSymbols();
  } else if (
    checkbox2.checked == true &&
    checkbox3.checked == true &&
    checkbox4.checked == true
  ) {
    lowerNumberSymbols();
  } else if (checkbox1.checked == true && checkbox2.checked == true) {
    upperLowers();
  } else if (checkbox1.checked == true && checkbox3.checked == true) {
    upperNumbers();
  } else if (checkbox1.checked == true && checkbox4.checked == true) {
    upperSymbols();
  } else if (checkbox2.checked == true && checkbox3.checked == true) {
    lowerNumbers();
  } else if (checkbox2.checked == true && checkbox4.checked == true) {
    lowerSymbols();
  } else if (checkbox3.checked == true && checkbox4.checked == true) {
    numberSymbols();
  } else if (checkbox1.checked == true) {
    uppersOnly();
  } else if (checkbox2.checked == true) {
    lowersOnly();
  } else if (checkbox3.checked == true) {
    numbersOnly();
  } else if (checkbox4.checked == true) {
    symbolsOnly();
  }

  changePasswordColor();
  generatedPassword.innerHTML = password;
}

function allSelected() {
  /* works when all checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = uppers + lowers + numbers + symbols;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function upperLowerNumber() {
  /* works when upper, lower and number checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = uppers + lowers + numbers;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function upperLowerSymbols() {
  /* works when upper, lower and symbol checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = uppers + lowers + symbols;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function upperNumberSymbols() {
  /* works when upper, number and symbol checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = uppers + numbers + symbols;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function lowerNumberSymbols() {
  /* works when upper, number and symbol checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = lowers + numbers + symbols;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function upperLowers() {
  /* works when upper and lower checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = uppers + lowers;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function upperNumbers() {
  /* works when upper and number checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = uppers + numbers;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function upperSymbols() {
  /* works when upper and symbol checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = uppers + symbols;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function lowerNumbers() {
  /* works when lower and number checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = lowers + numbers;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function lowerSymbols() {
  /* works when lower and symbol checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = lowers + symbols;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function numberSymbols() {
  /* works when number and symbol checkmarks are selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = numbers + symbols;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function uppersOnly() {
  /* works when upper checkmark is selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = uppers;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function lowersOnly() {
  /* works when lower checkmark is selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = lowers;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function numbersOnly() {
  /* works when number checkmark is selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = numbers;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function symbolsOnly() {
  /* works when symbol checkmark is selected*/
  let passwordLength = slider.value;
  password = "";
  let matched = symbols;
  for (let i = 1; i <= passwordLength; i++) {
    let char = Math.floor(Math.random() * matched.length + 1);

    password += matched.charAt(char);
  }
}

function changePasswordColor() {
  generatedPassword.style.color = "#e6e5ea";
}
