const form = document.querySelector('form')

console.log(form.elements)
console.dir(form.elements)
console.log("-------")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData)
    const data = Object.fromEntries(formData.entries())

    console.log(data)
    dataServer(data)
})

//Enviar al Backend
async function dataServer(data) {
    const response = await fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const resultado = await response.json();
    console.log(resultado)
}