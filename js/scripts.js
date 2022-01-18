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
  $("button.submit").click(function (event){
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
    let amountToppings = pizzaToppings*100;
    total = price + crustPrice + amountToppings;
    console.log(total);
  });
});
