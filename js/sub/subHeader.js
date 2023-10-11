
$(function () {
    //li의 자식태그로 a 태그 추가 및 삭제 
    $("ul>li").wrapInner("<a href='#'></a>");
    $("#imgBar .sub").unwrap(); 
    $("#serviceSub").unwrap(); 
    $("#bannerControl").find("span").unwrap();
    $("#bannerControl").find("img").unwrap();
    $("#todayBook .detailBook").find(".imgbox").unwrap();
    $("#slide1Wrap").find(".imgbox").unwrap();
    $("#topicWrap").find("div").unwrap();
    $("#slide2Wrap").find(".imgbox").unwrap();
    $("#categoryList").find("p").unwrap();
    $("#with").find(".imgbox").unwrap();
    $("#introAwards").find("span").unwrap();
    $("#introAwards .categoryList").find("li:first").wrapInner("<a href='#'></a>")
  
  // TopBanner 끄기
  $("#topBanner .closeBtn").mouseover(function () {
    $(".closeBtn").css("cursor", "pointer");
  }).click(function () {
    $("#topBanner").hide();
  });

  //브랜드 더보기 toggle
  $("#imgBar .more").click(function () {
    $("#imgBar .sub").toggle();
    $(this).toggleClass("rotation");
  });

  //브랜드 더보기 sub 효과
  $(".sub a").hover(function () {
    $(this).find("span").css("border-bottom", "1px solid #595959");
  }, function () {
    $(this).find("span").css("border-bottom", "none");
  });

  //회원혜택 toggle
  $(".member").click(function () {
    $("#serviceSub").toggle();
    $(this).toggleClass("rotation");
  });

  //회원혜택 sub 효과
  $("#serviceSub a").hover(function () {
    $(this).find("span").css("border-bottom", "1px solid #595959");
  }, function () {
    $(this).find("span").css("border-bottom", "none");
  });

  // navSubPlus toggle
  $("#plusBtn").click(function (e) {
    e.preventDefault();
    $("#navSubPlus").toggle();
    if ($("#plusBtn img").attr("src") == "img/icon/nav_more.png") {
      $("#plusBtn img").attr("src", "img/icon/nav_more_click.png");
    } else {
      $("#plusBtn img").attr("src", "img/icon/nav_more.png");
    }
  });


  //navAll
  //default
  $("#navMenu li").not(":first").css({ "background-color": "#f2f2f2" });
  $("#navMenu li a").not(":first").css({ "color": "#767676" });
  $("#navTab li a:first").css({ "color": "#000", "font-weight": "600", "border-bottom": "2px solid #000", "padding-bottom": "14px" });
  $(".innerMenu").siblings().hide();
  $(".show").show();
  $("#navSubBox").hide();


  //네비게이션 toggle
  $("#navAll button").on({
    "mouseover": function () {
      $(this).css("cursor", "pointer");
    }, 
    "click": function () {
      if ($(this).hasClass("hide") === true) {
        $("#navSubBox").fadeIn("fast");
        $(this).removeClass("hide");
        $(this).find("img").attr("src", "img/icon/nav_close.png");
      }else{
        $("#navSubBox").hide();
        $(this).addClass("hide");
        $(this).find("img").attr("src", "img/icon/nav_open.png");
      }
    }
  })

  // 첫번째 카테고리
  $("#navMenu li").click(function(e){
    e.preventDefault();
    $(this).css("background-color", "#fff");
    $(this).children("a").css("color", "#000");

    $("#navMenu li").not(this).css("background-color", "#f2f2f2");
    $("#navMenu li").not(this).children("a").css("color", "#767676");

    let i = $(this).index();

    if(i === 0){
      $(".categoryAll").show();
      $(".serviceAll").hide();
    }else if(i === 1){
      $(".serviceAll").show();
      $(".categoryAll").hide();
    }
  })

  // 두번째 카테고리 
  $("#navTab li").click(function (e) {
    e.preventDefault();
    $("#navTab li a").css({ "color": "#747474", "font-weight": "400", "border-bottom": "none", "padding-bottom": "0" });
    $(this).children("a").css({ "color": "#000", "font-weight": "600", "border-bottom": "2px solid #000", "padding-bottom": "14px" });

    let i = $(this).index();
    $(".navInnerBox").hide();
    $(".navInnerBox").eq(i).show();
  });


  // 왼쪽 카테고리 - 교보문고
  $(".kyoboMenu li").click(function (e) {
    e.preventDefault();
    $(this).addClass("kyobo").siblings().removeClass("kyobo");

    let i = $(this).index() + 1;
    $(".kyoboBox .navInnerTop").children("div").eq(i).show().siblings().hide();
    $(".kyoboBox .navInnerTop").children("div").eq(0).show(); //카테고리
  });

  // 왼쪽 카테고리 - eBook
  $(".ebookMenu li").click(function (e) {
    e.preventDefault();
    $(this).addClass("ebooksam").siblings().removeClass("ebooksam");

    let i = $(this).index() + 1;
    $(".ebookBox .navInnerTop").children("div").eq(i).show().siblings().hide();
    $(".ebookBox .navInnerTop").children("div").eq(0).show();
  });

  // 왼쪽 카테고리 - sam
  $(".samMenu li").click(function (e) {
    e.preventDefault();
    $(this).addClass("ebooksam").siblings().removeClass("ebooksam");

    let i = $(this).index() + 1;
    $(".samBox .navInnerTop").children("div").eq(i).show().siblings().hide();
    $(".samBox .navInnerTop").children("div").eq(0).show();
  });

  // 왼쪽 카테고리 - 핫트랙스
  $(".hotMenu li").click(function (e) {
    e.preventDefault();
    $(this).addClass("hot").siblings().removeClass("hot");

    let i = $(this).index() + 1;
    $(".hotBox .navInnerTop").children("div").eq(i).show().siblings().hide();
    $(".hotBox .navInnerTop").children("div").eq(0).show();
  });

  //스크롤 이벤트
  $(window).scroll(function(){
    let winScroll = $(window).scrollTop();
    let winWidth = $(window).innerWidth();
    let height = $("header").outerHeight();
    let height2 = $("#sectionWrap").offset().top - 80;
    let bookcard = $("#bookcard").offset().top - 140;
    let infobook = $("#infoBook img").offset().top -140;
    let review = $("#review").offset().top - 140;

    if(winWidth > 1023){
      if(height < winScroll){
        $("main").css({"padding-top": "278px"});
        $("header").addClass("fixed");
        $("#topBanner").hide();
        $("#serviceMall").hide();
        $("nav").addClass("changed");
        $("#navAll").show();
        $("#navList").hide();
        $("#navSubList").hide();
        $("#navAll").addClass("changed");
        $("#navSubBox").addClass("changed");
        $(".logobox").addClass("changed");
        $("#searchBox").addClass("changed");
        $("#searchSelect").addClass("changed");
        $("#searchInputBox").addClass("changed");
        $("#userMenu").addClass("changed");
      }

      if(height + 30 >= winScroll || height2 <= winScroll){
        $("header").removeClass("fixed");
        $("main").css({"padding-top": "0px"});
        $("#topBanner").show();
        $("#serviceMall").show();
        $("nav").removeClass("changed");
        $("#navAll").show();
        $("#navList").show();
        $("#navSubList").show();
        $("#navAll").removeClass("changed");
        $("#navSubBox").removeClass("changed");
        $(".logobox").removeClass("changed");
        $("#searchBox").removeClass("changed");
        $("#searchSelect").removeClass("changed");
        $("#searchInputBox").removeClass("changed");
        $("#userMenu").removeClass("changed");
      }

      if(height2 <= winScroll){
        $("#innerTab").addClass("fixed");
        $("#bookcard").addClass("fixed");
        if(winScroll < bookcard){
          $("#innerTab li a").removeClass("changed");
        }
        if(winScroll > bookcard){
          $("#innerTab li a").removeClass("changed");
          $("#innerTab a").eq(0).addClass("changed");
        }
        if(winScroll > infobook){
          $("#innerTab li a").removeClass("changed");
          $("#innerTab a").eq(1).addClass("changed");
        }
        if(winScroll > review){
          $("#innerTab li a").removeClass("changed");
          $("#innerTab a").eq(2).addClass("changed");
        }
      }else if(height2 > winScroll){
        $("#innerTab").removeClass("fixed");
        $("#bookcard").removeClass("fixed");
      }
    }
  })

  $("#innerTab li").click(function(){
    let event = $("#bookcard").offset().top -130
    let info = $("#infoBook").offset().top -130
    let review = $("#review").offset().top -130

    if($(this).index() === 0){
      $("html").animate({scrollTop:event}, 400);
    }else if($(this).index() === 1){
      $("html").animate({scrollTop:info}, 400);
    }else if($(this).index() === 2){
      $("html").animate({scrollTop:review}, 400);
    }
  })
});