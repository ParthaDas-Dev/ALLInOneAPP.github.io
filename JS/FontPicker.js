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
    width: " 300",
    duration: 2000,
    delay: anime.stagger(200),
  });

  


  $(document).ready(function(){
   $.getJSON("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDI-RTurp29Wedy0yVGRwzNaXVZ2IiaxtE",function(data){
    // console.log(data);
      let itemsData = data.items;
       let topFonts = [itemsData[16],itemsData[18],itemsData[46],itemsData[57],itemsData[65],itemsData[656],itemsData[798],itemsData[890],itemsData[987],itemsData[432],
       itemsData[812],itemsData[527],itemsData[222],itemsData[321],itemsData[201],itemsData[888],itemsData[745],itemsData[464],itemsData[543],itemsData[757],itemsData[893],itemsData[408],
       itemsData[237],itemsData[617],itemsData[703],itemsData[706],itemsData[504],itemsData[643],itemsData[685],itemsData[692],itemsData[425],itemsData[158],itemsData[773],itemsData[590],itemsData[5],
       itemsData[50],itemsData[86],itemsData[942],itemsData[20]];
       console.log(topFonts.length);
       for(let i=0; i < topFonts.length;i++){
        var font = topFonts[i].family;
        var down1 = topFonts[i].files.regular;
        var down2 = topFonts[i].files.italic;
        
        let j = i + 1;
          $(`.font${j}`).append(`<h2 class="fontstyle" style="font-family:${font}">${font}</h2> <p class="sample-text">font-family:${font} <i class="fa fa-chevron-down" aria-hidden="true"></i></p> <h4 class="regular" style="font-family:${font}"><b>REGULAR</b> : Lorem, ipsum dolor sit amet consectetur adipisicing elit</h4> <h4 class="italic" style="font-family:${font}"><b>Italic</b>: Lorem, ipsum dolor sit amet consectetur adipisicing elit</h4> <h6 class="demo"> DOWNLOAD NOW! <i class="fa fa-download" aria-hidden="true"></i> </h6>  <a class="down1" href=${down1}>Regular Text</a> <a class="down2" href=${down2}>Italic Text</a>`);
       
       }


  
});
});