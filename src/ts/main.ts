const menu = document.querySelector(".menu") as HTMLUListElement;
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger") as HTMLButtonElement;
const closeIcon = document.querySelector(".closeIcon") as HTMLPictureElement;
const menuIcon = document.querySelector(".menuIcon") as HTMLPictureElement;
let msg = document.querySelector("label") as HTMLLabelElement;
let logBtn = document.querySelector("#loginBtn") as HTMLButtonElement;
let logText = document.querySelector("#loggedOn") as HTMLLIElement;
let isLoggedIn: boolean;

const toggleMenu = () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
};

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
document.querySelector("#loginBtn")?.addEventListener("click", () => {
  if (!isLoggedIn) {
    showModal(document.querySelector(".modal") as HTMLDivElement);
    msg.innerHTML = "Använd ditt namn för att logga in";
  } else {
    logBtn.innerHTML = "Logga in";
    logText.innerHTML = "";
    isLoggedIn = false;
  }
});

document
  .querySelector(".modal__content--close")
  ?.addEventListener("click", () => {
    closeModal(document.querySelector(".modal") as HTMLDivElement);
  });
document.querySelector("#logBtn")?.addEventListener("click", () => {
  let input = document.querySelector("input") as HTMLInputElement;
  let loggedIn = login(logText, input.value);
  if (loggedIn) {
    logBtn.innerHTML = "Logga ut";
    isLoggedIn = true;
  } else {
    errMsg(msg, "Skriv ett namn med högst 15 tecken");
  }
});
const showModal = (div: HTMLDivElement,) => {
  div.style.display = "flex";
};
const closeModal = (div: HTMLDivElement) => {
  div.style.display = "none";
};
const errMsg = (text: HTMLLabelElement, msg: string) => {
  text.innerHTML = msg;
};
const login = (userPlace: HTMLLIElement, user: string) => {
  if (user.length < 1) {
    return false;
  }
  if (user.length > 15) {
    return false;
  }
  if (sessionStorage.getItem(user) === user) {
    let userMsg = "Välkommen tillbaka! Du är inloggad som <b>" + user + "</b>";
    userPlace.innerHTML = userMsg;
  } else {
    let userMsg = "Du är inloggad som " + user;
    userPlace.innerHTML = userMsg;
  }
  sessionStorage.setItem(user, user);
  closeModal(document.querySelector(".modal") as HTMLDivElement);
  return 1;
};
