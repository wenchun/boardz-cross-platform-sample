!function($, jQuery, window, document) {
	'use strict';
    
	app.module.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('dashboard', getState('dashboard', '/'))
			.state('games', getState('gameList', '/games'))
			.state('games.detail', getState('gameDetail', '/:gameId'))
			.state('radiusSearch', getState('radiusSearch'));
		
		$urlRouterProvider.otherwise('/');
	});
	
	function getState(name, url) {
		return {
			url: url || '/' + name,
			views: {
				'main@': {
					templateUrl: 'app/' + name + '/' + name + '.html',
					controller: name + 'Controller'
				}
			}
		};
	}	
}();