var Timer = document.querySelector('#Timer');
var time;
var toggle = false;
var ms = 0;
var s = 0;
var m = 0;

//Spacebar timer trigger (Getting ready and Stopping timer)
$("html").keydown(function() {
  $("#Timer").addClass("ready");
  stop();
});

//Spacebar timer trigger (Starting timer)
$("html").keyup(function(event) {
  if (toggle === false) {
    if (event.which === 32) {
      $("#Timer").removeClass("ready");
      toggle = true;
      start();
    }
  }
});






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
