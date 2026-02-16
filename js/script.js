/* is it working? */
console.log('🟢 yes, it is');

/* Recupero dati */
const countdownEl = document.getElementById('countdown');
const instructionsEl = document.getElementById('instructions');
const numbersListEl = document.getElementById('numbers-list');
/* DUBBIO: 👇 forse vanno presi singolarmente (es. ennesimo child di 🤔) */
const userInputsEl = document.querySelector('div.input-group > input.form-control');
const buttonEl = document.querySelector('button');
const messageEl = document.getElementById('message');

const randoNumbs = [];
const userNumbs = [/* Qui recupera valori inseriti */];
const memorizedNumbs = [/* Qui recupera elementi comuni */];



/* Genero 5 numeri casuali */
/* - salvo i 5 valori in un array ('randoNumbs')
     (dopo mi servono per il confronto) */

/* Stampo in pagina i numeri casuali */
/* nella lista 'ul.numbers-list' */

/* (nello stesso momento)
   Parte un timer di 30 secondi */

/* quando finiscono i 30 secondi */
/* - i numeri scompaiono */
/* - le istruzioni (p#instructions) cambiano
     'Inserisci i numeri che hai visto (nell'ordine che preferisci).' */

     /* - appaiono i 5 input 'form.answers-form' */

/* - al CLICK del bottone 'button' */
/* -- controllo che non ci siano duplicati */ // ✨ BONUS
/* -- e che siano tutti numeri */ // ✨ BONUS
/* -- salvo i numeri inseriti dall'Utente in un array ('userNumbs') */

/* - controllo la corrispondenza tra numeri mostrati e inseriti 
ovvero, controllo se i due array hanno elementi comuni
- NB. l'utente può inserire i numeri in un ordine qualsiasi
*/
/* - salvo i numeri comuni in un nuovo array 'memorizedNumbs' */

/* stampo in pagina (in p.message) */
/* - quanti numeri (memorizedNumbs.lenght) sono stati memorizzati correttamente */
/* - e quali sono questi numeri (array memorizedNumbs) */



/* - le istruzioni (p#instructions) cambiano
     'Memorizza i numeri entro il tempo limite!'
*/