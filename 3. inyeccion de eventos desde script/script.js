let calculo1 = document.getElementById('calculo1')
let calculo2 = document.getElementById('calculo2')
let calculo3 = document.getElementById('calculo3')
let calculo4 = document.getElementById('calculo4')
let btnCalcular = document.getElementById('btnCalcular')
let resultado = document.getElementById('resultado')
let formulario = document.getElementById('formulario')


btnCalcular.addEventListener('click',btnOnClick);

function btnOnClick() {
    if(calculo1.value && calculo2.value){
        
        resultado.innerText =`El resultado es: ${Number(calculo1.value) + Number(calculo2.value)}`;
        
    }else{
        warning(calculo1.value,calculo2.value);
    }
}

formulario.addEventListener('submit',onSubmitClick);

function onSubmitClick(event) {
    event.preventDefault();
    if(calculo3.value && calculo4.value){
        
        resultado.innerText =`El resultado es: ${Number(calculo3.value) + Number(calculo4.value)}`;
        
    }else{
        warning(calculo3.value,calculo4.value);
    }
}

function warning(value1,value2) {
    let msg = ''
    if(!value1 && !value2){
        msg = "inserte valores para realizar calculos"
    }else if(!value1){ 
        msg = "Falta el valor en el primer campo"
    }else if(!value2){ 
        msg = "Falta el valor en el segundo campo"
    }

    alert(msg)
}
