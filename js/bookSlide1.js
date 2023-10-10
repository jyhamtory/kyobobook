$(function () {

  let i = 0;

  // next 버튼 function
  function next() {
    i++;
    if (i > $("#slide1Wrap li:last").index()) {
      i = 0
    }
    $("#slide1Wrap ul").filter(':not(:animated)').stop().animate({ "marginLeft": -310 }, function () {
      $("#slide1Wrap ul").css("margin-left", 0);
      $("#slide1Wrap li:first").appendTo("#slide1Wrap ul");
    });
  }

  function prev() {
    $("#slide1Wrap li:last").prependTo("#slide1Wrap ul");
    $("#slide1Wrap ul").css("margin-left", -310);
    $("#slide1Wrap ul").stop().animate({ "marginLeft": 0 });
  }

  $("#bookSlide1Wrap .leftBtn").click(function () {
    prev();
  });
  $("#bookSlide1Wrap .rightBtn").click(function () {
    next();
  })

  //급상승 api
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "불확실" }
  })
    .done(function (msg) {
      $("#slide1Wrap li").each(function (i) {
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
          .append("<a href='#'><img src='" + img + "'/></a>");

        $(this).find(".textbox")
          .append("<span class='publisher'>" + publisher + "</span>")
          .append("<a href='#'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>");

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });
      });
    })

});