/* is it working? */
console.log('🟢 of course!');


/* 🎲 Random number between 2 numbers (both included) */
function getRandomNumbBetween(numb1, numb2) {
  let number = Math.floor(Math.random() * (numb2 - numb1 + 1)) + numb1;
  return number; 
}
//const randomTest = getRandomNumb(2, 3);
//console.log(randomTest);

