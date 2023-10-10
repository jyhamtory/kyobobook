$(function () {

  $(".bgbox img:first").siblings().hide();
  $("#casting .castingBanner").not(":first").hide();

  let i = 0;

  function next() {
    i++;

    if (i > $(".bgbox img:last").index()) {
      i = 0;
    }
    $("#casting .bgbox img").eq(i).stop().fadeIn(500);
    $("#casting .bgbox img").eq(i - 1).stop().fadeOut(500);
    $(".castingBanner").eq(i).stop().fadeIn(500);
    $(".castingBanner").eq(i - 1).stop().fadeOut(500);
  }

  function prev() {
    $("#casting .bgbox img").eq(i).stop().fadeOut(500);
    $("#casting .bgbox img").eq(i - 1).stop().fadeIn(500);
    $(".castingBanner").eq(i).stop().fadeOut(500);
    $(".castingBanner").eq(i - 1).stop().fadeIn(500);
    i--;
  }

  $("#casting .rightBtn").click(function () {
    next();
  })

  $("#casting .leftBtn").click(function () {
    prev();
  })

  // Post Event
  // hover
  $("#castingPost .innerBox").on({"mouseover":function(){
    $(this).find(".textbox").css("opacity","1");
  }, "mouseout": function(){
    $(this).find(".textbox").css("opacity","0");
  }})


  // 슬라이드
  let j = 0
  $("#castingPost .rightBtn").click(function(){
    j++;
    if(j > $("#castingPost .innerBox:last").index()){
      j = 0;
    }
    $("#castingPostList").stop().animate({"margin-left": -309}, function(){
      $("#castingPostList").css("margin-left", 0);
      $("#castingPostList .innerBox:first").appendTo("#castingPostList");
    });
  });

  $("#castingPost .leftBtn").click(function(){
    $("#castingPostList .innerBox:last").prependTo("#castingPostList");
    $("#castingPostList").css("margin-left", -309);
    $("#castingPostList").stop().animate({"margin-left": 0});

  });

  // json
  $.ajax({
    url: "json/casting.json",
    dataType: "json",
    success: (function (data) {
      $("#casting .castingBanner").each(function (i) {
        let title = data[i].title;
        let by = data[i].by;
        let booktitle = data[i].booktitle;
        let author = data[i].author;
        let bookimg = data[i].bookimg;
        let img = data[i].img;

        $(this)
          .append("<div class='textbox'></div>")
          .append("<div class='contentbox'></div>");

        $(this).find(".textbox")
          .append("<h3 class='title'>" + title + "</h3>")
          .append("<p class='by'>" + by + "</by>");

        $(this).find(".contentbox")
          .append("<div class='castingBook'></div>")
          .append("<div class='castingFloat'></div>");

        $(this).find(".castingBook")
          .append("<img src='" + bookimg + "' class='book'/>")
          .append("<p class='title'>" + booktitle + "</p>")
          .append("<p class='author'>" + author + "</p>");

        $(this).find(".castingFloat")
          .append("<a href='sub.html'><img src='" + img + "'/></a>");
      })
    })
  })

  // Post json2
  $.ajax({
    url:"json/casting.json",
    dataType:"json",
    success: (function(data){
      $("#castingPost .innerBox").each(function(i){
        let plus = $("#casting .castingBanner:last").index();
        let thumbnail = data[i + plus].thumbnail;
        let text = data[i + plus].text;

        $(this)
        .append("<div class='imgbox'></div>")
        .append("<a href='sub.html'><div class='textbox'></div></a>");

        $(this).find(".imgbox")
        .append("<a href='sub.html'><img src='" + thumbnail + "'/></a>");
        
        $(this).find(".textbox")
        .append("<p class ='text'>" + text + "</p>");
      })
    })
  })
});