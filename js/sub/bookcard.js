$(function(){
  $("#bookcardSlide").hover(function(){
    $(this).find("button").stop().fadeIn(300);
  },function(){
    $(this).find("button").stop().fadeOut(300);
  });

  let i = 0;
  function next() {
    i++;
    if (i > $("#bookcardSlide li:last").index()) {
      i = 0
    }
    $("#bookcardSlide ul").animate({ "marginLeft": -418 }, function () {
      $("#bookcardSlide ul").css("margin-left", 0);
      $("#bookcardSlide li:first").appendTo("#bookcardSlide ul");
    });
  }

  function prev() {
    $("#bookcardSlide li:last").prependTo("#bookcardSlide ul");
    $("#bookcardSlide ul").css("margin-left", -418);
    $("#bookcardSlide ul").stop().animate({ "marginLeft": 0 });
  }

  $("#bookcardSlide .leftBtn").click(function(){
    prev();
  })

  $("#bookcardSlide .rightBtn").click(function(){
    next();
  })
});