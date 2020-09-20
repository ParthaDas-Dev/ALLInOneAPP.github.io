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
  width: " 340",
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

let mili = document.getElementById("mili-input");
let secs = document.getElementById("secs-input");
let min = document.getElementById("min-input");
let hrs = document.getElementById("hrs-input");
let days = document.getElementById("days-input");
let wks = document.getElementById("wks-input");
let mth = document.getElementById("mth-input");
let years = document.getElementById("years-input");
let cent = document.getElementById("cent-input");

mili.addEventListener("input", getMili);
secs.addEventListener("input", getSec);
min.addEventListener("input", getMin);
hrs.addEventListener("input", getHrs);
days.addEventListener("input", getDays);
wks.addEventListener("input", getWks);
mth.addEventListener("input", getMth);
years.addEventListener("input", getYr);
cent.addEventListener("input", getCen);

function getMili() {
  let miliSeconds = parseFloat(mili.value);
  secs.value = miliSeconds / 1000;
  min.value = miliSeconds / 60000;
  hrs.value = miliSeconds / 3.6e6;
  days.value = miliSeconds / 8.64e7;
  wks.value = miliSeconds / 6.048e8;
  mth.value = miliSeconds / 2.628e9;
  years.value = miliSeconds / 3.154e10;
  cent.value = miliSeconds / 3.154e12;
}
function getSec() {
  let seconds = parseFloat(secs.value);
  mili.value = seconds * 1000;
  min.value = seconds / 60;
  hrs.value = seconds / 3600;
  days.value = seconds / 86400;
  wks.value = seconds / 604800;
  mth.value = seconds / 2.628e6;
  years.value = seconds / 3.154e7;
  cent.value = seconds / 3.154e9;
}
function getMin() {
  let minute = parseFloat(min.value);
  mili.value = minute * 60000;
  secs.value = minute * 60;
  hrs.value = minute / 60;
  days.value = minute / 1440;
  wks.value = minute / 10080;
  mth.value = minute / 43800;
  years.value = minute / 525600;
  cent.value = minute / 5.256e7;
}

function getHrs() {
  let hours = parseFloat(hrs.value);
  mili.value = hours * 3.6e6;
  secs.value = hours * 3600;
  min.value = hours * 60;
  days.value = hours / 24;
  wks.value = hours / 168;
  mth.value = hours / 730;
  years.value = hours / 8760;
  cent.value = hours / 876000;
}

function getDays() {
  let D = parseFloat(days.value);
  mili.value = D * 8.64e7;
  secs.value = D * 86400;
  min.value = D * 1440;
  hrs.value = D * 24;
  wks.value = D / 7;
  mth.value = D / 30.417;
  years.value = D / 365;
  cent.value = D / 36500;
}
function getWks() {
  let week = parseFloat(wks.value);
  mili.value = week * 6.048e8;
  secs.value = week * 604800;
  min.value = week * 10080;
  hrs.value = week * 168;
  days.value = week * 7;
  mth.value = week * 4.345;
  years.value = week / 52;
  cent.value = week / 5214;
}

function getMth() {
  let month = parseFloat(mth.value);
  mili.value = month * 2.628e9;
  secs.value = month * 2.628e6;
  min.value = month * 43800;
  hrs.value = month * 730;
  days.value = month * 30;
  wks.value = month * 4.345;
  years.value = month / 12;
  cent.value = month / 1200;
}

function getYr() {
  let yrs = parseFloat(years.value);
  mili.value = yrs * 3.154e10;
  secs.value = yrs * 3.154e7;
  min.value = yrs * 525600;
  hrs.value = yrs * 8760;
  days.value = yrs * 365;
  wks.value = yrs * 52;
  mth.value = yrs * 12;
  cent.value = yrs / 100;
}

function getCen() {
  let cen = parseFloat(cent.value);
  mili.value = cen * 3.154e12;
  secs.value = cen * 3.154e9;
  min.value = cen * 5.256e7;
  hrs.value = cen * 876000;
  days.value = cen * 36500;
  wks.value = cen * 5214;
  mth.value = cen * 1200;
  years.value = cen  * 100;
}
