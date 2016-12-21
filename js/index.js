// JavaScript Document
;(function(){
	new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
pagination : '.swiper-pagination',
		paginationType : 'bullets',
		paginationClickable: true
		
	});

	$('.nav li').on('click',function(e){
		var eLe = $(e.currentTarget);
		var index = eLe.index();
			
		var eLeSpan = $('.nav li span');
		eLeSpan.hide().eq(index).show();
	});
	
	$('.case_nav li').on('click',function(e){
		var eLe = $(e.currentTarget);
		var index = eLe.index();
		$('.case_nav li').removeClass('active');
		eLe.addClass('active');
		$('.case_case ul').hide().eq(index).show();
	});
	
	$('.team_team .but li').on('click',function(e){
		var eLe = $(e.currentTarget);
		var index = eLe.index();
		$('.team_team .but li').removeClass('on');
		eLe.addClass('on');
		$('.select ul').hide().eq(index).show();
	});
})();