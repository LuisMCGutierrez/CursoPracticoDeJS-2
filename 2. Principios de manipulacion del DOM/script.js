const h1=document.querySelectorAll('h1');
const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('parrafito');
const pid=document.getElementById('pid');
const input=document.querySelector('input');

console.log(input.value);
console.log(
    {
        h1,
        p,
        parrafito,
        pid,
        input,
    });

    // h1.innerHTML="Esto es un titulo modificado desde JS  <br>"
    h1.innerText="Esto es un titulo modificado desde JS  <br>"