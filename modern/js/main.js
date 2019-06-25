$(document).ready(function(){
  $(".ust-input").focus(function(){
   // $(this).css("width", "400px");
    $(this).css("background-color", "#fff");
    //$(this).css("transition", "0.7s");
    $("input").addClass("beyaz");
  });
  $("input").blur(function(){
   // $(this).css("width", "");
    $(this).css("background-color", "#fff");
    //$(this).css("transition", "0.7s");
    $("input").removeClass("beyaz");
  });
});

$().ready(function() {
		//	$("input").addClass("beyaz");
		});
$(function() {
    $('[data-tooltip]').tooltip();
}); 