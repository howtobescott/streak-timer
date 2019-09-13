var Timer = document.querySelector('#Timer');
var time;
var isOn = false;
var ms = 0; var s = 0; var m = 0;
var timeList = [];
var global = prompt("Enter your global average: ");


//Spacebar timer trigger (Getting ready & Stopping):
$("html").keydown(function() {
  if (isOn === false && event.which == 32) {
    $("#Timer").addClass("ready");
    toggle();
  } else if (isOn == true && event.which == 32) {
    stop();
    toggle();
    list();
  }
});


//Spacebar timer trigger (Starting timer):
$("html").keyup(function(event) {
  if (isOn === true && event.which == 32) {
      $("#Timer").removeClass("ready");
      start();
  }
});



//Dedicated function for changing state of timer w/o
//interfering with the key events:
function toggle() {
  if(isOn === false) {
    isOn = true;
  } else {
    isOn = false;
  }
}


//Function for creating solve time list
function list() {
  global = parseFloat(global);
  solve = parseFloat(Timer.textContent);

  while (solve <= global) {
    timeList.push(Timer.textContent);
    break
  }
}


//Comparing solve times to global average:
//Parse string to float first:

function compare() {

}


//Stopwatch functionalities:
function start() {
  if(!time) {
    reset();
    time = setInterval(run, 10);

  }
}

function run() {
  if(m == 0) {
    Timer.textContent = s + "." + ms;
  } else {
    Timer.textContent = m + "." + (s < 10 ? "0" + s : s) + "." + ms;
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

function stop() {
  clearInterval(time);
  time = false;
}

function reset() {
  m = 0;
  ms = 0;
  s = 0;
  Timer.textContent = "0.00";
}
