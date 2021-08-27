$(document).ready(function(){
	var i = 0;
	const ti = 5000
	const ts = 1000
	var isSlide = true



	$(".next").click(function() {
		isSlide = false
		if( i == 5 ) i = 0
		$('.img').eq(i++).fadeIn(ts).delay(ti - ts).fadeOut(ts)
	})

	if (isSlide){
		setTimeout(function run() {
		  $('.img').eq(i).fadeIn(ts).delay(ti - ts).fadeOut(ts)
		  i++
		  if( i == 5 ) i = 0
		  setTimeout(run, ti);
		}, 1);
	 }
})
