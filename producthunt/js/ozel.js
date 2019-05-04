/*function islem(x){

	x.style.width="1060px";
	x.style.position = "absolute";
	x.style.marginLeft = "-100px";

}

function kaybet(y) {

	y.style.width="";
	x.style.position = "";
	x.style.marginLeft = "";


}*/

function focusFunction() {
  // Focus = Changes the background color of input to yellow
  document.getElementById("myInput").style.width = "1120px";
  document.getElementById("myInput").style.position = "absolute";
  document.getElementById("myInput").style.marginLeft = "-55px";
  document.getElementById("myInput").style.marginTop = "-20px";
  document.getElementById("icon1").style.marginLeft = "-75px";
  document.getElementById("icon1").style.marginTop = "-12px";
  document.getElementById("nav1").classList.add("beyaz");
  document.getElementById("overlay").style.display = "inline";
  document.getElementById("menu").style.paddingLeft ="195px";
  document.getElementById("nav1").style.position ="fixed";
  document.getElementById("nav1").style.zIndex ="9999999";
  document.getElementById("nav1").style.width ="100%";
  document.getElementById("concon").style.paddingTop ="66px";
}

function blurFunction() {
  // No focus = Changes the background color of input to red
  document.getElementById("myInput").style.width = "";
  document.getElementById("myInput").style.position = "";
  document.getElementById("myInput").style.marginLeft = "";
  document.getElementById("myInput").style.marginTop = "";
  document.getElementById("icon1").style.marginLeft = "";
  document.getElementById("icon1").style.marginTop = "";
  document.getElementById("nav1").classList.remove("beyaz");
  document.getElementById("overlay").style.display = "none";
  document.getElementById("menu").style.paddingLeft ="";
}