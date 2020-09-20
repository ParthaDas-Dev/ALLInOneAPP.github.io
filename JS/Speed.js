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

let input = document.getElementById("input1");
let result = document.getElementById("input2");
let sel1 = document.getElementById("sel1");
let sel2 = document.getElementById("sel2");

input.addEventListener("keyup", getSpeed);
sel1.addEventListener("change", getSpeed);
sel2.addEventListener("change", getSpeed);

function getSpeed() {
  let set1Val = sel1.value;
  let set2Val = sel2.value;
  let inputVal = parseFloat(input.value);
  if (set1Val === "meter" && set2Val === "meter") {
    result.value = inputVal;
  } else if (set1Val === "meter" && set2Val === "miles") {
    result.value = inputVal * 2.237;
  } else if (set1Val === "meter" && set2Val === "kilo") {
    result.value = inputVal * 3.6;
  }

  if (set1Val === "miles" && set2Val === "miles") {
    result.value = inputVal;
  } else if (set1Val === "miles" && set2Val === "meter") {
    result.value = inputVal / 2.237;
  } else if (set1Val === "miles" && set2Val === "kilo") {
    result.value = inputVal * 1.609;
  }

  if (set1Val === "kilo" && set2Val === "kilo") {
    result.value = inputVal;
  }
  else if (set1Val === "kilo" && set2Val === "meter") {
    result.value = inputVal / 3.6;
  }
  else if (set1Val === "kilo" && set2Val === "miles") {
    result.value = inputVal / 1.467;
  }
}
