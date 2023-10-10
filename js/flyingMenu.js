$(function () {

  let i = 0;

  // 슬라이드
  function next() {
    i++;
    if (i > $("#flyingBanner li:last").index()) {
      i = 0
    }
    $("#flyingBanner ul").filter(':not(:animated)').stop().animate({ "marginLeft": -84 }, function () {
      $("#flyingBanner ul").css("margin-left", 0);
      $("#flyingBanner li:first").appendTo("#flyingBanner ul");
    });

    index();
  }

  function prev() {
    if(i <= 0){
      i = 5;
    }
    $("#flyingBanner li:last").prependTo("#flyingBanner ul");
    $("#flyingBanner ul").css("margin-left", -84);
    $("#flyingBanner ul").stop().animate({ "marginLeft": 0 });
    i--;
    index();
  }

  $("#flyingMenu .leftBtn").click(function () {
    prev();
  });
  $("#flyingMenu .rightBtn").click(function () {
    next();
  });

  //인덱스
  function index(){
    $("#flyingMenu .now").text(i + 1);
    $("#flyingMenu .total").text($("#flyingBannerList li:last").index() + 1);
  }

  index();

  //top버튼
  $("#topBtn").click(function(){
    $("html").animate({scrollTop:0}, 400);
  })
  
  //top버튼, flyingMenu 스크롤 이벤트
  $(window).scroll(function(){
    let winScroll = $(window).scrollTop();
    let winWidth = $(window).innerWidth();

    if(winWidth > 1023){
      if($("#flyingMenu").hasClass("sub") === false){
        if(winScroll > 900){
          $("#flyingMenu").addClass("fixed");
          $("#topBtn").fadeIn();
        }else{
          $("#flyingMenu").removeClass("fixed");
          $("#topBtn").fadeOut();
        }
      }else{
        if(winScroll > 300){
          $("#flyingMenu").addClass("fixed");
          $("#topBtn").fadeIn();
        }else{
          $("#flyingMenu").removeClass("fixed");
          $("#topBtn").fadeOut();
        }
      }
    }
  })

  $("#popupAd .closeBtn").click(function(){
    $("#popupAd").hide();
  })
});