function myFunc(x) {
  x.classList.toggle("change")
  var element = document.getElementById("myDIV");
   element.classList.toggle("bg");
}

$(function(){
		$(".wrap").click(function(){
			$("i").toggleClass("beyaz");
			$("#ekle").toggleClass("acilan");
			$("#ustmenu").toggleClass("menu");
			$(".menu-ust").toggleClass("menu1");
			$("#ekle").toggleClass("cikar");

		});
	});


$(function(){
	$(".search-icon").click(function(){
		$("#haber").toggleClass("haber-ara");

	});
});


$(function(){
	$(".search-box").click(function(){
		$("#haber2").toggleClass("haberara2");
	});
});


// SLIDER

