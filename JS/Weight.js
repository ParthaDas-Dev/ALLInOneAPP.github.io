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

t2.add({
  targets: "input",
  opacity: 1,
  rotateX: "360deg",
  duration: 2000,
  delay: anime.stagger(200),
});
t2.add({
  targets: ".anim1",
  backgroundColor: "rgb(2, 104, 75,0.8)",
  duration: 2000,
  delay: anime.stagger(200),
});
t2.add({
  targets: ".anim1",
  backgroundColor: "rgb(2, 104, 75,0.2)",
  duration: 2000,
  delay: anime.stagger(200),
});

//Calculation
let grams = document.getElementById("grams-input");
let miligrams = document.getElementById("mili-input");
let ounces = document.getElementById("ounces-input");
let pounds = document.getElementById("pounds-input");
let kgrams = document.getElementById("kg-input");
//Claculation For Grams
function gramsCal() {
  let gm = parseFloat(grams.value); //Converting The String Into a Floating number
  miligrams.value = gm * 1000;
  ounces.value = gm / 28.34952;
  pounds.value = gm / 453.59237;
  kgrams.value = gm / 1000;
}

//Calculation For MGrams
function miliCal() {
  let mg = parseFloat(miligrams.value);
  grams.value = mg / 1000;
  ounces.value = mg / 28349.523125;
  pounds.value = mg / 453592.37;
  kgrams.value = mg / 1000000;
}

//Calculation for Ounces
function ouncesCal() {
  let oz = parseFloat(ounces.value);
  grams.value = oz * 28.34952;
  miligrams.value = oz * 28350;
  pounds.value = oz / 16;
  kgrams.value = oz * 0.02834952;
}
//Calculation for Pounds
function poundsCal() {
  let lb = parseFloat(pounds.value);
  grams.value = lb * 453.59237;
  miligrams.value = lb * 453592;
  ounces.value = lb * 16;
  kgrams.value = lb * 0.45359237;
}
//Calculation for Pounds
function kgCal() {
  let kg = parseFloat(kgrams.value);
  grams.value = kg * 1000;
  miligrams.value = kg * 1000000;
  ounces.value = kg /  0.02834952;
  pounds.value = kg / 0.45359237;
}
