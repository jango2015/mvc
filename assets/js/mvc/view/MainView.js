define([
    'jquery',
    'backbone',
    'util/router',
    'utils'
], function($, Backbone, Router, utils){
	return Backbone.View.extend({
		el: $('#MainCenter'),
		
		render: function(opts){
	    	if(!this.el){
	    		console.log('缺少主容器ID');
	    		return false;
	    	}
	    	utils.get(this.url, null, 'html', {
	    		context: this,
	    		before: function(){
	    			opts.before && opts.before.call(this);
	    		},
	    		success: function(resp){
    	    		this.$el.html(resp);
	    		},
	    		complete: function(){
	    			opts.complete && opts.complete.call(this);
	    		}
	    	});
	    }
	});
});