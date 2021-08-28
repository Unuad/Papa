$(document).ready(function(){
	var i = 0;
	const ti = 5000
	const ts = 1000
	var isSlide = true

	slider()
	

	function slider(){
		setTimeout(function run() {
			
		  $('.img').eq(i).fadeIn(ts).delay(ti - ts)

		  
		  if (isSlide){
		  i++
		  if( i === 5 ) i = 0
		  setTimeout(run, ti);
		   $('.img').fadeOut(ts)
		}
		}, 1);

		}

		$(".next").click(function() {
		isSlide = false
		if( i === 5 ) i = 0
		$('.img').eq(i++).fadeIn(ts).delay(ti - ts).fadeOut(ts)
		setTimeout(isSlide == true, ti)


		})
		$(".prev").click(function() {
		isSlide = false
		if( i === 0 ) i = 5
		$('.img').eq(i--).fadeIn(ts).delay(ti - ts).fadeOut(ts)
		setTimeout(isSlide == true, ti)
		})

	 
})
