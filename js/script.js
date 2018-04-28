$(document).ready(function(){
    $(window).on("load",function(){
      $(window).scroll(function(){
        var windowBottom = $(this).scrollTop()+$(this).innerHeight();
        $(".fade").each(function(){
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0){$(this).fadeTo(400,1);}
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1){$(this).fadeTo(200,0);}
          }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
// Get the modal
var modal = document.getElementById('myModal');
$(function(){
$("#button").click(function(event){
    event.preventDefault();
    $("html, body").animate({"scrollTop": "0px"}, 900);
})
});
});      