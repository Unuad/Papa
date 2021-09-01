$(document).ready(function(){
	let i = 0
	const ti = 5000
	const ts = 500
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
		$('.kropka').click(function() {
			clearAll()
			let wq = $(this).index()
			run(wq)
		})

	function run(i) {
			  c = i
	  $('.img').eq(i)
	  .fadeIn(ts, function() {
	  	$('.kropka').eq(c).html('◉')
	  })
	  .delay(ti - ts)
	  .fadeOut(ts)
	 
	  i == d ? i = 0 : i++
	  b = i
	  timeInt = setTimeout(run, ti, i);
	  $('.kropka').html('◎')
	}

	function clearAll(){
		$('.img').dequeue()
  		clearTimeout(timeInt)
	}
	//◎◉❂
	//$('#test').html(wq)
})