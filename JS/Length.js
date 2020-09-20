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
  targets: ".underline",
  width: " 390",
  duration: 2000,
  delay: anime.stagger(200),
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
  backgroundColor: "rgba(23, 90, 102, 0.6)",
  duration: 2000,
  delay: anime.stagger(200),
});
t2.add({
  targets: ".anim1",
  backgroundColor: "rgba(23, 90, 102, 0.2)",
  duration: 2000,
  delay: anime.stagger(200),
});

let miles = document.getElementById("miles-input");
let meters = document.getElementById("mt-input");
let feet = document.getElementById("feet-input");
let inches = document.getElementById("inches-input");
let kiloMeters = document.getElementById("km-input");
let deciMeters = document.getElementById("dm-input");
let yards = document.getElementById("Yards-input");
let centimeters = document.getElementById("cmeters-input");

miles.addEventListener("input", milesCal);
meters.addEventListener("input", meterCal);
feet.addEventListener("input", feetCal);
inches.addEventListener("input", inchesCal);
kiloMeters.addEventListener("input", kmCal);
deciMeters.addEventListener("input", deciCal);
miles.addEventListener("input", milesCal);
yards.addEventListener("input", yardsCal);
centimeters.addEventListener("input", cmCal);

function milesCal() {
  let mi = parseFloat(miles.value);
  meters.value = mi * 1609.344;
  feet.value = mi * 5280;
  inches.value = mi * 63360;
  kiloMeters.value = mi * 1.609;
  deciMeters.value = mi * 16093.4;
  yards.value = mi * 1760;
  centimeters.value = mi * 160934;
}

function meterCal() {
  let mt = parseFloat(meters.value);
  miles.value = mt / 1609;
  feet.value = mt * 3.281;
  inches.value = mt * 39.37;
  kiloMeters.value = mt / 1000;
  deciMeters.value = mt * 10;
  yards.value = mt * 1.094;
  centimeters.value = mt * 100;
}

function feetCal() {
  let ft = parseFloat(feet.value);
  miles.value = ft / 5280;
  meters.value = ft / 3.281;
  inches.value = ft * 12;
  kiloMeters.value = ft / 3281;
  deciMeters.value = ft * 3.048;
  yards.value = ft / 3;
  centimeters.value = ft * 30.48;
}

function inchesCal() {
  let inc = parseFloat(inches.value);
  miles.value = inc / 63360;
  feet.value = inc / 12;
  meters.value = inc / 39.37;
  kiloMeters.value = inc / 39370;
  deciMeters.value = inc / 3.937;
  yards.value = inc / 36;
  centimeters.value = inc * 2.54;
}

function kmCal() {
  let km = parseFloat(kiloMeters.value);
  miles.value = km / 1.609;
  meters.value = km * 1000;
  feet.value = km * 3281;
  inches.value = km * 39370;
  deciMeters.value = km * 10000;
  yards.value = km * 1094;
  centimeters.value = km * 100000;
}

function deciCal() {
  let deci = parseFloat(deciMeters.value);
  miles.value = deci / 16093;
  meters.value = deci / 10;
  feet.value = deci / 3.048;
  inches.value = deci * 3.937;
  kiloMeters.value = deci / 10000;
  yards.value = deci / 9.144;
  centimeters.value = deci * 10;
}

function yardsCal() {
  let yd = parseFloat(yards.value);
  miles.value = yd / 1760;
  meters.value = yd / 1.094;
  feet.value = yd * 3;
  inches.value = yd * 36;
  kiloMeters.value = yd / 1094;
  deciMeters.value = yd * 9.144;
  centimeters.value = yd * 91.44;
}

function cmCal() {
  let cm = parseFloat(centimeters.value);
  miles.value = cm / 160934;
  meters.value = cm / 100;
  feet.value = cm / 30.48;
  inches.value = cm / 2.54;
  kiloMeters.value = cm / 100000;
  deciMeters.value = cm / 10;
  yards.value = cm / 91.44;
}
