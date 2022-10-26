// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0; //Creo variabile somma

for(let i = 0; i < 5; i++){ 
    sum += parseInt(prompt('inserisci numero'));
}
console.log(sum);