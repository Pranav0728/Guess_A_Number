const input = document.querySelector("#usernumber");
const button = document.querySelector("#btn");
const show = document.querySelector("#para");
const chances = document.querySelector("#counter");
const remove = document.querySelector(".remove");
const result = document.querySelector("#res");

const ans = Math.floor(Math.random() * 101);
console.log(ans);

let count = 10;

const myfunc = () => {
  const val = parseInt(input.value);
  if (val === ans) {
    remove.remove();
    result.innerHTML = `Congratulations! You Win<br>Correct number is ${ans} <br> your score is <span style="color:yellow">${count}</span> <br><button id="playagain">Play Again</button>`;
    const playAgainButton = document.querySelector("#playagain");
    playAgainButton.addEventListener("click", play);
  } else if (val < ans) {
    show.innerHTML = `Your guess ${val} is too Low`;
    count = count - 1;
  } else if (val > ans) {
    show.innerHTML = `Your guess ${val} is too High`;
    count = count - 1;
  }
  if (count >= 1) {
    chances.innerHTML = `You Have Only <span style="color:yellow">${count}</span> Chances`;
  } else if (count === 0) {
    remove.remove();
    result.innerHTML = `Opps! <br>You Lose..<br><button id="playagain">Play Again</button>`;
    const playAgainButton = document.querySelector("#playagain");
    playAgainButton.addEventListener("click", play);
  }
};

const play = () => {
  location.reload();
};

button.addEventListener("click", myfunc);
