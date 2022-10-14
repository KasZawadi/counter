// this  two elements were manioulating

let countEl = document.querySelector(".count");
let btn = document.querySelector(".btn");
const headEl = document.querySelector(".head");

// this is the initial value of the count

let count = 0;

// this is the logic behind the count working.

btn.addEventListener("click", function (e) {
  if (e.target.classList.contains("decrease")) {
    count--;
  } else if (e.target.classList.contains("increase")) {
    count++;
  } else {
    count = 0;
  }
  countEl.innerHTML = count;
  // this is to style the text color to chnage
  // positive and negative value

  if (count > 0) {
    countEl.style.color = "green";
    headEl.style.color = "green";
  } else if (count < 0) {
    countEl.style.color = "red";
    headEl.style.color = "red";
  } else {
    countEl.style.color = "white";
    headEl.style.color = "white";
  }
});
