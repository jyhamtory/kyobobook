$(function () {

  // 카테고리 관련
  // default style (첫번째 카테고리에 스타일 적용)
  $("#newTopic .category a:first").addClass("changed");
  $("#newTopic .category a:first").css({ "font-weight": "700", "color": "#474c98" });

  // 카테고리 누르면 수행할 이벤트 
  $("#newTopic .category a").click(function (e) {
    e.preventDefault();
    $("#newTopic .category a").css({ "font-weight": "400", "color": "#767676" });
    $(this).css({ "font-weight": "700", "color": "#474c98" });
    $("#newTopic .category a").removeClass('changed');
    $(this).addClass('changed');
  });

  // 슬라이드 관련
  //default style
  $("#topic1").siblings().hide();

  // 멀티 페이지 (카테고리 누르면 이동)
  $("#newTopic .category li").click(function () {
    let i = $(this).index() + 1;
    $("#topic" + i).show().siblings().hide();
    $("#topic" + i).addClass("now").siblings().removeClass("now");
  });

  // next 버튼 function
  function next() {
    let i = $("#newTopic .now").index() + 1;  //todaySmall 뒤에 들어가는 숫자를 표현하기 위함)  
    $("#topic" + i).stop().animate({ marginLeft: -248 }, function () {
      $("#topic" + i).css("margin-left", 0);
      $("#topic" + i + ">li:first").appendTo("#topic" + i);
    });
  }

  function prev() {
    let i = $("#newTopic .now").index() + 1;
    $("#topic" + i + ">li:last").prependTo("#topic" + i);
    $("#topic" + i).css("margin-left", -248);
    $("#topic" + i).filter(':not(:animated)').stop().animate({ marginLeft: 0 });
  }

  $("#newTopic .leftBtn").click(function () {
    prev();
  });
  $("#newTopic .rightBtn").click(function () {
    next();
  })

  //화제의 신상: 전체
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "불확실" }
  })
    .done(function (msg) {
      $("#topic1 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let salePrice = msg.documents[i].sale_price;
        let salePriceComma = salePrice.toLocaleString();
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
          .append("<a href='sub.html'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>")
          .append("<div class='pricebox'><span class='price'>" + salePriceComma + "</span><span class='won'>원</span></div>");

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });
      });
    })

  //화제의 신상: 외국
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "빛" }
  })
    .done(function (msg) {
      $("#topic2 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let salePrice = msg.documents[i].sale_price;
        let salePriceComma = salePrice.toLocaleString();
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
          .append("<a href='sub.html'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>")
          .append("<div class='pricebox'><span class='price'>" + salePriceComma + "</span><span class='won'>원</span></div>");

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });
      });
    })

  //화제의 신상: 외국
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "apple" }
  })
    .done(function (msg) {
      $("#topic3 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let salePrice = msg.documents[i].sale_price;
        let salePriceComma = salePrice.toLocaleString();
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
          .append("<a href='sub.html'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>")
          .append("<div class='pricebox'><span class='price'>" + salePriceComma + "</span><span class='won'>원</span></div>");

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });

      });
    })

  //화제의 신상: ebook
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "ai" }
  })
    .done(function (msg) {
      $("#topic4 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
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
          .append("<span class='ebook'>eBook</span>")
          .append("<a href='sub.html'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>")

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });

      });
    })

  // 화제의 신상: sam
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "바다" }
  })
    .done(function (msg) {
      $("#topic5 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
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
          .append("<span class='sam'>sam</span>")
          .append("<a href='sub.html'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>")

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });

      });
    })

  //화제의 신상: 핫트랙스
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "고양이" }
  })
    .done(function (msg) {
      $("#topic6 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let salePrice = msg.documents[i].sale_price;
        let salePriceComma = salePrice.toLocaleString();
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;

        if (title.length > 40) {
          var result = title.substring(0, 40) + "...";
        } else {
          var result = title;
        }

        $(this).find(".imgbox")
          .append("<a href='sub.html'><img src='" + img + "' class='hottracks'/></a>");

        $(this).find(".textbox")
          .append("<a href='sub.html'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>")
          .append("<div class='pricebox'><span class='price'>" + salePriceComma + "</span><span class='won'>원</span></div>");

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });
      });
    })

  //화제의 신상: 교보only
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "소설" }
  })
    .done(function (msg) {
      $("#topic7 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;

        if (title.length > 40) {
          var result = title.substring(0, 40) + "...";
        } else {
          var result = title;
        }

        $(this).find(".imgbox")
          .append("<a href='sub.html'><img src='" + img + "' class='hottracks'/></a>");

        $(this).find(".textbox")
          .append("<a href='sub.html'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>")

        $("img").on("error", function () {
          $(this).attr("src", "img/error.png");
        });
      });
    })
});