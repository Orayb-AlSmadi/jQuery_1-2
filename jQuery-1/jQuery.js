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
    $("html, body").scrollTop( 0 );
 });


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
$( "button" )
  .on( "click", function() {
    $( this ).css({
    //   "background-color": "yellow",
    //   "font-size": "20px",
      "height": "100px",
      "width": "500px",
    });
  })
  .on( "mouseleave", function() {
    var styles = {
    //   backgroundColor : "#ddd",
    // "font-size": "15px"
    // "height": "90px",
    // "width": "100px",
    };
    $( this ).css( styles );
  });

/*
Q4:
Learn how to fadein your boxes
*/


/*
Q5:
User must first accept then he or she can signup
*/


/*
Q6:
Let them print
*/


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/


/*
Q8:
Wanna make some words bolder, do it with jQuery
*/


/*
Q9:
Add new div to your website
*/


/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/


/*
Q12:
Know what user puts into textbox
*/


/*
Q13:
Change input value
*/



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 