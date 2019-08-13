var Timer = document.querySelector('#Timer');
var time;
var isOn = false;
var ms = 0;
var s = 0;
var m = 0;

$("html").keypress(function(event) {
  if(isOn === false) {
    if(event.which === 32) {
      start();
      isOn === true;
    }
  } else {
    if(event.which === 32) {
      pause();
      isOn === false;
    }
  }

})

function start() {
  if(!time) {
    timer = setInterval(run, 10);
  }
}

function run() {
  if(m == 0 ) {
    Timer.textContent = s + "." + ms;
  } else {
    Timer.textContent = m + "." + s + "." + ms;
  }

  ms++;
  if(ms == 100) {
    ms = 0;
    s++;
  }
  if(s == 60) {
    s = 0;
    m++;
  }
}

function pause() {
  clearInterval(time);
  time = false;
}
