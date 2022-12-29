'use strict';
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var curr_round_score, playerno, dice, user;
function roll() {
  dice = Math.floor((Math.random() * 6) + 1);
  const dice_image = document.querySelector(".dice");
  console.log(dice);
  dice_image.src = 'dice-' + dice + '.png';
  if (dice == 1) {
    if (playerno == 1) {
      document.getElementById('current--1').textContent = 0;
    }
    else {
      document.getElementById('current--0').textContent = 0;
    }
    document.querySelector(".player--1").classList.toggle('player--active');
    document.querySelector(".player--0").classList.toggle('player--active');
    curr_round_score = 0;
    playerno = 1 - playerno;
  }
  else {
    curr_round_score += dice;
    if (playerno == 1) {
      document.getElementById('current--1').textContent = curr_round_score;
    }
    else {
      document.getElementById('current--0').textContent = curr_round_score;
    }
  }
}
document.querySelector('.btn--roll').addEventListener('click', roll);
function new_game() {
  user = new Array(0, 0);
  playerno = 0;
  curr_round_score = 0;
  document.querySelector("#score--1").textContent = 0;
  document.querySelector("#score--0").textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.querySelector(".player--1").classList.add('hidden');
  document.querySelector(".player--0").classList.add('player--active');
  document.querySelector(".player--1").classList.remove('player--active');
}
new_game();
document.querySelector('.btn--new').addEventListener('click', new_game);
async function func_hold() {
  if (playerno) {
    user[1] += curr_round_score;
    document.getElementById('current--1').textContent = 0;
    document.querySelector("#score--1").textContent = user[1];
    curr_round_score = 0;
  }
  else {
    user[0] += curr_round_score;
    document.getElementById('current--0').textContent = 0;
    document.querySelector("#score--0").textContent = user[0];
    curr_round_score = 0;
  }
  if (user[playerno] >= 100) {
    if (playerno) {
      document.querySelector(".player--1").classList.add('player-winner');
      document.querySelector(".player--1").classList.remove('hidden');
      var x = playerno + 1;
      alert('Player' + x + 'Wins');
    }
    else {
      document.querySelector(".player--0").classList.add('player-winner');
      document.querySelector(".player--0").classList.remove('hidden');
      var x = playerno + 1;
      alert('Player' + x + 'Wins');
    }
    await sleep(3000);
    document.querySelector(".player--1").classList.remove('player-winner');
    document.querySelector(".player--0").classList.remove('player-winner');
    document.querySelector(".player--0").classList.remove('player--active');
    document.querySelector(".player--1").classList.remove('player--active');
    new_game();
  }
  else {
    playerno = 1 - playerno;
    document.querySelector(".player--1").classList.toggle('player--active');
    document.querySelector(".player--0").classList.toggle('player--active');
  }

}
document.querySelector('.btn--hold').addEventListener('click', func_hold);



