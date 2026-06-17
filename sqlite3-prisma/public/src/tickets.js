// 1. Estructura de Datos
const diagnosisTree = {
    hfc: {
        tv: ["Sin señal", "Canales bloqueados", "Audio desfasado"],
        ba: ["No navega", "Intermitente", "Lentitud"],
        toip: ["Sin tono", "Ruido en línea"]
    },
    gpon: {
        ba: ["Luz LOS roja", "Baja velocidad", "Microcortes"],
        toip: ["Sin registro"]
    },
    redco: {
        tv: ["Sin imagen", "Pixelación"],
        ba: ["Lentitud", "Corte total"]
    }
};

// 2. Referencias al DOM
const techSelect = document.getElementById('tecnologia');
const prodSelect = document.getElementById('producto');
const failSelect = document.getElementById('fallo');

// 3. Función auxiliar para forzar selección del primer elemento real
function autoSelectFirst(selectElement) {
    if (selectElement.options.length > 1) {
        selectElement.selectedIndex = 1; 
        // Disparamos el evento manualmente para encadenar la lógica
        selectElement.dispatchEvent(new Event('change'));
    }
}

// 4. Lógica de inicialización
function init() {
    // Llenar tecnologías
    Object.keys(diagnosisTree).forEach(tech => {
        const opt = document.createElement('option');
        opt.value = tech;
        opt.textContent = tech.toUpperCase();
        techSelect.appendChild(opt);
    });
}

// 5. Event Listeners
techSelect.addEventListener('change', (e) => {
    const tech = e.target.value;
    prodSelect.innerHTML = '<option>Seleccione Producto</option>';
    failSelect.innerHTML = '<option>Seleccione Fallo</option>';
    
    if(tech && diagnosisTree[tech]) {
        Object.keys(diagnosisTree[tech]).forEach(prod => {
            const opt = document.createElement('option');
            opt.value = prod;
            opt.textContent = prod.toUpperCase();
            prodSelect.appendChild(opt);
        });
        autoSelectFirst(prodSelect);
    }
});

prodSelect.addEventListener('change', (e) => {
    const tech = techSelect.value;
    const prod = e.target.value;
    failSelect.innerHTML = '<option>Seleccione Fallo</option>';
    
    if(tech && prod && diagnosisTree[tech][prod]) {
        diagnosisTree[tech][prod].forEach(fail => {
            const opt = document.createElement('option');
            opt.value = fail;
            opt.textContent = fail;
            failSelect.appendChild(opt);
        });
        autoSelectFirst(failSelect);
    }
});

// Arrancar sistema
init();

console.log('el archivo esta corriendo')