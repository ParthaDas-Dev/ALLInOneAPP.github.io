window.addEventListener("load", function () {
  let loader = document.getElementsByTagName("div")[0];
  loader.className += "hide";
});

let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
});
tl.add({
  targets: ".head1",
  duration: 10000,
  opacity: 1,
  delay: anime.stagger(200),
});
let t2 = anime.timeline({
  easing: "easeOutExpo",
  duration: 450,
});
t2.add({
  targets: ".back-btn",
  opacity: 1,
  translateX: -164,
  delay: anime.stagger(200),
});
t2.add({
  targets: ".main-head",
  opacity: 1,
  translateX: -170,
  duration: 2000,
});

let hours = 0;
let minutes = 0;
let seconds = 0;
let milisec = 0;
var miliInt;
var secsInt;
var minInt;
var hrsInt;

function start() {
  var getMili = () => {
    let mili = document.getElementById("mili");
    if (milisec > 9) {
      milisec = 1;
      mili.innerHTML = milisec;
    } else {
      milisec = milisec + 1;
      mili.innerHTML = milisec;
    }
  };

  let getSecs = () => {
    let secs = document.getElementById("secs");
    if (seconds > 58) {
      seconds = 1;
      secs.innerHTML = seconds  ;
    } else {
      seconds = seconds + 1;
      secs.innerHTML = seconds ;
    }
  };
  let getMin = () => {
    let min = document.getElementById("min");
    if (minutes > 58) {
      minutes = 1;
      min.innerHTML = minutes ;
    } else {
      minutes = minutes + 1;
      min.innerHTML = minutes ;
    }
  };

  let getHrs = () => {
    let hrs = document.getElementById("hours");
    if (hours > 24) {
      hours = 1;
      hrs.innerHTML = hours ;
    } else {
      hours = hours + 1;
      hrs.innerHTML = hours;
    }
  };

  miliInt = setInterval(getMili, 100);
  secsInt = setInterval(getSecs, 1000);
  minInt = setInterval(getMin, 1000 * 60);
  hrsInt = setInterval(getHrs, 1000 * 60 * 60);
}
function pause() {
  clearInterval(miliInt);
  clearInterval(secsInt);
  clearInterval(minInt);
  clearInterval(hrsInt);
}

function reset() {
  pause();
  let mili = document.getElementById("mili");
  mili.innerHTML = "0";
  let secs = document.getElementById("secs");
  secs.innerHTML = "0";
  let min = document.getElementById("min");
  min.innerHTML = "0";
  let hrs = document.getElementById("hours");
  hrs.innerHTML = "0";
}

function double(){
  alert("Multiple Clicks On The Start Will Increase The Time Speed And You Might Get Flawed Result!");

}