const div_choices = document.getElementById("player-choices");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const outcome = document.getElementById("match-outcome");
const audio = document.getElementById("audio-player");
let player1_score = 0;
let player2_score = 0;

let choices = [];

const fetchChoices = async () => {
  let data = await (await fetch("choices.json")).json();
  return data;
};

const changeImages = (choice1, choice2) => {
  const img1 = player1.querySelector("img");
  const img2 = player2.querySelector("img");

  img1.src = choice1.image;
  img2.src = choice2.image;
};

const playRound = (choice1, choice2) => {
  if (choice1.name === choice2.name) return 0;

  if (choice1.wins === choice2.name) return 1;

  if (choice2.wins === choice1.name) return -1;
};

const changeUI = (res) => {
  let outcome_str = "";
  if (res === 0) outcome_str = "DRAW";
  if (res === 1) {
    player1_score++;
    score1.innerHTML = player1_score;
    outcome_str = "Player 1 wins";
  }

  if (res === -1) {
    player2_score++;
    score2.innerHTML = player2_score;
    outcome_str = "Player 2 wins";
  }
  outcome.innerHTML = outcome_str;
};

const playAudio = (res, choice, enemy_choice) => {
  if (res === 0) return;

  audio.pause();

  audio.volume = 0.3;
  // can add scissors vs rock win audio later as a gimmick
  if (res === 1) audio.src = choice.audio_win;
  if (res === -1) audio.src = choice.audio_lose;
  audio.play();
};

const handleChoice = (e) => {
  const choice1 = choices.find((val) => val.name === e.target.id);
  // changeImages(choice_info);
  const choice2 = choices[Math.floor(Math.random() * choices.length)];

  changeImages(choice1, choice2);
  const result = playRound(choice1, choice2);
  changeUI(result);
  playAudio(result, choice1, choice2.name);
};

const displayChoices = () => {
  for (const val of choices) {
    const div = document.createElement("div");
    div.onclick = handleChoice;
    div.innerHTML = `
            <img src="${val.image}" id="${val.name}">
            <h3>${val.name}</h3>
        `;
    div_choices.appendChild(div);
  }
};

const startGame = async () => {
  const data = await fetchChoices();
  choices = data.data;
  displayChoices();
};

startGame();
