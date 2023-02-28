"use strict";
var _a, _b, _c;
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
let msg = document.querySelector("label");
let logBtn = document.querySelector("#loginBtn");
let logText = document.querySelector("#loggedOn");
let isLoggedIn;
const toggleMenu = () => {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
    else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
};
hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
});
(_a = document.querySelector("#loginBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    if (!isLoggedIn) {
        showModal(document.querySelector(".modal"));
        msg.innerHTML = "Använd ditt namn för att logga in";
    }
    else {
        logBtn.innerHTML = "Logga in";
        logText.innerHTML = "";
        isLoggedIn = false;
    }
});
(_b = document
    .querySelector(".modal__content--close")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    closeModal(document.querySelector(".modal"));
});
(_c = document.querySelector("#logBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    let input = document.querySelector("input");
    let loggedIn = login(logText, input.value);
    if (loggedIn) {
        logBtn.innerHTML = "Logga ut";
        isLoggedIn = true;
    }
    else {
        errMsg(msg, "Skriv ett namn med högst 15 tecken");
    }
});
const showModal = (div) => {
    div.style.display = "flex";
};
const closeModal = (div) => {
    div.style.display = "none";
};
const errMsg = (text, msg) => {
    text.innerHTML = msg;
};
const login = (userPlace, user) => {
    if (user.length < 1) {
        return false;
    }
    if (user.length > 15) {
        return false;
    }
    if (sessionStorage.getItem(user) === user) {
        let userMsg = "Välkommen tillbaka! Du är inloggad som <b>" + user + "</b>";
        userPlace.innerHTML = userMsg;
    }
    else {
        let userMsg = "Du är inloggad som " + user;
        userPlace.innerHTML = userMsg;
    }
    sessionStorage.setItem(user, user);
    closeModal(document.querySelector(".modal"));
    return 1;
};
