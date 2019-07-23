/*
Q1:
Check if jQuery is loaded
*/


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/
$("#toTop").click(function () {
  //1 second of animation time
  //html works for FFX but not Chrome
  //body works for Chrome but not FFX
  //This strange selector seems to work universally
  $("html, body").scrollTop(0);
});


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$("button").click(function () {
  $(this).css({
    //   "background-color": "yellow",
    //   "font-size": "20px",
    "height": "100px",
    "width": "500px",
  });
})




// $("button")
//   .on("click", function () {
//     $(this).css({
//       //   "background-color": "yellow",
//       //   "font-size": "20px",
//       "height": "100px",
//       "width": "500px",
//     });
//   })
// .on("mouseleave", function () {
//   var styles = {
//     //   backgroundColor : "#ddd",
//     // "font-size": "15px"
//     "height": "90px",
//     "width": "100px",
//   };
//   $(this).css(styles);
// });

/*
Q4:
Learn how to fadein your boxes
*/
$("#fade").click(function () {
  $(".fade1").fadeIn(1000);
  $(".fade2").fadeIn(1000);
  $(".fade3").fadeIn(1000);
})

$("#fadeout").click(function () {
  $(".fade1").fadeOut(1000);
  $(".fade2").fadeOut(1000);
  $(".fade3").fadeOut(1000);
})


//   .on( "mouseenter", function() {
//     $( this ).css({
//     //   "background-color": "yellow",
//     //   "font-size": "20px",
//       "height": "100px",
//       "width": "500px",
//     });
//   })
//   ;

/*
Q5:
User must first accept then he or she can signup
*/


$('#accept').click(function () {
  if ($(this).prop("checked") == true) {
    $("#submitbtn").attr("disabled", false);
  }
  else if ($(this).prop("checked") == false) {
    $("#submitbtn").attr("disabled", true);
  }
});


/*
Q6:
Let them print
*/
$('.printPage').on('click', function () {
  window.print();
});


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
$('#textarea').attr("maxlength", 20);

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/


$('.booold').css('font-weight', 'bold');

/*
Q9:
Add new div to your website
*/
function new_div() {
  $("#new").append("<div>Test</div>");
}
/*



/*
Q11:
Add element within ul list
*/
$("#btnclick").click(function () {
  $("ul").append("<li>Appended item</li>");
})

/*
Q12:
Know what user puts into textbox
*/
$("usertext").change(function () {
  console.log( $("usertext").val());
})

/*
Q13:
Change input value
*/
$('#button').attr("value", "deyaa");


// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 