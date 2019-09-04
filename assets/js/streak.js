var Timer = document.querySelector('#Timer');
var time;
var isOn = false;
var ms = 0;
var s = 0;
var m = 0;
var timeList = [];
var goal = prompt("Enter your streak goal: ");


//Spacebar timer trigger (Getting ready & Stopping)
$("html").keydown(function() {
  if (isOn === false && event.which === 32) {
    $("#Timer").addClass("ready");
    toggle();
  } else {
    stop();
    toggle();
    list();
  }
});

//Spacebar timer trigger (Starting timer)
$("html").keyup(function(event) {
  if (isOn === true && event.which === 32) {
      $("#Timer").removeClass("ready");
      start();
  }
});



//Dedicated function for changing state of timer w/o interfering with the key events.
function toggle() {
  if(isOn === false) {
    isOn = true;
  } else {
    isOn = false;
  }
}

//Function for creating solve time list
function list() {
  for(i = 0; i < goal; i++) {
    timeList[i] = Timer.textContent;
  }
}

// ----------------------------------------------------------------------------//
//Stopwatch functionalities
function start() {
  if(!time) {
    time = setInterval(run, 10);
  }
}

function run() {
  if(m == 0 ) {
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
