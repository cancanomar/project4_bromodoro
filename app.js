$(document).ready(function(){
  var alarm = $("#alarm")[0];
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  // console.log(count);
  $("#reset").hide();
$("#start").click(function(){
  var counter = setInterval(timer, 1000);

  function timer (){
    //hide variables
    $("#start, #minus5clock, #plus5clock, #minus5Break, #plus5Break, #breakNum, #title1, #title2").hide();
    $("timeType").html("Time Left: ");
    count -=1;
    if (count === 0) {
      alarm.play();
      clearInterval(counter)
      var startBreak= setInterval(breakTimer, 1000);
      $("#num").hide();
    }
    $("#num").html(count);

    function breakTimer() {
      $("#timeType").html("Break Time: ");
      $("#breakNum").show();
      breakTime -=1;
      if (breakTime === 0) {
        clearInterval(startBreak);
        alarm.play();
      }
      $("#breakNum").html(breakTime);
    }
  }

});

  //session time
  $("#plus5clock").click(function(){
    if (count>5){
      count +=5;
      $("#num").html(count);
      console.log(count);
    }
  });

  $("#minus5clock").click(function(){
    if (count>5){
      count -=5;
      $("#num").html(count);
      console.log(count);
    }
  });

  //break time
  $("#plus5Break").click(function(){
    if (breakTime>5){
      breakTime +=5;
      $("#breakNum").html(breakTime);
      console.log(breakTime);
    }
  });

  $("#minus5Break").click(function(){
    if (breakTime>5){
      breakTime -=5;
      $("#breakNum").html(breakTime);

    }
  });

});
