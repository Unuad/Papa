$(document).ready(function(){
	var i = 0
	const ti = 5000
	const ts = 1000

	$('#next').click(function() {
		run(i)
	})

		function run(i) {
		  $('.img').eq(i).fadeIn(ts).delay(ti - ts).fadeOut(ts)
		  i++
		  if( i == 5 ) i = 0
		  setTimeout(run, ti, i);
		}
})