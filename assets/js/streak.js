var Timer = document.querySelector('#Timer');
var time;
var isOn = false;
var ms = 0; var s = 0; var m = 0;
var timeList = [];
var global = prompt("Enter your global average: ");
var solve;
var endStreak = false;
var streak


//Spacebar timer trigger (Getting ready & Stopping):
$("html").keydown(function() {
  if (isOn === false && event.which == 32) {
    $("#Timer").addClass("ready");
    toggle();
  } else if (isOn == true && event.which == 32) {
    stop();
    toggle();
    list();
    compare();
  }
});


//Spacebar timer trigger (Starting timer):
$("html").keyup(function(event) {
  if (isOn === true && event.which == 32) {
      $("#Timer").removeClass("ready");
      start();
  }
});



//Dedicated function for chan ents:
function toggle() {
  if(isOn === false) {
    isOn = true;
  } else {
    isOn = false;
  }
}


//Function for creating solve time list
function list() {

//Pushing solve to timeList
  timeList.push(Timer.textContent);
  solve = parseFloat(Timer.textContent)

  }



//Comparing solve times to global average:
//Parse string to float first:

function compare() {
//Converting user input into float value
    global = parseFloat(global);;

    if(solve >= global) {
      streak = timeList.length - 1
      timeList = []
      alert("Your streak is " + streak)
      endStreak = false
    }
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
