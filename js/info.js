$(function(){
  /*책 소개*/
  $.get("../txt/introText.txt", function(data){
    $("#introText").html(data);
  });

  $.get("../txt/authorInfo.txt", function(data){
    $("#authorInfo").html(data);
  });

  $.get("../txt/index.txt", function(data){
    $("#indexText").html(data);
  });
  
  $.get("../txt/inBook.txt", function(data){
    $("#inBookText").html(data);
  })

  $.get("../txt/publisherWrite.txt", function(data){
    $("#publisherText").html(data);
  })

  /*하트 클릭*/
  $(".fa-heart").click(function(){
    if($(this).hasClass("fa-regular")){
      $(this).hide();
      $("#author .fill").fadeIn();
    }else{
      $(this).hide();
      $("#author .null").show();
    }
  })

  /*작가정보 펼치기 클릭*/
  $("#author .moreView button").click(function(){
    if($(this).hasClass("showBtn") === true){
      $("#author .showBtn").hide();
      $("#author .hideBtn").show();
      $("#authorInfo").removeClass("hide");
    }else{
      $("#author .showBtn").show();
      $("#author .hideBtn").hide();
      $("#authorInfo").addClass("hide");
    }
  })

  /*목차 펼치기 클릭*/
  $("#index .moreView button").click(function(){
    if($(this).hasClass("showBtn") === true){
      $("#index .showBtn").hide();
      $("#index .hideBtn").show();
      $("#indexText").removeClass("hide");
    }else{
      $("#index .showBtn").show();
      $("#index .hideBtn").hide();
      $("#indexText").addClass("hide");
    }
  })

  /*책속에서 펼치기 클릭*/
  $("#inBook .moreView button").click(function(){
    if($(this).hasClass("showBtn") === true){
      $("#inBook .showBtn").hide();
      $("#inBook .hideBtn").show();
      $("#inBookText").removeClass("hide");
    }else{
      $("#inBook .showBtn").show();
      $("#inBook .hideBtn").hide();
      $("#inBookText").addClass("hide");
    }
  })

  /*출판사 서평 펼치기 클릭*/
  $("#publisherWrite .moreView button").click(function(){
    if($(this).hasClass("showBtn") === true){
      $("#publisherWrite .showBtn").hide();
      $("#publisherWrite .hideBtn").show();
      $("#publisherText").removeClass("hide");
    }else{
      $("#publisherWrite .showBtn").show();
      $("#publisherWrite .hideBtn").hide();
      $("#publisherText").addClass("hide");
    }
  })

  /*리뷰 탭*/
  $("#allReviewTab li").click(function(e){
    e.preventDefault();
    $(this).siblings().removeClass("click");
    $(this).addClass("click");
  })

  /*리뷰 인덱스 버튼*/
  $("#allReview .reviewBtn span").click(function(){
    if($(this).hasClass("ellipsis")){
      $(this).css("cursor", "default");
    }else{
      $(this).siblings().removeClass("now");
      $(this).addClass("now");
    }
  })
})