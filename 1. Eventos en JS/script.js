let calculo1 = document.getElementById('calculo1')
let calculo2 = document.getElementById('calculo2')
let btnCalcular = document.getElementById('btnCalcular')
let resultado = document.getElementById('resultado')

function btnOnClick() {
    if(calculo1.value && calculo2.value){
        
        resultado.innerText =`El resultado es: ${Number(calculo1.value) + Number(calculo2.value)}`;
        
    }else{
        warning(calculo1.value,calculo2.value);
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
