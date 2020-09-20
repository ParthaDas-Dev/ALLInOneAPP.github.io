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

var cities = [
  "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d",
  "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d",
  "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d",
  " https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d",
  " https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d",
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d",
];

for(let i=0;i < cities.length;i++){
$.getJSON(cities[i], function (data) {
  // console.log(data)
  
    var city = data.name;
    var des = data.weather[0].description;
    var weather = data.weather[0].main;
    var temp = data.main.temp;
    var icon = " http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    if(i==0)
    $('.city1').append(' <h3 class="city">' + city +'</h3><img class="icon" src= '+ icon + '> <h3 class="weather">' + weather +'</h3><h3 class="des">' +  des + '</h3> <h3 class="temp">' + temp +  ' C' + '</h3>');
    
    if(i==1)
    $('.city2').append(' <h3 class="city">' + city +'</h3><img class="icon" src= '+ icon + '>  <h3 class="weather">' + weather +'</h3><h3 class="des">' +  des + '</h3> <h3 class="temp">' + temp +  ' C' + '</h3>');

    if(i==2)
    $('.city3').append(' <h3 class="city">' + city +'</h3><img class="icon" src= '+ icon + '>  <h3 class="weather">' + weather +'</h3><h3 class="des">' +  des + '</h3> <h3 class="temp">' + temp +  ' C' + '</h3>');
   
    if(i==3)
    $('.city4').append(' <h3 class="city">' + city +'</h3><img class="icon" src= '+ icon + '>  <h3 class="weather">' + weather +'</h3><h3 class="des">' +  des + '</h3> <h3 class="temp">' + temp +  ' C' + '</h3>');
   
    if(i==4)
    $('.city5').append(' <h3 class="city">' + city +'</h3><img class="icon" src= '+ icon + '>  <h3 class="weather">' + weather +'</h3><h3 class="des">' +  des + '</h3> <h3 class="temp">' + temp +  ' C' + '</h3>');
  
    if(i==5)
    $('.city6').append(' <h3 class="city">' + city +'</h3><img class="icon" src= '+ icon + '>  <h3 class="weather">' + weather +'</h3><h3 class="des">' +  des + '</h3> <h3 class="temp">' + temp +  ' C' + '</h3>');
   

    
 
  // $(".weather").append(weather);
  // $(".city").append(city);
  // $(".icon").append("ICON");
  // $(".des").append(des);
  // $(".temp").append(temp + " c");

  



});
}

