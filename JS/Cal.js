window.addEventListener("load", function () {
  let loader = document.getElementsByTagName("div")[0];
  loader.className += "hide";
});
function del() {
  let input = document.getElementById("input").value;
  document.getElementById("input").value = input.substr(0, input.length - 1);
}

let result = document.getElementById("main-result");
result.addEventListener("click", output);
function output() {
  let input = document.getElementById("input").value;
  let main_result = document.getElementById("output-out");
  let note = document.querySelector(".Note");
  if (isNaN(input) == true) {
    main_result.style.opacity = "1";
    main_result.innerHTML = "Enter A Vaild Number";
    note.style.opacity = "0.7";
  } else {
    main_result.style.opacity = "1";
    main_result.innerHTML = input;
    note.style.opacity = "0";
  }
}

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
  duration: 250,
});
t2.add({
  targets: "button",
  opacity: 1,
  rotate: "1turn",
  delay: anime.stagger(100),
});
t2.add({
  targets: "button",
  backgroundColor: "rgba(185, 240, 214, 0.5)",
  delay: anime.stagger(100),
});
t2.add({
  targets: "button",
  backgroundColor: "rgba(185, 240, 214, 0.2)",
  delay: anime.stagger(100),
});
t2.add({
  targets: ".back-btn",
  opacity: 1,
  translateX: -164,
  delay: anime.stagger(100),
});
