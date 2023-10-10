$(function () {
  $("#bannerSlider li").not(":first").hide();

  // 메인슬라이드
  var i = 0;

  // 슬라이드 자동재생 (다음으로 이동)
  function next() {
    i++;
    if (i > $("#bannerSlider li:last").index()) {
      i = 0;
    }
    $("#bannerSlider li").eq(i).stop().fadeIn(1000);
    $("#bannerSlider li").eq(i - 1).stop().fadeOut(1000);
    index();
    count();
  }

  // 이전으로 이동 
  function prev() {
    if(i <= 0){
      i = 23;
    }
    $("#bannerSlider li").eq(i).stop().fadeOut(1000);
    $("#bannerSlider li").eq(i - 1).stop().fadeIn(1000);
    i--;
    index();
    count();
  }

  // 배너 컨트롤러
  function control() {
    $("#bannerControl li").mouseenter(function () {
      $(this).css("cursor", "pointer");
    });

    $("#bannerControl span").click(function () {
      $("#bannerControl span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $(this).css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    });

    // 카테고리 누르면 해당 카테고리의 첫 번째 배너로 이동, 인덱스 변경 
    $("#bannerControl .hot").click(function () {
      $("#bannerSlider li").eq(i).stop().fadeOut(1000);
      i = 0;
      $("#bannerSlider li").eq(i).stop().fadeIn(1000);
      count();
    });

    $("#bannerControl .theseDay").click(function () {
      $("#bannerSlider li").eq(i).stop().fadeOut(1000);
      i = 4;
      $("#bannerSlider li").eq(i).stop().fadeIn(1000);
      count();
    });

    $("#bannerControl .new").click(function () {
      $("#bannerSlider li").eq(i).stop().fadeOut(1000);
      i = 6;
      $("#bannerSlider li").eq(i).stop().fadeIn(1000);
      count();
    });

    $("#bannerControl .exhibition").click(function () {
      $("#bannerSlider li").eq(i).stop().fadeOut(1000);
      i = 9;
      $("#bannerSlider li").eq(i).stop().fadeIn(1000);
      count();
    });

    $("#bannerControl .eBook").click(function () {
      $("#bannerSlider li").eq(i).stop().fadeOut(1000);
      i = 13;
      $("#bannerSlider li").eq(i).stop().fadeIn(1000);
      count();
    });

    $("#bannerControl .sam").click(function () {
      $("#bannerSlider li").eq(i).stop().fadeOut(1000);
      i = 17;
      $("#bannerSlider li").eq(i).stop().fadeIn(1000);
      count();
    });

    $("#bannerControl .hottracks").click(function () {
      $("#bannerSlider li").eq(i).stop().fadeOut(1000);
      i = 19;
      $("#bannerSlider li").eq(i).stop().fadeIn(1000);
      count();
    });

    $("#bannerControl .talk").click(function () {
      $("#bannerSlider li").eq(i).stop().fadeOut(1000);
      i = 22;
      $("#bannerSlider li").eq(i).stop().fadeIn(1000);
      count();
    });

    // left 버튼 누르면 이전으로 이동
    $("#bannerControl .left").click(function () {
      prev();
    });

    // right 버튼 누르면 다음으로 이동
    $("#bannerControl .right").click(function () {
      next();
    });

    //pause 누르면 슬라이드 멈추고 play 아이콘으로 변경 / play 누르면 슬라이드 다시 시작하고 pause 아이콘으로 변경
    $("#pause").mouseenter(function(){
      $("#pause").css("cursor", "pointer");
    }).click(function(){
      if($(this).css("margin-top") == "30px"){
        $(this).css("margin-top", "-30px");
        clearInterval(play);
      }else{
        $(this).css("margin-top", "30px");
        play = setInterval(next, 8000);
      }
    })
  }

  // 해당 카테고리 굵게
  function index() {
    if (i == 0) {
      $("#bannerControl li span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $("#bannerControl li").eq(0).find("span").css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    }

    if (i == 4) {
      $("#bannerControl li span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $("#bannerControl li").eq(1).find("span").css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    }

    if (i == 6) {
      $("#bannerControl li span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $("#bannerControl li").eq(2).find("span").css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    }

    if (i == 9) {
      $("#bannerControl li span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $("#bannerControl li").eq(3).find("span").css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    }

    if (i == 13) {
      $("#bannerControl li span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $("#bannerControl li").eq(4).find("span").css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    }

    if (i == 17) {
      $("#bannerControl li span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $("#bannerControl li").eq(5).find("span").css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    }

    if (i == 19) {
      $("#bannerControl li span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $("#bannerControl li").eq(6).find("span").css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    }

    if (i == 22) {
      $("#bannerControl li span").css({ "border-bottom": "none", "color": "#767676", "font-weight": "500", "padding-bottom": "0px" });
      $("#bannerControl li").eq(7).find("span").css({ "border-bottom": "2px solid #000", "color": "#000", "font-weight": "700", "padding-bottom": "22px" });
    }
  }

  // 인덱스 세는 함수 
  function count() {
    $("#total").text($("#bannerSlider li:last").index() + 1);
    $("#index").text(i + 1);
  }

  play = setInterval(next, 6000);
  control();
  count();

});