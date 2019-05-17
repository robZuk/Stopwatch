// http://websamuraj.pl/examples/js/projekt11/
const btnTime = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const btnLap = document.querySelector(".addLap");
const panel = document.querySelector(".circle");
const ul = document.querySelector(".laps");
const p = document.querySelector("p");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let active = false;
let idI;

//function change button start/stop
const timer = () => {
  if (active === false) {
    active = !active;
    btnTime.textContent = "Stop";
    idI = setInterval(start, 10);
  } else {
    active = !active;
    btnTime.textContent = "Start";
    clearInterval(idI);
  }
};

//add time to circle
const start = () => {
  miliseconds++;
  if (miliseconds > 99) {
    miliseconds = 0;
    seconds++;
  } else if (seconds > 59) {
    seconds = 0;
    minutes++;
  }
  panel.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }:${miliseconds < 10 ? `0${miliseconds}` : miliseconds}`;
};

//reset function
const reset = () => {
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  panel.textContent = "00:00:00";
  btnTime.textContent = "Start";
  active = false;
  ul.innerHTML = "";
  p.style.display = "none";
  clearInterval(idI);
};

//add three last lap to circle
const addLap = () => {
  const li = document.createElement("li");
  li.textContent = panel.innerHTML;
  ul.appendChild(li);
  const lapsList = document.querySelectorAll("li");
  p.style.display = "block";
  if (lapsList.length > 3) {
    ul.removeChild(lapsList[0]);
    console.log(lapsList);
  }
};

btnTime.addEventListener("click", timer);
btnReset.addEventListener("click", reset);
btnLap.addEventListener("click", addLap);
