$ (document).ready(function() {
  $("#blanks form").submit(function(event) {
    var cusnameInput = $("input#cusname").val();
    var shippingaddressInput = $("input#shippingaddress").val();
    var cardnumberInput = $("input#cardnumber").val();
    var emailInput = $("input#email").val();
    var goodsInput = $("input#goods").val();
    var servicesInput = $("input#services").val();

    $(".cusname").text(cusnameInput);
    $(".shippingaddress").text(shippingaddressInput);
    $(".cardnumber").text(cardnumberInput);
    $(".email").text(emailInput);
    $(".goods").text(goodsInput);
    $(".services").text(servicesInput);

    $("#invoice").show();
    event.preventDefault();
  });
});
