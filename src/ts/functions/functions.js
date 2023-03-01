"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.errMsg = exports.closeModal = exports.showModal = void 0;
const showModal = (div) => {
    div.style.display = "flex";
    div.style.flexDirection = "column";
};
exports.showModal = showModal;
const closeModal = (div) => {
    div.style.display = "none";
};
exports.closeModal = closeModal;
const errMsg = (text, msg) => {
    text.innerHTML = msg;
};
exports.errMsg = errMsg;
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
    (0, exports.closeModal)(document.querySelector(".modal"));
    return 1;
};
exports.login = login;
