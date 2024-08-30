/* https://codepen.io/bebostar/pen/mjAeG @bebo */ 
$("ul li").mouseenter(function() {
    $(this).children("ul").slideDown("fast").css("display", "block"); 
});

$("ul li").mouseleave(function() {
$(this).children("ul").stop(true, true).slideUp(); 
}); 

