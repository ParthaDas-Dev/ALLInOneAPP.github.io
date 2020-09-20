window.addEventListener("load", function () {
    let loader = document.getElementsByTagName("div")[0];
    loader.className += "hide";
  });

  let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });
  tl.add({
    targets: '.head1',
    duration:10000,
     opacity:1,
    delay: anime.stagger(200)
  });
  let t2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 450
  });
  t2.add({
    targets: '.back-btn',
     opacity:1,
     translateX:-164,
    delay: anime.stagger(200)
  })

  //Calculation
  function fCalculate(){
  let fahrenheit = document.getElementById("Fahren-input");
   let fahren = parseFloat(fahrenheit.value);
  let cel =  document.getElementById("Cel-input");
  let kev =  document.getElementById("Kel-input");
    c_Formula = (fahren - 32)*(5/9);
     cel.value = c_Formula;
     k_Formula = (fahren - 32)*(5/9) + 273.15;
     kev.value =  k_Formula;

  }

  function cCalculate(){
    let fahren = document.getElementById("Fahren-input");
    let celsius =  document.getElementById("Cel-input");
    let cel = parseFloat(celsius.value);
    let kev =  document.getElementById("Kel-input");
    let f_Formula =  (cel*(9/5) + 32);
    fahren.value = f_Formula;
    let k_Formula = cel + 273.15;
    kev.value = k_Formula;
  }

  function kCalculate() {
    let fahren = document.getElementById("Fahren-input");
    let cel =  document.getElementById("Cel-input");
    let kelvin =  document.getElementById("Kel-input");
    let kev = parseFloat(kelvin.value);
    f_Formula = (kev - 273.15)*(9/5) + 32 ;
    fahren.value = f_Formula;
    c_Formula = 0 - 273.15;
    cel.value = c_Formula;
  }