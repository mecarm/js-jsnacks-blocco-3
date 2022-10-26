// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

// inserire un numero = input nell html
// trasformare input in un valore parseint
// prendere il valore numero e generare in base al numero degli array di 10 numeri casuali da 1 a 100

let arrayPrint = document.getElementById('arrayPrint');
let x = 0;

function generaArray(){
    
    let n = parseInt(document.getElementById('inputNumber').value);
    console.log(n);

    while( x < n ){
        let array = new Array();
        let i = 0;

        while(i < 10){
            array.push(Math.floor(Math.random() * 100) + 1);
            i++;
            }

        let li = document.createElement('li');
        li.innerText = array;
        arrayPrint.append(li);

        x++;
    }
}
