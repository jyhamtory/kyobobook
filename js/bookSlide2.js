$(function () {

  let i = 0;

  // next 버튼 function
  function next() {
    i++;
    if (i > $("#slide2Wrap li:last").index()) {
      i = 0
    }
    $("#slide2Wrap ul").filter(':not(:animated)').stop().animate({ "marginLeft": -310 }, function () {
      $("#slide2Wrap ul").css("margin-left", 0);
      $("#slide2Wrap li:first").appendTo("#slide2Wrap ul");
    });
  }

  function prev() {
    $("#slide2Wrap li:last").prependTo("#slide2Wrap ul");
    $("#slide2Wrap ul").css("margin-left", -310);
    $("#slide2Wrap ul").stop().animate({ "marginLeft": 0 });
  }

  $("#bookSlide2Wrap .leftBtn").click(function () {
    prev();
  });
  $("#bookSlide2Wrap .rightBtn").click(function () {
    next();
  })

  //급상승 api
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "성공" }
  })
    .done(function (msg) {
      $("#slide2Wrap li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let publisher = msg.documents[i].publisher;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;

        if (title.length > 40) {
          var result = title.substring(0, 40) + "...";
        } else {
          var result = title;
        }

        $(this).find(".imgbox")
          .append("<a href='sub.html'><img src='" + img + "'/></a>");

        $(this).find(".textbox")
          .append("<span class='publisher'>" + publisher + "</span>")
          .append("<a href='sub.html'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>");

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });
      });
    })

});