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

input.addEventListener("keyup", getInput);
sel1.addEventListener("change", getInput);
sel2.addEventListener("change", getInput);

function getInput() {
  let sel1Value = sel1.value;
  let sel2Value = sel2.value;
  let user_In;

  if (sel1Value === "mili" && sel2Value === "mili") {
    user_In = parseFloat(input.value);
    result.value = user_In;
  } else if (sel1Value === "mili" && sel2Value === "watts") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000;
  } else if (sel1Value === "mili" && sel2Value === "kilo") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000000;
  } else if (sel1Value === "mili" && sel2Value === "mega") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000000000;
  } else if (sel1Value === "mili" && sel2Value === "giga") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000000000000;
  }

  if (sel1Value === "watts" && sel2Value === "mili") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000;
  }

  if (sel1Value === "watts" && sel2Value === "watts") {
    user_In = parseFloat(input.value);
    result.value = user_In;
  } else if (sel1Value === "watts" && sel2Value === "kilo") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000;
  } else if (sel1Value === "watts" && sel2Value === "mega") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000000;
  } else if (sel1Value === "watts" && sel2Value === "giga") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000000000;
  }
  if (sel1Value === "kilo" && sel2Value === "kilo") {
    user_In = parseFloat(input.value);
    result.value = user_In;
  } else if (sel1Value === "kilo" && sel2Value === "mili") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000000;
  } else if (sel1Value === "kilo" && sel2Value === "watts") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000;
  } else if (sel1Value === "kilo" && sel2Value === "mega") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000;
  } else if (sel1Value === "kilo" && sel2Value === "giga") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000000;
  } else if (sel1Value === "mega" && sel2Value === "mega") {
    user_In = parseFloat(input.value);
    result.value = user_In;
  } else if (sel1Value === "mega" && sel2Value === "mili") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000000000;
  } else if (sel1Value === "mega" && sel2Value === "watts") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000000;
  } else if (sel1Value === "mega" && sel2Value === "kilo") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000;
  } else if (sel1Value === "mega" && sel2Value === "giga") {
    user_In = parseFloat(input.value);
    result.value = user_In / 1000;
  }
  if (sel1Value === "giga" && sel2Value === "giga") {
    user_In = parseFloat(input.value);
    result.value = user_In;
  } else if (sel1Value === "giga" && sel2Value === "mili") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000000000000;
  } else if (sel1Value === "giga" && sel2Value === "watts") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000000000;
  } else if (sel1Value === "giga" && sel2Value === "kilo") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000000;
  } else if (sel1Value === "giga" && sel2Value === "mega") {
    user_In = parseFloat(input.value);
    result.value = user_In * 1000;
  } else {
    console.log("OK");
  }
}
