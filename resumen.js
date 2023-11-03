let boton = document.getElementById('resumen');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click',hacerResumen);

function hacerResumen(){
    let num = parseFloat(document.getElementById('cant').value);
    let categoria = document.getElementById('inputState').value;
    let rtdo;
    if (categoria=='Estudiante'){
        let s = (200*num)*0.80;
        rtdo = (200*num)-s;
    }
    if (categoria=='Junior'){
        let s = (200*num)*0.15;
        rtdo = (200*num)-s;
    }
    if(categoria=='Trainee'){
        let s = (200*num)*0.5;
        rtdo = (200*num)-s;
    }
    respuesta.innerHTML='Total a Pagar: '+rtdo;
}

let borrar = document.getElementById('borrar');
borrar.addEventListener('click',borrarDatos);
const form = document.getElementById('formulario')
function borrarDatos(){
    form.reset()
}