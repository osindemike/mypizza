// business logic
var price;
var crustPrice;
var toppingsPrice;
function pizza(flavor, size, crust, toppings, amount, totalprice){
this.flavor=flavor
this.size=size;
this.crust=crust;
this.toppings=toppings;
this.amount=amount;
this.totalprice=totalprice;
}
$(document).ready(function(){
  $("#pizza1").mouseover(function(){
    $("#slide1").show();
  }).mouseout(function(){
    $("#slide1").hide();
  });
});
$(document).ready(function(){
  $("#pizza2").mouseover(function(){
    $("#slide2").show();
  }).mouseout(function(){
    $("#slide2").hide();
  });
});
$(document).ready(function(){
  $("#pizza3").mouseover(function(){
    $("#slide3").show();
  }).mouseout(function(){
    $("#slide3").hide();
  });
});
$(document).ready(function(){
  $("#pizza4").mouseover(function(){
    $("#slide4").show();
  }).mouseout(function(){
    $("#slide4").hide();
  });
});
$(document).ready(function(){
  $("#pizza5").mouseover(function(){
    $("#slide5").show();
  }).mouseout(function(){
    $("#slide5").hide();
  });
});
$(document).ready(function(){
  $("#pizza6").mouseover(function(){
    $("#slide6").show();
  }).mouseout(function(){
    $("#slide6").hide();
  });
});
$(document).ready(function(){
  $("#pizza7").mouseover(function(){
    $("#slide7").show();
  }).mouseout(function(){
    $("#slide7").hide();
  });
});
$(document).ready(function(){
  $("#pizza8").mouseover(function(){
    $("#slide8").show();
  }).mouseout(function(){
    $("#slide8").hide();
  });
});
// submit 
$(document).ready(function(){
  $("button.next").click(function (event){
    let pizzaFlavor= $("#flavor option:selected").val();
    let pizzaSize= $("#size option:selected").val();
    let pizzaCrust= $("#crust option:selected").val();
    let pizzaToppings= [];
    $.each($("input[name='toppings']:checked"), function(){
      pizzaToppings.push($(this).val());
    });
    switch(pizzaSize){
      case "small":
        price = 1000;
        break;
      case "medium":
        price = 1200;
        break;
      case "large":
        price = 1500;
        break;
      case "0":
        price = 0;
        break;
    }
    switch(pizzaCrust){
      case "0":
        crustPrice = 0;
        break;
      case "Crispy":
        crustPrice = 100;
        break;
      case "Stuffed":
        crustPrice = 100;
        break;
      case "Gluten-free":
        crustPrice = 100;
        break;
    }
    let amountToppings = pizzaToppings.length*100;
    if (pizzaSize == "" && pizzaCrust == ""){
      $("div.customerdetails").hide();
      alert("Kindly make an order selection");
    } else {
      $("button.next").hide();
      $("#order-message").hide();
      $("div.customerdetails").slideDown(1000);
    }
    total = price + crustPrice + amountToppings;
    console.log(total);
    let amountCheckout = 0;
    amountCheckout = amountCheckout +total;
    $("#pizza-flavour").html($(".name option:selected").val());
    $("#pizza-size").html($("#size option:selected").val());
    $("#pizza-crust").html($("#crust option:selected").val());
    $("#pizza-toppings").html(pizzaToppings.join(", "));
    $("#total-price").html(total);
  });
});
$("button.addAnotherOrder").click(function(){
  let pizzaFlavor= $("#flavor option:selected").val();
    let pizzaSize= $("#size option:selected").val();
    let pizzaCrust= $("#crust option:selected").val();
    let pizzaToppings= [];
    $.each($("input[name='toppings']:checked"), function(){
      pizzaToppings.push($(this).val());
    });
  });
  let amountToppings = pizzaToppings.length*100;
  total=price + crustPrice + amountToppings;
  amountCheckout = amountCheckout +total;
  var anotherOrder = new pizza(pizzaFlavor, pizzaSize, pizzaCrust, pizzaToppings, total);
$("button#checkout").click(function(){
  $("button#checkout").hide();
  $("button.addAnotherOrder").hide();
  $("button.deliver").slideDown(1000);
  $("#sumpizza").append("The total to be paid is ksh. " +amountCheckout);

});
$("button.deliver").click(function(){
  $(".ordertable").hide();
  $(".customerdetails h3").hide();
  $(".delivery").slideDown(1000);
  $("#deliveryprice").hide();
  $("button.deliver").hide();
  $("#sumpizza").hide();
  $("button.addAnotherOrder").hide();
  let deliveryAmount = amountCheckout+200;
  $("#amounttotal").append("Total amount to be paid is: " +deliveryAmount)
});

$("button#final-submission").click(function (event){
  event.preventDefault();
  $("#sumpizza").hide();
  $(".delivery").hide();
  $("button#final-submission").hide();
  $("button#checkout").hide();
  let deliveryAmount = amountCheckout+200;
  let customer = $("input#name").val();
  let phone = $("input#phone").val();
  let location = $("input#location").val();
  if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
    $("#delivery-prompt").append("Hello, " + customer, + "Thank you for choosing to shop with us. Your order will be delivered to " +location + "within the next 30 minutes. In case of any issues dont hesitate to contact us. Have a lovely day :)" );
    $("#amounttotal").hide();
    $("#delivery-prompt").slideDown(1200);
  } else {
    alert("Kindly select a location to be delivered!")
    $(".delivery").show();
    $("button#final-submission").show();
  }
  });
  