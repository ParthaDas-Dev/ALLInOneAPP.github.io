window.addEventListener("load", function () {
  let loader = document.getElementsByTagName("div")[0];
  loader.className += "hide";
});

let tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750
});
tl.add({
  targets: 'section',
  translateY: 40,
  delay: anime.stagger(100)
})
tl.add({
  targets: '.head1',
  duration:3000,
   opacity:1,
  delay: anime.stagger(200)
})


let MenuOpen = () => {
  let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });
  tl.add({
    targets: '#MENU',
    opacity:1,
    translateX:340,
    duration:1000,
    delay: anime.stagger(100)
  })
  tl.add({
    targets: '.anim2',
    opacity:1,
    rotateY:'360deg',
    duration:1000,
    delay: anime.stagger(100)
  })
}

let MenuClose = () =>{
  let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });
  tl.add({
    targets: '#MENU',
    translateX:-340,
    duration:1500,
    delay: anime.stagger(100)
  })
}
