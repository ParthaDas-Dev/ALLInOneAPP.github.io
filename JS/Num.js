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
  t2.add({
    targets: ".anim1",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    duration: 2000,
    delay: anime.stagger(200),
  });
  t2.add({
    targets: ".anim1",
    backgroundColor: "rgba(255,255,255,0.3)",
    duration: 2000,
    delay: anime.stagger(200),
  });


  let thousand = document.getElementById("Thou-input");
  let million = document.getElementById("mill-input");
  let  billion = document.getElementById("bill-input");
  let  trillion = document.getElementById("tri-input");
  let quadrillion = document.getElementById("qua-input");

  thousand.addEventListener("input",getThou);
  million.addEventListener("input",getMill);
  billion .addEventListener("input",getBill);
  trillion.addEventListener("input",getTri);
  quadrillion.addEventListener("input",getQuad);


   function getThou(){
  let thou = parseFloat(thousand.value);
  million.value = thou / 1000;
  billion.value = thou / (10**6);
  trillion.value = thou / (10**9);
  quadrillion.value = thou / (10**12);
   }
   function getMill(){
    let mill = parseFloat(million.value);
    thousand.value = mill * 1000;
    billion.value = mill / (10**3);
    trillion.value = mill / (10**6);
    quadrillion.value = mill / (10**9);
     }

     function getBill(){
      let bill = parseFloat(billion.value);
      thousand.value = bill * (10**6);
      million.value = bill * (10**3);
      trillion.value = bill / (10**3);
      quadrillion.value = bill / (10**6);
       }

       function getTri(){
        let tri = parseFloat(trillion.value);
        thousand.value = tri * (10**9);
        million.value = tri * (10**6);
        billion.value = tri * (10**3);
        quadrillion.value = tri / (10**3);
         }
         
       function getQuad(){
        let quad = parseFloat(quadrillion.value);
        thousand.value = quad * (10**12);
        million.value = quad * (10**9);
        billion.value =  quad * (10**6);
        trillion.value = quad * (10**3);
         }