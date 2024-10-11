const button1 = document.querySelector("#button1");
const h1 = document.querySelector("#h1");
const URL = "https://api.adviceslip.com/advice";

async function chamarApi() {
    const resp = await fetch(URL);
    const obj = await resp.json();
    h1.textContent = obj.slip.advice;
}
button1.addEventListener("click", chamarApi)