const form = document.querySelector('form')
import { peticion } from "./api.js";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries())
    dataServer(data)
})

//Enviar al Backend
async function dataServer(data) {
    const response = await peticion('/auth', 'POST', data)
    
    if(response.token) {
        localStorage.setItem('token', response.token)
        console.log('Login exitoso')
    }
    console.log(response)
}