$(function(){
  
  $("#familyList").hide();

  //패밀리사이트 이벤트

  $("#family").click(function(){
    $(this).toggleClass("changed");
    if($(this).hasClass("changed") === true){
      $("#familyList").slideDown(150);
      $(this).css({"background":"#eaeaea"})
    }else{
      $("#familyList").fadeOut(150);
      $(this).css({"background":"#f7f7f7"})
    }
  })
})