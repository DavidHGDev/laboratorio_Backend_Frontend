import { peticion } from "./api.js";

const button = document.querySelector('button');


button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(button)
    getUser()
})

async function getUser() {
    const data = await peticion('/user', 'GET')
    console.log(data)
}