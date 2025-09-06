        let heartsLost = 0;
        let Points = 0;
        let score = 0;
        let rounds = 1;
        let heartsAlive = 3;
        document.querySelector('.pointvalue').innerHTML = 0
        stoptimeout = null;
        let startTime;
        let elapsedTime = 0;
        const starsContainer = document.querySelector('.stars');
        const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const top = Math.random() * 100;
  const left = Math.random() * 100;
  star.style.top = top + "%";
  star.style.left = left + "%";

  const size = Math.random() * 3 + 2; // 2px to 5px
  star.style.width = size + "px";
  star.style.height = size + "px";

  const twinkleSpeed = (Math.random() * 3 + 2) + "s";
  const moveDuration = (Math.random() * 15 + 25) + "s";

  const moveX = (Math.random() - 0.5) * 100;
  const moveY = (Math.random() - 0.5) * 100;

  star.style.animationDuration = `${twinkleSpeed}, ${moveDuration}`;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes move${i} {
      from { transform: translate(0px, 0px); }
      to { transform: translate(${moveX}px, ${moveY}px); }
    }
  `, styleSheet.cssRules.length);

  star.style.animationName = `twinkle, move${i}`;

  starsContainer.appendChild(star);
}


function startStopwatch() {
            startTime = Date.now();
        }

function realHearts(heartNo) {
  return `<svg class="heart heart--full heart-${heartNo}" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" width="32" height="32" aria-label="life">
    <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.5C11.09 5.01 12.76 4 14.5 4
      17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>`;
}

function restoreHearts() {
document.querySelector('.allhearts').innerHTML =`
${realHearts(1)}
${realHearts(2)}
${realHearts(3)}`;
  
heartsLost = 0;

document.querySelectorAll('.heart').forEach((heart, i) => {
    setTimeout(() => {
      heart.classList.add('restored');
      setTimeout(() => heart.classList.remove('restored'), 600);
    }, i * 200);
  });
}

function deadHearts () {
return `<svg class="heart heart--empty" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24" width="25" height="25" aria-label="lost life">
  <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    d="M12 21
       L4.5 13.5
       C2 11 2 7.5 4.5 5.5
       C6.5 4 9 4.5 12 7
       C15 4.5 17.5 4 19.5 5.5
       C22 7.5 22 11 19.5 13.5
       L12 21z"/>
</svg>`
}

function runpoints (pointsval) {
        setTimeout(() => {
document.querySelector('.pointvalue').innerHTML =
    parseInt(document.querySelector('.pointvalue').innerHTML) + pointsval;
    Points = pointsval;
    pointstobeAdded();
    },600)
    score += 1000-Math.round(elapsedTime*1000) + 1
}

function pointstobeAdded () {
            document.querySelector('.pointsAdded').innerHTML = `+${Points} pts`
                setTimeout(() => {
                  document.querySelector('.pointsAdded').innerHTML = ``  
                }, 400)
}
function stopStopwatch() {
            elapsedTime = (Date.now() - startTime) / 1000;
            elapsedTime = elapsedTime.toFixed(3);
            return elapsedTime + " s";
}

function changeButton () {
            document.querySelector('.start-js').classList.remove('afterclick-css')
            document.querySelector('.start-js').classList.add('startafterclick-css')
            document.querySelector('.start-js').innerHTML = 'Click !'
            startStopwatch();
            intervalCount = 1;
}

function backtoNormal () {
    document.querySelector('.start-js').classList.remove('reactiontime-css')
    document.querySelector('.start-js').classList.add('start-css')
    rounds++
    document.querySelector('.start-js').innerHTML = `Start the Game
    <br>
    <span class="rounds-text">
   Round ${rounds} </span>`
    document.querySelector('.start-js').classList.remove('reactiontime-css');
    document.querySelector('.start-js').classList.remove('game-over');
    document.querySelector('.start-js').classList.remove('too-slow');
        document.querySelector('.start-js').classList.remove('reaction-time');
}
function heartAnimation (heartNum) {
    const heartEl = document.querySelector(`.heart-${heartNum}`);
    heartEl.classList.add('lost');
    setTimeout(() => {
        heartEl.innerHTML = deadHearts();
        heartEl.classList.remove('lost');
    }, 500);
}
function heartLost1_2(heartNum) {
heartAnimation(heartNum);
    heartsLost++;
    heartsAlive--
    document.querySelector('.start-js').innerHTML = 'You took too long to respond';
    Points = 0;
    document.querySelector('.start-js').classList.add('too-slow');
}
function setScoreColor(score) {
    const scoreEl = document.querySelector('.classScore');

    if (score >= 0 && score < 1000) {
        scoreEl.classList.add('red');
    } else if (score >= 1000 && score < 2000) {
        scoreEl.classList.add('orange');
    } else if (score >= 2000 && score < 3000) {
        scoreEl.classList.add('yellow');
    } else if (score >= 3000 && score < 4000) {
        scoreEl.classList.add('green');
    } else if (score >= 4000 && score <= 5000) {
        scoreEl.classList.add('darkgreen');
    }
}
function runGame () {
            let intervalCount = 0;
            let num = Math.random()
            if (num >= 0 && num <= 0.2) {
                stoptimeout = setTimeout(() => {changeButton();}, 1000)
            } else if (num >= 0.2 && num <= 0.4) {
                stoptimeout = setTimeout(() => {changeButton();}, 2000)
            } else if (num >= 0.4 && num <= 0.6) {
                stoptimeout = setTimeout(() => {changeButton();}, 3000)
            } else if (num >= 0.6 && num <= 0.8) {
                stoptimeout = setTimeout(() => {changeButton();}, 4000)
            } else if (num >= 0.8 && num <= 1) {
                stoptimeout = setTimeout(() => {changeButton();}, 5000)
            }

            if (intervalCount === 1) {
                clearTimeout(stoptimeout)
            }
}

function waiting () {
    document.querySelector('.start-js').classList.remove('start-css')
    document.querySelector('.start-js').classList.add('afterclick-css')
    runGame();
    document.querySelector('.start-js').innerHTML = `Wait for the button to turn <div class='color-red'>red</div>`
}

function startGame () {
            if (document.querySelector('.start-js').innerHTML.includes('Start the Game')) {
waiting();
            }

else if (document.querySelector('.start-js').innerHTML === 'Click !') {
    document.querySelector('.start-js').classList.add('reactiontime-css')
    document.querySelector('.start-js').classList.remove('startafterclick-css')
    stopStopwatch();

if (Number(elapsedTime) >= 0 && Number(elapsedTime) <= 0.2){runpoints(10);}
else if (Number(elapsedTime) >= 0.2 && Number(elapsedTime) <= 0.4){runpoints(8);}
else if (Number(elapsedTime) >= 0.4 && Number(elapsedTime) <= 0.6){runpoints(6);}
else if (Number(elapsedTime) >= 0.6 && Number(elapsedTime) <= 0.8){runpoints(4)}
else if (Number(elapsedTime) >= 0.8 && Number(elapsedTime) <= 1){runpoints(2);}

    if (Number(elapsedTime) > 1) {
        if (heartsLost === 0) {heartLost1_2(1);}
        else if (heartsLost === 1) {heartLost1_2(2);}
        else if (heartsLost === 2) {
    document.querySelector('.heart-3').innerHTML = `${deadHearts()}`
heartAnimation(3);
    heartsLost = 0;
    heartsAlive--
    document.querySelector('.start-js').innerHTML = `GAME OVER
 <br>
