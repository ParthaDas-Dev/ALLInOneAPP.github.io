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

function calCulate() {
  let select1 = document.getElementById("sel1");
  let select2 = document.getElementById("sel2");
  let input1 = document.getElementById("input1");
  let result = document.getElementById("input2");

  input1.addEventListener("keyup", getInput);
  select1.addEventListener("change", getInput);
  select2.addEventListener("change", getInput);

  function getInput() {
    let sel1Value = select1.value;
    let sel2Value = select2.value;
    let user_In;

    if (sel1Value === "byte" && sel2Value === "byte") {
      user_In = parseFloat(input1.value);
      result.value = user_In;
    } else if (sel1Value === "byte" && sel2Value === "kilo") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 1000;
    } else if (sel1Value === "byte" && sel2Value === "mega") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 1000000;
    } else if (sel1Value === "byte" && sel2Value === "giga") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 9;
    } else if (sel1Value === "byte" && sel2Value === "tera") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 12;
    } else if (sel1Value === "byte" && sel2Value === "peta") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 15;
    } else if (sel1Value === "byte" && sel2Value === "exa") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 18;
    }

    if (sel1Value === "kilo" && sel2Value === "kilo") {
      user_In = parseFloat(input1.value);
      result.value = user_In;
    } else if (sel1Value === "kilo" && sel2Value === "byte") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 1000;
    } else if (sel1Value === "kilo" && sel2Value === "mega") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 1000;
    } else if (sel1Value === "kilo" && sel2Value === "giga") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 6;
    } else if (sel1Value === "kilo" && sel2Value === "tera") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 9;
    } else if (sel1Value === "kilo" && sel2Value === "peta") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 12;
    } else if (sel1Value === "kilo" && sel2Value === "exa") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 15;
    }
    if (sel1Value === "mega" && sel2Value === "mega") {
      user_In = parseFloat(input1.value);
      result.value = user_In;
    } else if (sel1Value === "mega" && sel2Value === "byte") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 6;
    } else if (sel1Value === "mega" && sel2Value === "kilo") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 1000;
    } else if (sel1Value === "mega" && sel2Value === "giga") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 1000;
    } else if (sel1Value === "mega" && sel2Value === "tera") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 6;
    } else if (sel1Value === "mega" && sel2Value === "peta") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 9;
    } else if (sel1Value === "mega" && sel2Value === "exa") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 12;
    }
    if (sel1Value === "giga" && sel2Value === "giga") {
      user_In = parseFloat(input1.value);
      result.value = user_In;
    } else if (sel1Value === "giga" && sel2Value === "byte") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 9;
    } else if (sel1Value === "giga" && sel2Value === "kilo") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 6;
    } else if (sel1Value === "giga" && sel2Value === "mega") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 1000;
    } else if (sel1Value === "giga" && sel2Value === "tera") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 1000;
    } else if (sel1Value === "giga" && sel2Value === "peta") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 6;
    } else if (sel1Value === "giga" && sel2Value === "exa") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 9;
    }

    if (sel1Value === "tera" && sel2Value === "tera") {
      user_In = parseFloat(input1.value);
      result.value = user_In;
    } else if (sel1Value === "tera" && sel2Value === "byte") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 12;
    } else if (sel1Value === "tera" && sel2Value === "kilo") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 9;
    } else if (sel1Value === "tera" && sel2Value === "mega") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 6;
    } else if (sel1Value === "tera" && sel2Value === "giga") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 1000;
    } else if (sel1Value === "tera" && sel2Value === "peta") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 1000;
    } else if (sel1Value === "tera" && sel2Value === "exa") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 10 ** 6;
    }

    if (sel1Value === "peta" && sel2Value === "peta") {
      user_In = parseFloat(input1.value);
      result.value = user_In;
    } else if (sel1Value === "peta" && sel2Value === "byte") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 15;
    } else if (sel1Value === "peta" && sel2Value === "kilo") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 12;
    } else if (sel1Value === "peta" && sel2Value === "mega") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 9;
    } else if (sel1Value === "peta" && sel2Value === "giga") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 6;
    } else if (sel1Value === "peta" && sel2Value === "tera") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 1000;
    } else if (sel1Value === "peta" && sel2Value === "exa") {
      user_In = parseFloat(input1.value);
      result.value = user_In / 1000;
    }

    if (sel1Value === "exa" && sel2Value === "exa") {
      user_In = parseFloat(input1.value);
      result.value = user_In;
    } else if (sel1Value === "exa" && sel2Value === "byte") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 18;
    } else if (sel1Value === "exa" && sel2Value === "kilo") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 15;
    } else if (sel1Value === "exa" && sel2Value === "mega") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 12;
    } else if (sel1Value === "exa" && sel2Value === "giga") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 9;
    } else if (sel1Value === "exa" && sel2Value === "tera") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 10 ** 6;
    } else if (sel1Value === "exa" && sel2Value === "peta") {
      user_In = parseFloat(input1.value);
      result.value = user_In * 1000;
    }
  }

  getInput();
}
