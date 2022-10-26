/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
-Chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
-Interrompi il ciclo appena il nome è stato trovato.
*/

const invitati = ['Carmine Mele', 'Pippo Baudo', 'Brad Pitt', 'Leonardo Dicaprio'];
let verifica = prompt('Inserisci il nome prenotato');

for (let x = 0; x < invitati.length; x++ ){
    
    if(invitati[x] == verifica){
        document.getElementById('print').innerHTML = `${verifica} sei sulla lista`
        break
    }
    else if (invitati[x] != verifica){
        document.getElementById('print').innerHTML = `${verifica} non sei sulla lista`
    }
    
    
}
