$(document).ready(function(){
	let i = 0
	const ti = 5000
	const ts = 1000
	var timeInt  = 0
	var b = 0
	var c = 0
	var d = $('.img').length - 1
	run(i)

		$('#next').click(function() {
			clearAll()
			run(b)
		})
		$('#prev').click(function() {
			clearAll()
	  		c == 0 ? c = d : c--
			run(c)
		})
		$('.')

	function run(i) {
	  $('.img').eq(i).fadeIn(ts).delay(ti - ts).fadeOut(ts)
	  $('#test').html(d)
	  c = i
	  i == d ? i = 0 : i++
	  b = i
	  timeInt = setTimeout(run, ti, i);
	}

	function clearAll(){
		$('.img').dequeue()
  		clearTimeout(timeInt)
	}
	//◎◉❂
})