$(document).ready(function(){
	let i = 0                               // счетчик слайдов передаваемый в функцию run()
	const ti = 5000                         // время показа слайда  
	const ts = 500                          // время появления / затухания слайда
	var timeInt  = 0                        // номер сессии setTimeout()
	var b = 0                               // счетчик слайдов для кнопки "вперед"
	var c = 0                               // счетчик слайдов для кнопки "назад"
	var d = $('.img').length - 1            // количество слайдов
	run(i)

		$('#next').click(function() {       // обработчик кнопки "вперед"
			clearAll()
			run(b)
		})
		$('#prev').click(function() {       // обработчик кнопки "назад"
			clearAll()
	  		c == 0 ? c = d : c--
			run(c)
		})
		$('.kropka').click(function() {       // обработчик кнопок слайдов
			clearAll()
			let wq = $(this).index()
			run(wq)
		})

	function run(i) {                         // запуск слайдера
	  c = i
	  $('.img').eq(i)                         // получаем номер слайда
	  .fadeIn(ts, function() {                // появление слайда
	  	$('.kropka').eq(c).html('◉')         // подсвечивание кнопки слайда
	  })
	  .delay(ti - ts)                         // показ слайда
	  .fadeOut(ts)                            // затухание слайда
	 
	  i == d ? i = 0 : i++                    // счетчик слайдов
	  b = i                                   // счетчик для кнопки "назад"
	  timeInt = setTimeout(run, ti, i);       // рекурсивно запускаем run() после показа слайда
	  $('.kropka').html('◎')                 // сбрасываем подсвечивание кнопок
	}

	function clearAll(){                      // выключаем слайдер
		$('.img').dequeue()                   // выключаем delay()
  		clearTimeout(timeInt)                 // выключаем setTimeout()
	}
											//◎◉❂
})