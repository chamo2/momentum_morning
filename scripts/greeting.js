const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function SafeName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = imput.value;
  painntGreeting(currentValue);
  savename(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  ddEvnTlistener("submit", handleSubmit);
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greetin.classlist.add(SHOWING_CN);
  greeting.innerText = `Hola! ${text}!`;
}
function loadName() {
  const currentUser = localStorg.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
