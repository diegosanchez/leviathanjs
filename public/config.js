'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'leviathan';
	var applicationModuleVendorDependencies = [ 'ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

  // Language dependencies
  applicationModuleVendorDependencies.push( 'ngLocalize' );
  applicationModuleVendorDependencies.push( 'ngLocalize.InstalledLanguages' );

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		var app = angular.module(applicationModuleName);
		app.requires.push(moduleName);

    	app.value('localeSupported', [ 'es-AR' ]);

	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();
