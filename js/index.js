$(document).ready(function(){
  let power = false;
  let saberOn =new Audio("http://www.jarrodyellets.com/sounds/saberOn.mp3");
  let saberOff = new Audio("http://www.jarrodyellets.com/sounds/saberOff.mp3");
  let hum = new Audio("http://www.jarrodyellets.com/sounds/hum.wav");
  $(".housing").click(function(){
    power = !power;
    if(power){
      $(this).addClass("rotate");
      setTimeout(function(){
        $(".saber").css("width", "1000px");
        saberOff.pause();
        saberOff.currentTime = 0;
        saberOn.play();
      }, 300);
    } else {
      $(".saber").css("width", "0");
      saberOn.pause();
      saberOn.currentTime = 0;
      saberOff.play();
      setTimeout(function(){
        $(".housing").removeClass("rotate");
      }, 300);
    }
  });
});