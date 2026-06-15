import { peticion } from "./api.js";

const button = document.querySelector('button');
console.log(button)

button.addEventListener('click', (e) => {
    e.preventDefault();
    getUser()
})

async function getUser() {
    const data = await peticion('/user', 'GET')
    console.log(data)
}