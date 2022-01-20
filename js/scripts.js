// business side logic
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

//customer side logic
var price , crustPrice, toppingPrice ;
let total = 0;
function Getpizza( name,size,crust,topping,total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$(document).ready(function(){
 
  $("button.proceed").click(function(event){
   let pizzaname = $(".name option:selected").val();
   let pizzasize = $("#size option:selected").val();
   let pizzacrust = $("#crust option:selected").val();
   let pizzatopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       pizzatopping.push($(this).val());
   });

   switch(pizzasize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1500;
     break;
     case "medium":
       price = 1200;
       console.log("The price is "+price);
     break;
     case "small":
       price = 1000;
   }
   switch(pizzacrust){
      case "0":
        crustPrice = 0;
      break;
      case "Crispy":
        crustPrice = 100;
      break;
      case "Stuffed":
        crustPrice = 150;
      break;
      case "Gluten-free":
        crustPrice = 200;
      break;
    }
    let amountTopping = pizzatopping.length*100;
   
    if((pizzasize == "0") && (pizzacrust == "0")){
      console.log("null");
      $("button.proceed").show();
      $("#deliveryinfo").show();
      $("div.order-summary").hide();
      alert("Kindly make a pizza selection with size and choice of crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#deliveryinfo").hide();
      $("div.order-summary").slideDown(1000);
    }

    total = price + crustPrice + amountTopping;
    let amountCheckout =0;
    amountCheckout = amountCheckout + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(pizzatopping.join(", "));
    $("#totals").html(total);

    $("button.addtoorder").click(function(){
      let pizzaname = $(".name option:selected").val();
      let pizzasize = $("#size option:selected").val();
      let pizzacrust = $("#crust option:selected").val();
      let pizzatopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          pizzatopping.push($(this).val());
      });
      
      let amountTopping = pizzatopping.length*100;
      total = price + crustPrice + amountTopping;
      amountCheckout = amountCheckout + total;
     
 
    var newordermade = new Getpizza(pizzaname, pizzasize, pizzacrust,pizzatopping,total);

    $("#ordersmade").append('<tr><td id="pizzaname">'+newordermade.name +'</td><td id="pizzasize">' + newordermade.size + '</td><td id="pizzacrust">'+newordermade.crust + '</td><td id="pizzatopping">'+newordermade.topping+'</td><td id="totals">'+newordermade.total+'</td></tr>');
    console.log(newordermade);
    });

    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addtoorder").hide();
      $("button.deliver").slideDown(1000);
      $("#deliveryfee").slideDown(1000);
      console.log("Total to be paid is ksh. "+amountCheckout);
      $("#pizzafee").append("Total to be paid is ksh. "+amountCheckout);
    });

    $("button.deliver").click(function(){
      $(".ordersummaries").hide();
      $(".order-summary h3").hide();
      $(".delivery").slideDown(1000);
      $("#deliveryfee").hide();
      $("button.deliver").hide();
      $("#pizzafee").hide();
      let totalcharges= amountCheckout+200;
      console.log("You will pay sh. "+totalcharges +" on delivery");
      $("#totalamount").append("Total amount to be paid inclusive of delivery fees is: " +totalcharges +". Kindly fill in your delivery details");
    });

    $("button#final-submit").click(function(event){
      event.preventDefault();
      $("#pizzafee").hide();
      $(".delivery").hide();
      $("button#final-submit").hide();
      let totalcharges= amountCheckout+200;
      console.log("Final Bill is: "+totalcharges);
      let client = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#feedbackmessage").append("Hello there "  +client+", Your order has been received  and it will be delivered to you at "+location+ ". Kindly have Ksh " +totalcharges + " with you in cash to facilitate easy transaction with our rider. Have a lovely day :)");
        $("#totalamount").hide();
        $("#feedbackmessage").slideDown(1200);
      }
      else {
        alert("KIndly enter your details for delivery to be processed.");
        $(".delivery").show();
        $("button#final-submit").show();
      }
    });
   event.preventDefault();
  });
});
