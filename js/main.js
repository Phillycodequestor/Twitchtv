$(document).ready(function(){
  

  var html = "";
  
  
  var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
  

  
  arr.forEach(function(val){
  
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + val + "?callback=?", function(data){

    
    ///////////////IF////////////    
    if(data.stream != null){
      html += "<div class='text-center online'><img alt='logo' src='" + data.stream.channel.logo + "'><br><a target='_blank' href='" + data.stream.channel.url + "'>" + data.stream.channel.display_name + "</a><br><p>" + data.stream.channel.status + "</p></div><br>";
      }
//////////////////////////////////    
    
//////////////////ELSE/////////////    
    else{
      $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + val + "?callback=?", function(data){
     html += "<div class='text-center offline'><img alt='logo' src='" + data.logo + "'><br><a target='_blank' href='" + data.url + "'>" + data.display_name + "</a><br><p>Offline</p></div><br>";
        
      });
      
    }
/////////////////////////////    
    
      
      }); ////////EVALUATOR/////
    
  }); //////FOR EACH/////
 setTimeout(function () {
      $("#box").html(html);
 }, 1000);

$("#online").click(function(){
  $(".online").show(5, function(){
    $(".offline").hide(5);
  });
});
  
  $("#offline").click(function(){
    $(".offline").show(5, function(){
      $(".online").hide(5);
    });
  });


}); ///////DOC READY////

