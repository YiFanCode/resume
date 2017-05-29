(function($){
	/*------navShow------*/
	$.goNavShow = function(node){
		var $node = $(node)
		$(window).on('scroll',function(e){
			e.preventDefault();
			var offsetY = $(this).scrollTop();
			if (offsetY>=200) {
				$node.addClass('visible');
			}else{
				$node.removeClass('visible')
			}
		})
	}

	/*------topNav------*/
	var $navToggle = $('#nav-toggle');
	var $menu = $('nav ul');
	$navToggle.on('click',function(e){
	  e.preventDefault()
	  $menu.slideToggle(250);
	  this.classList.toggle('active')
	})
	$(window).resize(function(){
		var resizeW = $(window).width();
		resizeW>320&&$menu.is(':hidden')&&$menu.removeAttr('style')
	})
	/*------gotoTop------*/
	$('.gotop-js').on('click',function(e){
		e.preventDefault()
		$('body').animate({scrollTop: 0},'slow')
	})
	// /*------modal------*/
	// var $last = $('li.last')
	// var $modalCt = $('#modal')
	// var $close = $('.close')
	// var $cover = $('.cover')
	// $last.on('click',function(e){
	// 	e.preventDefault()
	//  $('body').addClass('remodal') 
	//   $modalCt.addClass('fadein').removeClass('fadeout');
	// })
	// $close.on('click',function(e){
	// 	e.preventDefault()
	//   $modalCt.addClass('fadeout').removeClass('fadein');
	//   $('body').removeClass('remodal')
	// })
	// $cover.on('click',function(){
	//   $modalCt.addClass('fadeout').removeClass('fadein');
	//   $('body').removeClass('remodal')
	// })
	// $('.hero a').on('click',function(e){
 //    e.preventDefault()
	//   $modalCt.addClass('fadein').removeClass('fadeout');
	//   $('body').addClass('remodal')	  
	// })
	

	//  $('.projects').on('mouseenter','article',function(){
	// 	$(this).siblings().addClass('dim')
	// }).on('mouseleave','article',function(){
	// 	$(this).siblings().removeClass('dim')
	// })
	

	$('.wodryRX').wodry({
	    animation: 'rotateX',
	    delay: 1500,
	    animationDuration: 800
	});
})(jQuery)