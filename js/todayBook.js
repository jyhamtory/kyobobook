$(function () {

  // 카테고리 관련
  // default style (첫번째 카테고리에 스타일 적용)
  $("#todayBook .category a:first").addClass("changed"); // changed 클래스 추가
  $("#todayBook .category a:first").css({ "font-weight": "700", "color": "#474c98" });  // 스타일 추가

  // 카테고리 누르면 수행할 이벤트 
  $("#todayBook .category a").click(function (e) {
    e.preventDefault(); //페이지 이동 막기
    $("#todayBook .category a").css({ "font-weight": "400", "color": "#767676" }); // 나머지는 기본으로
    $(this).css({ "font-weight": "700", "color": "#474c98" }); // 클릭한 것에 스타일 주기 
    $("#todayBook .category a").removeClass('changed');        // 기존의 changed 클래스 삭제
    $(this).addClass('changed');                    // 클릭한 카테고리에 changed 클래스 추가
  });

  // 슬라이드 관련
  //default style
  $(".detailBook ul").find("li").hide();
  $(".detailBook ul").find("li:first").show();
  $("#todayBox1").siblings().hide();
  $("#todaySmall1").siblings().hide();
  
  let i = 0;

  // 멀티 페이지 (카테고리 누르면 이동)
  $("#todayBook .category li").click(function () {
    let num = $(this).index() + 1;  // index는 0부터 시작하는데, id는 1부터 시작하므로 + 1 해주기
    $("#todayBox" + num).show().siblings().hide();
    $("#todayBox" + num).addClass("now").siblings().removeClass("now");
    $("#todaySmall" + num).show().siblings().hide();
    $("#todaySmall" + num).addClass("now").siblings().removeClass("now");
    $("#todaySmall" + num).animate()
  });


  // next 버튼 function
  function next() {
    i++;
    if (i > $(".detailBook .now li:last").index()) {
      i = 0
    }
    $(".detailBook .now li:first").stop().fadeOut(500);
    $(".detailBook .now li").eq(i).stop().fadeIn(500);
    $(".detailBook .now li").eq(i - 1).stop().fadeOut(500);

    let j = $(".thumbBook .now").index() + 1;  //todaySmall 뒤에 들어가는 숫자를 표현하기 위함)  
    $("#todaySmall" + j).stop().animate({ left: -300 }, function () {
      $("#todaySmall" + j).css("left", -140);
      $("#todaySmall" + j + ">li:first").appendTo("#todaySmall" + j);
    });
  }

  function prev() {
    if (i < -5) {
      i = 0;
    }

    $(".detailBook .now li").eq(i).stop().fadeOut(500);
    $(".detailBook .now li").eq(i - 1).stop().fadeIn(500);
    i--;

    let j = $(".thumbBook .now").index() + 1;
    $("#todaySmall" + j + ">li:last").prependTo("#todaySmall" + j);
    $("#todaySmall" + j).css("left", -300);
    $("#todaySmall" + j).stop().animate({ left: -140 });
  }

  $(".bookWrap .leftBtn").click(function () {
    prev();
  });
  $(".bookWrap .rightBtn").click(function () {
    next();
  })

  //todayBook api: 전체
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "밤" }
  })
    .done(function (msg) {
      $("#todayBox1 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let content = msg.documents[i].contents;
        let index1 = content.indexOf(".") + 1;
        let index2 = content.indexOf(".", 80) + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let comment = content.substring(0, index1);
        let commentDesc = content.substring(0, index2);

        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((price - salePrice) / price) * 100);  // 할인율 계산
        let priceString = salePrice.toLocaleString("ko-KR"); // 3자리마다 콤마 찍기 
        
        if (title.length > 40) {
          var result = title.substring(0, 40) + "...";
        } else {
          var result = title;
        }

        $(this).find(".imgbox img").attr("src", img)
          .wrap("<a href='#'></a>");

        $(this).find(".textbox")
          .prepend("<p class='mdCommentDesc'>" + authors + "</p>")
          .prepend("<h3 class='name'>" + "<a href='#'>" + result + "</a>" + "</h3>")
          .append("<p class='mdComment'>" + comment + "</p>")
          .append("<p class='mdCommentDesc'>" + commentDesc + "</p>");

        $(this).find(".pricebox")
          .append("<span class='sale'>" + persent + "%</span>")
          .append("<span class='val'>" + priceString + "</span>")
          .append("<span class='won'>원</span>");
      });

      $("#todaySmall1 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let titleSlice = title.substring(0, 25);

        $(this)
          .append("<a href='#'><img src= '" + img + "' /></a>")
          .append("<p><a href='#'>" + titleSlice + "</a></p>");
      });

      $("img").on("error", function () {
        $(this).attr("src", "img/error.png");
      });
    })

  //todayBook api: 국내
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "오늘" }
  })
    .done(function (msg) {
      $("#todayBox2 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let content = msg.documents[i].contents;
        let index1 = content.indexOf(".") + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let index2 = content.indexOf(".", 80) + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let comment = content.substring(0, index1);
        let commentDesc = content.substring(0, index2);

        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((salePrice - price) / price) * -100);  // 할인율 계산
        let priceString = salePrice.toLocaleString("ko-KR"); // 3자리마다 콤마 찍기 

        $(this).find(".imgbox img").attr("src", img)
          .wrap("<a href='#'></a>");

        $(this).find(".textbox")
          .prepend("<p class='mdCommentDesc'>" + authors + "</p>")
          .prepend("<h3 class='name'>" + "<a href='#'>" + title + "</a>" + "</h3>")
          .append("<p class='mdComment'>" + comment + "</p>")
          .append("<p class='mdCommentDesc'>" + commentDesc + "</p>");

        $(this).find(".pricebox")
          .append("<span class='sale'>" + persent + "%</span>")
          .append("<span class='val'>" + priceString + "</span>")
          .append("<span class='won'>원</span>");
      });

      $("#todaySmall2 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let titleSlice = title.substring(0, 25);

        $(this)
          .append("<a href='#'><img src= '" + img + "' /></a>")
          .append("<p><a href='#'>" + titleSlice + "</a></p>");
      });

      $("img").on("error", function () {
        $(this).attr("src", "img/error.png");
      });
      
    })


  //todayBook api: 외국
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "american" }
  })
    .done(function (msg) {
      $("#todayBox3 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let content = msg.documents[i].contents;
        let index1 = content.indexOf(".") + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let index2 = content.indexOf(".", 80) + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let comment = content.substring(0, index1);
        let commentDesc = content.substring(0, index2);

        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((salePrice - price) / price) * -100);  // 할인율 계산
        let priceString = salePrice.toLocaleString("ko-KR"); // 3자리마다 콤마 찍기 

        $(this).find(".imgbox img").attr("src", img)
          .wrap("<a href='#'></a>");

        $(this).find(".textbox")
          .prepend("<p class='mdCommentDesc'>" + authors + "</p>")
          .prepend("<h3 class='name'>" + "<a href='#'>" + title + "</a>" + "</h3>")
          .append("<p class='mdComment'>" + comment + "</p>")
          .append("<p class='mdCommentDesc'>" + commentDesc + "</p>");

        $(this).find(".pricebox")
          .append("<span class='sale'>" + persent + "%</span>")
          .append("<span class='val'>" + priceString + "</span>")
          .append("<span class='won'>원</span>");
      });
      $("#todaySmall3 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let titleSlice = title.substring(0, 25);

        $(this)
          .append("<a href='#'><img src= '" + img + "' /></a>")
          .append("<p><a href='#'>" + titleSlice + "</a></p>");
      });
    })


  //todayBook api: ebook
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "마음" }
  })
    .done(function (msg) {
      $("#todayBox4 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let content = msg.documents[i].contents;
        let index1 = content.indexOf(".") + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let index2 = content.indexOf(".", 80) + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let comment = content.substring(0, index1);
        let commentDesc = content.substring(0, index2);

        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((salePrice - price) / price) * -100);  // 할인율 계산
        let priceString = salePrice.toLocaleString("ko-KR"); // 3자리마다 콤마 찍기 

        $(this).find(".imgbox img").attr("src", img)
          .wrap("<a href='#'></a>");

        $(this).find(".textbox")
          .prepend("<p class='mdCommentDesc'>" + authors + "</p>")
          .prepend("<h3 class='name'>" + "<a href='#'>" + title + "</a>" + "</h3>")
          .append("<p class='mdComment'>" + comment + "</p>")
          .append("<p class='mdCommentDesc'>" + commentDesc + "</p>");

        $(this).find(".pricebox")
          .append("<span class='sale'>" + persent + "%</span>")
          .append("<span class='val'>" + priceString + "</span>")
          .append("<span class='won'>원</span>");
      });
      $("#todaySmall4 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let titleSlice = title.substring(0, 25);

        $(this)
          .append("<a href='#'><img src= '" + img + "' /></a>")
          .append("<p><a href='#'>" + titleSlice + "</a></p>");
      });

      $("img").on("error", function () {
        $(this).attr("src", "img/error.png");
      });
    })

  //todayBook api: sam
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "공부" }
  })
    .done(function (msg) {
      $("#todayBox5 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let content = msg.documents[i].contents;
        let index1 = content.indexOf(".") + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let index2 = content.indexOf(".", 80) + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let comment = content.substring(0, index1);
        let commentDesc = content.substring(0, index2);

        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((salePrice - price) / price) * -100); // 할인율 계산
        let priceString = salePrice.toLocaleString("ko-KR"); // 3자리마다 콤마 찍기 

        $(this).find(".imgbox img").attr("src", img)
          .wrap("<a href='#'></a>");

        $(this).find(".textbox")
          .prepend("<p class='mdCommentDesc'>" + authors + "</p>")
          .prepend("<h3 class='name'>" + "<a href='#'>" + title + "</a>" + "</h3>")
          .append("<p class='mdComment'>" + comment + "</p>")
          .append("<p class='mdCommentDesc'>" + commentDesc + "</p>");

        $(this).find(".pricebox")
          .append("<span class='sale'>" + persent + "%</span>")
          .append("<span class='val'>" + priceString + "</span>")
          .append("<span class='won'>원</span>");
      });
      $("#todaySmall5 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let titleSlice = title.substring(0, 25);

        $(this)
          .append("<a href='#'><img src= '" + img + "' /></a>")
          .append("<p><a href='#'>" + titleSlice + "</a></p>");
      });

      $("img").on("error", function () {
        $(this).attr("src", "img/error.png");
      });
    })

  //todayBook api: 핫트랙스
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "플래너", sort: "latest" }
  })
    .done(function (msg) {
      $("#todayBox6 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let content = msg.documents[i].contents;
        let index1 = content.indexOf(".") + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let index2 = content.indexOf(".", 80) + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let comment = content.substring(0, index1);
        let commentDesc = content.substring(0, index2);

        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((salePrice - price) / price) * -100);  // 할인율 계산
        let priceString = salePrice.toLocaleString("ko-KR"); // 3자리마다 콤마 찍기 

        $(this).find(".imgbox img").attr("src", img)
          .wrap("<a href='#'></a>");

        $(this).find(".textbox")
          .prepend("<p class='mdCommentDesc'>" + authors + "</p>")
          .prepend("<h3 class='name'>" + "<a href='#'>" + title + "</a>" + "</h3>")
          .append("<p class='mdComment'>" + comment + "</p>")
          .append("<p class='mdCommentDesc'>" + commentDesc + "</p>");

        $(this).find(".pricebox")
          .append("<span class='sale'>" + persent + "%</span>")
          .append("<span class='val'>" + priceString + "</span>")
          .append("<span class='won'>원</span>");
      });
      $("#todaySmall6 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let titleSlice = title.substring(0, 25);

        $(this)
          .append("<a href='#'><img src= '" + img + "' /></a>")
          .append("<p><a href='#'>" + titleSlice + "</a></p>");
      });

      $("img").on("error", function () {
        $(this).attr("src", "img/error.png");
      });
    })

  //todayBook api: 교보Only
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "컬러링" }
  })
    .done(function (msg) {
      $("#todayBox7 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let content = msg.documents[i].contents;
        let index1 = content.indexOf(".") + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let index2 = content.indexOf(".", 80) + 1; // 80자 이후 첫번째 온점 찍힌 곳까지 출력 
        let comment = content.substring(0, index1);
        let commentDesc = content.substring(0, index2);

        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((salePrice - price) / price) * -100);  // 할인율 계산
        let priceString = salePrice.toLocaleString("ko-KR"); // 3자리마다 콤마 찍기 

        $(this).find(".imgbox img").attr("src", img)
          .wrap("<a href='#'></a>");

        $(this).find(".textbox")
          .prepend("<p class='mdCommentDesc'>" + authors + "</p>")
          .prepend("<h3 class='name'>" + "<a href='#'>" + title + "</a>" + "</h3>")
          .append("<p class='mdComment'>" + comment + "</p>")
          .append("<p class='mdCommentDesc'>" + commentDesc + "</p>");

        $(this).find(".pricebox")
          .append("<span class='sale'>" + persent + "%</span>")
          .append("<span class='val'>" + priceString + "</span>")
          .append("<span class='won'>원</span>");
      });
      $("#todaySmall7 li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let titleSlice = title.substring(0, 25);

        $(this)
          .append("<a href='#'><img src= '" + img + "' /></a>")
          .append("<p><a href='#'>" + titleSlice + "</a></p>");
      });
      
      $("img").on("error", function () {
        $(this).attr("src", "img/error.png");
      });
    })
});