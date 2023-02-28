export const showModal = (div) => {
    div.style.display = "flex";
};
export const closeModal = (div) => {
    div.style.display = "none";
};
export const errMsg = (text, msg) => {
    text.innerHTML = msg;
};
export const login = (userPlace, user) => {
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
