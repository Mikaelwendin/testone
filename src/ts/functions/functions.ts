export const showModal = (div: HTMLDivElement,) => {
  div.style.display = "block";
};
export const closeModal = (div: HTMLDivElement) => {
  div.style.display = "none";
};
export const errMsg = (text: HTMLLabelElement, msg: string) => {
  text.innerHTML = msg;
};
export const login = (userPlace: HTMLLIElement, user: string) => {
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

