$(function(){
  let i = $("#purchaseInfo #inputNum").val();

  $("#purchaseInfo .rightBtn").click(function(){
    i++;
    $("#inputNum").val(i);
    comma();
  })

  $("#purchaseInfo .leftBtn").click(function(){
    i--;
    if(i < 1){
      i = 1;
    }
    $("#inputNum").val(i);
    comma();
  })

  $("#purchaseInfo #inputNum").change(function(){
    comma();
  })

  function comma(){
    let price = $("#inputNum").val() * 13500;
    let priceComma = price.toLocaleString();
    $(".total").text(priceComma);
  }
})