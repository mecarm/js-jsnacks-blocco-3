let array = []; // array vuoto
let sum = 0; // variabile somma uguale a 0
// creo ciclo do while 
do{
    //codice da eseguire
    let x = 0
    array = [parseInt(prompt('inserisci un numero'))];
    sum += array[x]; //sum = sum + array[x]

    //istruzione per terminare il ciclo
    x++;
}while( sum < 50 ); //condizione
console.log(sum);

