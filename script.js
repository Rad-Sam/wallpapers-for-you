const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

document.querySelectorAll(".selectable-image").forEach(function (img) {
  img.addEventListener("click", function () {
    this.classList.toggle("selected");
  });
});

let timeoutId;

document.getElementById("nature").addEventListener("mouseover", function () {
  let element = document.querySelector("body");
  element.style.color = "black";
  element.style.backgroundImage = "url(5.jpg)";
  element.style.backgroundPosition = "center";
  element.style.backgroundSize = "1700px";
  element.style.textShadow = "none";
  let element2 = document.querySelector(".vectorword");
  element2.style.color = "white";
  // Clear any existing timeout
  clearTimeout(timeoutId);
  // Assign the timeout ID to the variable
  timeoutId = setTimeout(function () {
    element2.style.color = "black";
    element2.style.textShadow =
      "0px 0px 1px black, 0 0 0.1em #c5c0c0c8, 0 0 0.1em #ffffff16";
  }, 1000);
});

document.getElementById("vector").addEventListener("mouseover", function () {
  let element = document.querySelector("body");
  element.style.textShadow = "none";
  element.style.color = "black";
  element.style.backgroundImage = "url(4.png)";
  element.style.backgroundPosition = "center";
  element.style.backgroundSize = "1700px";
  element.style.textShadow = "none";
  let element2 = document.querySelector(".vectorword");
  element2.style.color = "white";
  // Clear any existing timeout
  clearTimeout(timeoutId);
  // Assign the timeout ID to the variable
  timeoutId = setTimeout(function () {
    element2.style.color = "black";
    element2.style.textShadow =
      "0px 0px 1px black, 0 0 0.1em #c5c0c0c8, 0 0 0.1em #ffffff16";
  }, 1000);
});

document.getElementById("mobile").addEventListener("mouseover", function () {
  let element = document.querySelector("body");
  element.style.textShadow = "none";
  element.style.backgroundImage = "url(6.png)";
  element.style.backgroundPosition = "center";
  element.style.color = "black";
  element.style.backgroundSize = "1700px";
  let element2 = document.querySelector(".vectorword");
  element2.style.color = "white";
  // Clear any existing timeout
  clearTimeout(timeoutId);
  // Assign the timeout ID to the variable
  timeoutId = setTimeout(function () {
    element2.style.color = "black";
    element2.style.textShadow =
      "0px 0px 1px black, 0 0 0.1em #c5c0c0c8, 0 0 0.1em #ffffff16";
  }, 1000);
});

document.getElementById("fantasy").addEventListener("mouseover", function () {
  let element = document.querySelector("body");
  element.style.color = "black";
  element.style.textShadow = "none";
  element.style.backgroundImage = "url(1.jpg)";
  element.style.backgroundPosition = "center";
  element.style.backgroundSize = "1700px";
  let element2 = document.querySelector(".vectorword");
  element2.style.color = "white";
  // Clear any existing timeout
  clearTimeout(timeoutId);
  // Assign the timeout ID to the variable
  timeoutId = setTimeout(function () {
    element2.style.color = "black";
    element2.style.textShadow =
      "0px 0px 1px black, 0 0 0.1em #c5c0c0c8, 0 0 0.1em #ffffff16";
  }, 1000);
});

document.getElementById("anime").addEventListener("mouseover", function () {
  let element = document.querySelector("body");
  element.style.textShadow = "none";
  element.style.backgroundImage = "url(2.jpg)";
  element.style.backgroundPosition = "center";
  element.style.backgroundSize = "1700px";
  element.style.color = "white";

  let element2 = document.querySelector(".vectorword");
  element2.style.color = "white";
  // Clear any existing timeout
  clearTimeout(timeoutId);
  // Assign the timeout ID to the variable
});

document
  .getElementById("minimalist")
  .addEventListener("mouseover", function () {
    let element = document.querySelector("body");
    element.style.color = "black";
    element.style.backgroundImage = "url(3.jpg)";
    element.style.backgroundPosition = "center";
    element.style.backgroundSize = "1700px";
    element.style.textShadow = "none";
    let element2 = document.querySelector(".vectorword");
    element2.style.color = "white";
    // Clear any existing timeout
    clearTimeout(timeoutId);
    // Assign the timeout ID to the variable
    timeoutId = setTimeout(function () {
      element2.style.color = "black";
      element2.style.textShadow =
        "0px 0px 1px black, 0 0 0.1em #c5c0c0c8, 0 0 0.1em #ffffff16";
    }, 1000);
  });

document.querySelectorAll(".selectable-image").forEach(function (img) {
  img.addEventListener("mouseover", function () {
    const theme = this.getAttribute("data-theme");
    const themeNameElement = this.nextElementSibling;
    themeNameElement.querySelector(".back").textContent =
      theme.charAt(0).toUpperCase() + theme.slice(1);
  });
});

document.querySelectorAll(".selectable-image").forEach(function (img) {
  img.addEventListener("mouseover", function () {
    const theme = this.getAttribute("data-theme");
    const vectorWord = document.querySelector(".vectorword");
    const flipContainer = document.createElement("div");
    const flipContent = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");

    flipContainer.classList.add("flip-container");
    flipContent.classList.add("flip-content");
    front.classList.add("front");
    back.classList.add("back");

    front.textContent = "Vector";
    back.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);

    flipContent.appendChild(front);
    flipContent.appendChild(back);
    flipContainer.appendChild(flipContent);

    vectorWord.innerHTML = "";
    vectorWord.appendChild(flipContainer);
  });
});
