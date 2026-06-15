const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form); // convertimos a objetos clave-valor
    const data = Object.fromEntries(formData.entries()); // convertimos a un arrays legible de texto plano
    crearUsuario(data); // se ejecuta la función, y se manda data al server
});

async function crearUsuario(data) {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    });

    const respuesta = await response.json();
    console.log(respuesta)
}