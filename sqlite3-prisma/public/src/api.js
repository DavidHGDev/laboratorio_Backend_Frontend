const BASE_URL = 'http://localhost:3000/api';

export async function peticion(endpoind, method = 'GET', data = null) {
    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''    
    }

    const config = {
        method,
        headers,
        body: data ? JSON.stringify(data) : null
    }

    const response = await fetch(`${BASE_URL}${endpoind}`, config);

    if(response.status === 401){
        console.error('Token invalido o expirado');
        localStorage.removeItem('token');
        window.location.href = '/form.html';
        return;
    }

    return await response.json();
}