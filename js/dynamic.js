$(window).load(function() {
	var chars = 0;
	$('.menu ul li').each(function() {
		chars = chars + $(this).width();
	});
	var size = $('.menu ul li').size()*2;
	var free = Math.floor((960-chars)/size);
	$('.menu ul li a').css({'padding-left': free+'px', 'padding-right': free+'px'});
	var pleft = Math.floor((960-chars-(free*size))/2)+free;
	$('.menu ul li:first-child a').css({'padding-left': pleft+'px'});
	var pright = (960-chars-(free*size)+free-pleft)+free;
	$('.menu ul li:last-child a').css({'padding-right': pright+'px'});
	var chars2 = 0;
	$('.submenu ul li').each(function() {
		chars2 = chars2 + $(this).width();
	});
	var size2 = $('.submenu ul li').size()-1;
	$('.submenu ul li a').css({'padding-left': pleft+'px', 'padding-right': pleft+'px'});
	var submargin = Math.floor((960 - chars2 - ((size2+1)*2*pleft)) / size2);
	$('.submenu ul li').css({'margin-left': submargin+'px'});
	var lastmargin = submargin + (960 - chars2 - submargin*size2 - (size2+1)*2*pleft);
	$('.submenu ul li:last-child').css({'margin-left': lastmargin+'px'});
});
function float() {
	var wrapper = $('.wrapper').height();
	var consultant = $('.consultant').position().top;
	var difference = wrapper-consultant;
	if (difference > 137) {
		$('.consultant').stop(true, true).delay(500).animate({'bottom': '0'}, 500, 'easeOutQuint');
	}
	else {
		$('.consultant').stop(true, true).delay(500).animate({'bottom': '85px'}, 500, 'easeOutQuint');
	}
}
$(window).scroll(function(){
	float();
});
$(document).ready(function() {
	float();
	var max = -1;
	$('.service > div').each(function() {
		var h = $(this).height(); 
		max = h > max ? h : max;
	});
	$('.service > div').height(max);
	$('.header .favicon li a').hover(
		function() {
			$(this).stop(true, true).animate({'opacity': '1', 'filter': 'alpha(opacity=100)'}, 500);
		},
		function() {
			$(this).stop(true, true).animate({'opacity': '0.5', 'filter': 'alpha(opacity=50)'}, 500);
		}
	);
	$('div.enter, div.popup, div.request').append('<span class="close"></span>');
	$('span.close').click(function() {
		$(this).parent().fadeOut(150);
		$('.fade').fadeOut(150);
		return false;
	})
	$('.footer button.enter').click(function() {
		$('.fade, div.enter').fadeIn(150);
		return false;
	});
	$('.rb h6.request a').click(function() {
		$('.fade, div.request').fadeIn(150);
		return false;
	});
	$('div.enter p a').click(function() {
		var type = $(this).attr('id');
		$(this).parents('div.enter').fadeOut(0);
		$('div.popup.'+type).fadeIn(0)
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
		$('div.popup, div.enter, div.request, .fade').fadeOut(150);
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.lb > .nav > li.sub > a').click(function() {
		$(this).parent().toggleClass('active');
		return false;
	});
	$('.lb .useful > div > p > a').click(function() {
		$(this).parent().parent().toggleClass('active');
		return false;
	});
	$('.shop tr:nth-child(even) td, div.basket table tr:nth-child(even) td').css({'background': '#f5e5e5'});
	$('div.enter p:last-child a span').css({'border-bottom-width': '0'});
});