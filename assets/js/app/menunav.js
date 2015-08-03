define([
    'jquery'
], function($){
	return {
		init: function($Active){
			var _this = this;
			if(!$Active){
				return false;
			}
			var nav = $('.dy-nav');
			
			var width = $Active.width();
			var height = $Active.height();
			var offsetTop = $Active.offset().top;
			$(nav).css({
				width: width,
				height: height,
				top: offsetTop
			});
			
			$('.menu .sub-menu > li').hover(function(){
				$('.dy-nav').show();
				var _offsetTop = $(this).offset().top;
				$(nav).css('top', _offsetTop);
			});
			$('.menu .sub-menu').mouseout(function(){
				_this.reset();
			});
		},
		reset: function(){
			var nav = $('.dy-nav');
			var _$A = $('.menu .sub-menu').find('.active');
			var _offsetTop = _$A.offset().top;
			$(nav).css('top', _offsetTop);
		}
	};
});