window.localStorage.setItem("key", "This is the value");

window.localStorage.setItem("key to delete", "Delete this value");

let storedData = window.localStorage.getItem("key");
console.log(storedData);

window.localStorage.removeItem("key to delete");

let text = document.createElement("h1");

text.textContent = window.localStorage.getItem("key");

document.body.appendChild(text);

console.log(text);
