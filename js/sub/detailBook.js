$(function(){
  $("#detailBook .bookbox img").not(":first").hide();

  let i = 0;
  
  function next(){
    i++;
    if(i > $("#detailBook .bookbox img:last").index()){
      i = 0;
    }
    $("#detailBook .bookbox img").eq(i).stop().fadeIn();
    $("#detailBook .bookbox img").eq(i-1).fadeOut();
    index();
  }
  
  function prev(){
    $("#detailBook .bookbox img").eq(i-1).fadeIn();
    $("#detailBook .bookbox img").eq(i).fadeOut();
    i--;
    index();
  }

  $("#detailBook .indexbox .leftBtn").click(function(){
    prev();
  })

  $("#detailBook .indexbox .rightBtn").click(function(){
    next();
  })
  
  //index
  function index(){
    $("#detailBook .now").text(i + 1);
    $("#detailBook .total").text($("#detailBook .bookbox img:last").index() + 1);
  }

  index();
})