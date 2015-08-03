define([
    'jquery',
    'mvc/view/MainView',
    'util/router',
    'app/menunav'
], function($, MainView, Router, nav){
	var NavView = MainView.extend({
		el: $('body'),
		slideSpeed: 200,
	    events: {
	    	'click .menu > li.has-sub-menu > span': 'foldMenu',
	    	'click .menu .sub-menu > li': 'routeMenu'
	    },
	    initialize: function() {
	    	nav.init($('.menu .sub-menu li.active'));
	    	Router.init();
	    },
		
		foldMenu: function(e){
			var $T = $(e.currentTarget);
			var SlideSpeed = this.slideSpeed;
			var $P = $T.parent();
			if($P.hasClass('active')){
				$('.dy-nav').hide();
				$P.removeClass('active');
				
				$P.find('.sub-menu').slideUp(SlideSpeed);
			} else {
				$('.menu > li.has-sub-menu').removeClass('active');
				$('.menu > li.has-sub-menu').find('.sub-menu').slideUp(SlideSpeed)
				
				if($P.find('.sub-menu > li.active').length > 0){
					$('.dy-nav').show();
				}
				setTimeout(function(){
					nav.reset();
				}, SlideSpeed+5);
				
				$P.addClass('active');
				$P.find('.sub-menu').slideDown(SlideSpeed);
			}
		},
		
		routeMenu: function(e){
			var $T = $(e.currentTarget);
			$('.menu .sub-menu > li').removeClass('active');
			$T.addClass('active');
			
			
		}
	});
	
	return new NavView;
});