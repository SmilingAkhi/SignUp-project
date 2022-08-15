"use strict";

const submitBtn = document.querySelector(".btn");
const errorDisplay = document.querySelector(".error-box");
submitBtn.addEventListener("click", validatePass);

function validatePass() {
  const pass1 = document.querySelector("#pass1");
  const pass2 = document.querySelector("#pass2");
  console.log(pass1);
  const passValue1 = pass1.value;
  const passValue2 = pass2.value;

  if (passValue1 !== passValue2) {
    errorDisplay.textContent = "password does not match";
    pass2.classList.add("error");
  } else pass2.classList.add("pass");
}
