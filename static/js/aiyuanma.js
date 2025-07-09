$(function(){
	var search = $('#search');

	search.find('input[type="submit"]').click(function(){
		if($(this).siblings('.input').find('input[name="q"]').val() == ''){
			alert('请输入搜索关键词');
			return false;
		}
	});
	$('#schBtn').click(function(){
		search.stop().fadeToggle('fast');
	});

	var nav = $('#nav');
	var navItem = nav.find('li');
	navItem.each(function(){
		var _href = $(this).children('a').attr('href');
		if(_href == _url){
			if($(this).parents('li').length > 0){
				$(this).parents('li').addClass('cur');
			}else{
				$(this).addClass('cur');
			}
			
		}
		if($(this).children('ul').length > 0){
			$(this).addClass('hasSub').children('a').after('<em></em>');
		}
	});

	navItem.find('em').click(function(){
		$(this).toggleClass('open').siblings('ul').stop().slideToggle('fast').parent().siblings().find('em').removeClass('open').siblings('ul').stop().slideUp('fast');
	});

	$('#navBtn').click(function(){
		search.hide();
		nav.stop().fadeIn('fast').children('.menu').toggleClass('show');
	});

	nav.click(function(e){
		if($(e.target).closest('.menu').length === 0){
			$(this).stop().fadeOut('fast').children('.menu').removeClass('show');
		}
	});


	$('.owl-carousel').each(function(){
		$(this).on('initialize.owl.carousel initialized.owl.carousel ',
		function(e) {
			$(this).siblings('.load').remove();                 
		});
	});
	if($('#slides').length > 0){		
		$('#slides .owl-carousel').owlCarousel({
			items:1,
			loop:true, 
			mouseDrag:true,
			autoplay:true,
			nav:true,	
			dots:true
		}); 
	}


	$(window).resize(function(){
		if($(this).width() > 1024){
			nav.removeAttr('style');
			navItem.on('mouseover mouseleave');
			navItem.mouseover(function(){
				$(this).addClass('on').children('ul').stop().slideDown('fast');
			}).mouseleave(function(){
				$(this).removeClass('on').children('ul').stop().slideUp('fast');
			});
		}else{
			navItem.off('mouseover mouseleave');
		}
	}).trigger('resize');

	/**/
	var backtop = $('#mzaback');
	backtop.click(function(){
		$('body, html').animate({scrollTop:0},300);
	});
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			backtop.stop().fadeIn('fast');
		}else{
			backtop.stop().fadeOut('fast');
		}
	}).trigger('scroll');
});