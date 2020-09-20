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
  width: " 460",
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

let hertz = document.getElementById("hz-input");
let k_Hertz = document.getElementById("khz-input");
let m_Hertz = document.getElementById("mhz-input");
let g_Hertz = document.getElementById("ghz-input");
let t_Hertz = document.getElementById("thz-input");
hertz.addEventListener("input", getHz);
k_Hertz.addEventListener("input", getkHz);
m_Hertz.addEventListener("input", getMhz);
g_Hertz.addEventListener("input", getGhz);
t_Hertz.addEventListener("input", getThz);

function getHz() {
  let hz = parseFloat(hertz.value);
  k_Hertz.value = hz / 1000;
  m_Hertz.value = hz / 1000000;
  g_Hertz.value = hz / 1000000000;
  t_Hertz.value = hz / 1000000000000;
}

function getkHz() {
  let kHz = parseFloat(k_Hertz.value);
  hertz.value = kHz * 1000;
  m_Hertz.value = kHz / 1000;
  g_Hertz.value = kHz / 1000000;
  t_Hertz.value = kHz / 1000000000;
}

function getMhz() {
  let mHz = parseFloat(m_Hertz.value);
  hertz.value = mHz * 1000000;
  k_Hertz.value = mHz * 1000;
  g_Hertz.value = mHz / 1000;
  t_Hertz.value = mHz / 1000000;
}
function getGhz() {
  let gHz = parseFloat(g_Hertz.value);
  hertz.value = gHz * 1000000000;
  k_Hertz.value = gHz * 1000000;
  m_Hertz.value = gHz * 1000;
  t_Hertz.value = gHz / 1000;
}
function getThz() {
  let gHz = parseFloat(t_Hertz.value);
  hertz.value = gHz * 1000000000000;
  k_Hertz.value = gHz * 1000000000;
  m_Hertz.value = gHz * 1000000;
  g_Hertz.value = gHz * 1000;
}