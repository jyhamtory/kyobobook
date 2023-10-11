$(function(){

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "에세이" }
  })
    .done(function (msg) {
      $("#bestRank li").each(function (i) {
        let rank = i + 1;
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((price - salePrice)/price)*100);
        let priceString = salePrice.toLocaleString();

        $(this)
        .append("<div class='imgbox'></div>")
        .append("<div class='textbox'></div>");

        $(this).find(".imgbox")
        .append("<a href='#'><img src='" + img + "'/></a>");

        $(this).find(".textbox")
        .append("<span class='ranking'>" + rank + "</span>")
        .append("<p class='booktitle'><a href='#'>" + title + "</a></p>")
        .append("<p class='author'>" + authors + "</p>")
        .append("<p class='price'><span class='persent'>" + persent + "%</span>" + priceString + "<span class='won'>" + "원</span></p>")
      })
  })

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c72c7e6a56fdb9c8c2e3dae655e0d4e8" },
    data: { query: "에세이" }
  })
    .done(function (msg) {
      $("#newRank li").each(function (i) {
        let img = msg.documents[i].thumbnail;
        let title = msg.documents[i].title;
        let authors = msg.documents[i].authors;
        let price = msg.documents[i].price;
        let salePrice = msg.documents[i].sale_price;
        let persent = parseInt(((price - salePrice)/price)*100);
        let priceString = salePrice.toLocaleString();

        $(this)
        .append("<div class='imgbox'></div>")
        .append("<div class='textbox'></div>");

        $(this).find(".imgbox")
        .append("<a href='#'><img src='" + img + "'/></a>");

        $(this).find(".textbox")
        .append("<p class='booktitle'><a href='#'>" + title + "</a></p>")
        .append("<p class='author'>" + authors + "</p>")
        .append("<p class='price'><span class='persent'>" + persent + "%</span>" + priceString + "<span class='won'>" + "원</span></p>")
      })
  })
})