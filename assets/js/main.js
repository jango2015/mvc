
require.config({
	baseUrl: 'assets/js',
	urlArgs: 'v=' + (new Date().getTime()),
	waitSeconds: 30,
	paths: {
		'jquery': 'lib/jquery-2.1.4.min',
		'underscore': 'lib/underscore-min',
		'backbone': 'lib/backbone-min',
		'utils': 'util/utils',
		'datatable': 'plugin/datatable/js/datatable'
	},
	shim: {
		'backbone': {
			deps: ['jquery', 'underscore']
		}
	}
});
require.onError = function(err){
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};

require(['mvc/view/nav']);
