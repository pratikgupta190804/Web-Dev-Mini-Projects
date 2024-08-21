const answer = Math.floor((Math.random() * 10)+1);
let guesses = 0;

document.getElementById('sumbit-btn').onclick = function(){
   let guess = document.getElementById('guess').value;
   guesses++;
document.getElementById('guess').value = '';
   if(guess == answer){
     alert('You guessed it in ' + guesses + ' guesses!');
   }else if(guess > answer){
     alert('Too high!');
   }else{
     alert('Too low!');
   }

  
}