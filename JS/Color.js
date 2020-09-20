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

var cho = document.getElementById("user-choice");
const pickr = Pickr.create({
  el: ".color-picker",
  theme: "classic",

  swatches: [
    "rgba(72, 52, 223, 0.774)",
    "rgba(5, 196, 155, 0.753) ",
    "rgba(156, 39, 176, 0.9)",
    "rgba(51, 57, 69, 0.842)",
    "rgba(16, 194, 96, 0.986)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(255, 48, 49,0.9)",
    "rgba(131, 149, 167, 0.911)",
  ],

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: false,
      cmyk: false,
      input: true,
      clear: true,
      save: true,
    },
  },
});

pickr.on("change", (color) => {
  let col = color.toRGBA();
  console.log("change", col);
  this.cho.style.backgroundColor = `rgba(${col[0]},${col[1]},${col[2]},${col[3]})`;
});

function copying() {
  document.execCommand("copy");
  swal("Copied!", "Copied To Your Clipboard", "success");
}
