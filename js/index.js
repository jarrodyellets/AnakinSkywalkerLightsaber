$(document).ready(function(){
  let power = false;
  let saberOn =new Audio("http://www.jarrodyellets.com/sounds/saberOn.mp3");
  let saberOff = new Audio("http://www.jarrodyellets.com/sounds/saberOff.mp3");
  $(".housing").click(function(){
    power = !power;
    if(power){
      $(this).addClass("rotate");
      setTimeout(function(){
        $(".saber").css("width", "1000px");
        $(".saber").addClass("saberFlicker");
        saberOff.pause();
        saberOff.currentTime = 0;
        saberOn.play();
      }, 300);
    } else {
      $(".saber").css("width", "0");
      $(".saber").removeClass("saberFlicker");
      saberOn.pause();
      saberOn.currentTime = 0;
      saberOff.play();
      setTimeout(function(){
        $(".housing").removeClass("rotate");
      }, 300);
    }
  });
});