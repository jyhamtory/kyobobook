$(function(){
  $("#category .list").hover(function(){
    $(this).find("p").addClass("bold").stop();
    $(this).find(".categoryBox").stop().fadeIn(150);
  }, function(){
    $(this).find("p").removeClass("bold").stop();
    $(this).find(".categoryBox").stop().fadeOut(150);
  })
})