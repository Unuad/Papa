$(document).ready(function(){
	let i = 0
	const ti = 5000
	const ts = 1000
	var timeInt  = 0
	var b = 0
	var c = 0
	run(i)

		$('#next').click(function() {
			$('.img')
	  			.dequeue()
	  			clearTimeout(timeInt)

			run(b)
		})
		$('#prev').click(function() {
			$('.img')
	  			.dequeue()
	  			clearTimeout(timeInt)
	  			c == 0 ? c = 4 : c--
			run(c)
		})

		function run(i) {
		  $('.img')
		  .eq(i)
		  .fadeIn(ts)
		  .delay(ti - ts)
		  .fadeOut(ts)
		  $('#test').html(i)
  		  c = i
		  i == 4 ? i = 0 : i++
		  b = i
		  timeInt = setTimeout(run, ti, i);
		}
})