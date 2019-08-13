$(document).ready(function(){
   doZoom();
});
function doZoom(){
	$('.img-zoom').addClass('transition');
		setTimeout(unDoZoom, 10000);
}
function unDoZoom(){
	$('.img-zoom').removeClass('transition');
		setTimeout(doZoom, 10000);
}