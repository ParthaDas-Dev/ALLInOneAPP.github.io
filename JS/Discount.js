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
  width: " 400",
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

let originalP = document.getElementById("ori-input");
let discount = document.getElementById("dis-input");
let finalP = document.getElementById("final-input");

originalP.addEventListener("input", getOriginalPrice);
discount.addEventListener("input", getOriginalPrice);

function getOriginalPrice() {
  let ori = parseFloat(originalP.value);
  let dis = parseFloat(discount.value);
  let saving = document.getElementById("saving");
  discountVal = ori * (dis / 100);
  discount.value = dis;
  let finalValue = ori - discountVal;
  finalP.value = finalValue;
  let savingVal = ori - finalValue;
  if (isNaN(ori) == true || isNaN(dis) == true || isNaN(savingVal) == true) {
    saving.innerHTML = "0";
  } else {
    saving.innerHTML = savingVal;
  }
}