<span class="classScore"> Your Score :  ${score} </span>
 `
setScoreColor(score);
 rounds = 1;
document.querySelector('.pointvalue').innerHTML = 0;
Points = 0
score = 0
document.querySelector('.start-js').classList.add('game-over');
        }}
else {
    document.querySelector('.start-js').innerHTML = `Your reaction Time was : <div class='bold'>${elapsedTime}s</div>`;
if (elapsedTime <= 0.2)
document.querySelector('.bold').classList.add('darkgreen')
else if (elapsedTime <= 0.4)
document.querySelector('.bold').classList.add('green')
else if (elapsedTime <= 0.6)
document.querySelector('.bold').classList.add('yellow')
else if (elapsedTime <= 0.8)
document.querySelector('.bold').classList.add('orange')
else if (elapsedTime <= 1)
document.querySelector('.bold').classList.add('red')

document.querySelector('.start-js').classList.add('reaction-time');
                }
            }
else if (document.querySelector('.start-js').innerHTML.includes('GAME OVER')) {
        restoreHearts();
        rounds = 0;
        backtoNormal();
        score = 0;
        heartsAlive = 3;
            }
else if (document.querySelector('.start-js').innerHTML.includes('Your reaction Time was') || document.querySelector('.start-js').innerHTML.includes('You took too long to respond')) {backtoNormal();}

   if (rounds === 6) {
document.querySelector('.start-js').classList.remove('start-css')
document.querySelector('.start-js').classList.remove('reactiontime-css');
document.querySelector('.start-js').classList.add('finished-css');
if (heartsAlive === 2) {
    score = Math.round(score / 2) 
}
else if (heartsAlive === 1) {
    score = Math.round(score / 3) 
}
document.querySelector('.start-js').innerHTML = `<span class="finished-text">
  You finished !
  <br>
<span class="classScore">  Your Score : ${score}</span></span>`
setScoreColor(score);
  rounds = 0;
}

else if (document.querySelector('.start-js').innerHTML.includes('You finished !')) {
        restoreHearts();
        rounds = 0;
        backtoNormal();
        document.querySelector('.start-js').classList.remove('finished-css');
        document.querySelector('.pointvalue').innerHTML = 0;
        Points = 0
        score = 0
        heartsAlive = 3;
}
}
document.addEventListener('DOMContentLoaded', () => {
document.querySelector('.start-js').addEventListener('keydown', () => {
  if (event === 'Enter') startGame();
        })  
        
document.querySelector('.start-js').addEventListener('click', () => startGame())
});