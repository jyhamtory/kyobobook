$(function(){

  //이 주의 책
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "지식" }
  })
    .done(function (msg) {
      $("#thisWeek .innerBox").each(function (i) {
        i += 5;
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let salePrice = msg.documents[i].sale_price;
        let salePriceComma = salePrice.toLocaleString();

        if (title.length > 40) {
          var result = title.substring(0, 40) + "...";
        } else {
          var result = title;
        }

        $(this).find(".slideImgbox")
          .append("<a href='#'><img src='" + img + "'/></a>");

        $(this).find(".slideTextbox")
          .append("<a href='#'><span class='title'>" + result + "</span></a>")
          .append("<span class='author'>" + authors + "</span>")
          .append("<div class='pricebox'><span class='price'>" + salePriceComma + "</span><span class='won'>원</span></div>");

        $("img").on("error", function () {
          $(this).attr("src", "../img/error.png");
        });
      });
    })
})