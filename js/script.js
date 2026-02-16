/* is it working? */
console.log('🟢 yes, it is');

/* Recupero dati */
const countdownEl = document.getElementById('countdown');
const instructionsEl = document.getElementById('instructions');
const numbersListEl = document.getElementById('numbers-list');
const formEl = document.getElementById('answers-form');
const userInputEl1 = document.getElementById('numb-1');
const userInputEl2 = document.getElementById('numb-2');
const userInputEl3 = document.getElementById('numb-3');
const userInputEl4 = document.getElementById('numb-4');
const userInputEl5 = document.getElementById('numb-5');
const buttonEl = document.querySelector('button');
const messageEl = document.getElementById('message');

const randoNumbs = [];
const userNumbs = [/* Qui recupera valori inseriti */];
const memorizedNumbs = [/* Qui recupera elementi comuni */];

let guessedNumbAmountEl;



/* Genero 5 numeri casuali */
for (i = 1; randoNumbs.length < 5; i++) {
  number = getRandomNumbBetween(1, 50);
  //console.log(number);

  /* IF se il nuovo numero non è già presente nell'array random */  
  let alreadyPicked = randoNumbs.includes(number);
  console.log(number, alreadyPicked, randoNumbs);  
    
  if (!alreadyPicked) {
    /* - salvo il numero nell'array (serve per il confronto) */
    console.log(number, alreadyPicked, randoNumbs);  
    randoNumbs.push(number);
    console.log(randoNumbs);
    
  }

}
/* Stampo in pagina i numeri casuali */
/* nella lista 'ul.numbers-list' */
for (x = 0; x < randoNumbs.length; x++) {
  numbersListEl.innerHTML += `<li>${randoNumbs[x]}</li>`;
}
/* Imposta un timer di 30 secondi */
setTimeout(function () {
  /* quando finiscono i 30 secondi */
  /* - i numeri scompaiono */
  //console.log(numbersListEl.classList);
  numbersListEl.classList.add('d-none');
  //console.log(numbersListEl.classList);

  /* - le istruzioni (p#instructions) cambiano
       'Inserisci i numeri che hai visto (nell'ordine che preferisci).' */
  instructionsEl.innerText = "Inserisci i numeri che hai visto (nell'ordine che preferisci).";
  /* - appaiono i 5 input 'form.answers-form' */
  formEl.classList = "";
}, 30000);

/* - al CLICK del bottone 'button' */
buttonEl.addEventListener('click', function (e) {
  e.preventDefault();

  /* -- controllo che non ci siano duplicati */ // ✨ BONUS
  /* -- e che siano tutti numeri */ // ✨ BONUS
  /* -- salvo i numeri inseriti dall'Utente in un array ('userNumbs') */
  let number = userInputEl1.value;
  userNumbs.push(number);
  number = userInputEl2.value;
  userNumbs.push(number);
  number = userInputEl3.value;
  userNumbs.push(number);
  number = userInputEl4.value;
  userNumbs.push(number);
  number = userInputEl5.value;
  userNumbs.push(number);
  //console.log(userNumbs);

  /* - controllo la corrispondenza tra numeri mostrati e inseriti 
  ovvero, controllo se i due array hanno elementi comuni
  - NB. l'utente può inserire i numeri in un ordine qualsiasi */
  for (i = 0; i < randoNumbs.length; i++) {
    for (y = 0; y < userNumbs.length; y++) {
      /* - salvo i numeri comuni in un nuovo array 'memorizedNumbs' */
      if (randoNumbs[i] == userNumbs[y]) {
        memorizedNumbs.push(userNumbs[y]);
        //console.log(randoNumbs[i], userNumbs[y], memorizedNumbs);      
      }
    }
  }
  /* stampo in pagina (in p.message) */
  guessedNumbAmountEl = memorizedNumbs.length;
  /* - quanti numeri sono stati memorizzati correttamente 👇 */
  messageEl.innerText = `Numeri ricordati correttamente: ${guessedNumbAmountEl} (${memorizedNumbs})`
  /* - e ☝️ quali sono */
})




/* - le istruzioni (p#instructions) cambiano
     'Memorizza i numeri entro il tempo limite!'
*/