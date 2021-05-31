const tarjeta = document.querySelector('#tarjeta');
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');     
const formulario = document.querySelector('#formulario-tarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const logoMarca = document.querySelector('#logo-marca');
const firma = document.querySelector('#tarjeta .firma p');   
const mesExpiracion = document.querySelector('#tarjeta .mes');
const yearExpiracion = document.querySelector('#tarjeta .year');
const ccv = document.querySelector('#tarjeta .ccv');


//Rotar tarjeta para mostrar el frente.
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')){
        tarjeta.classList.remove('acteve');
    }
}




// Rotacion de tarjeta
tarjeta.addEventListener('click', () =>{
    tarjeta.classList.toggle('active');
});

// Boton para abrir formulario.
btnAbrirFormulario.addEventListener('click', () =>{
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

/* selector de meses */
for (let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

/*selector de año */

const yearActual = new Date().getFullYear();
    for(let i = yearActual; i <= yearActual +8; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectYear.appendChild(opcion);
}


/* input form num de tarjeta */

formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    .replace(/\s/g, '')
    .replace(/\D/g, '')
    .replace(/([0-9]{4})/g, '$1 ')
    .trim();


    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####'

        logoMarca.innerHTML = '';
    }


    if (valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }


    mostrarFrente();
});


// *input nombre tarjeta
formulario.inputNombre.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value
    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'Your Name'
    }

    mostrarFrente();
});


// Seleccion de mes.
formulario.selectMes.addEventListener('change', (e) =>{
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
})


// Seleccion de año.
formulario.selectYear.addEventListener('change', (e) =>{
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// Input ccv
formulario.inputCCV.addEventListener('keyup', () =>{
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
    //elimina espacios
    .replace(/\s/g, '')
    //elimina letras
    .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
    
})
