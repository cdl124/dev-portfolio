'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
angular.module('cortFolio', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/about', {
    template: require('./view/about/about.html'),
  })
  .when('/projects', {
    template: require('./view/projects/projects.html'),
  })
  .when('/home', {
    template: require('./view/home/home.html'),
  })
  .otherwise({
    redirectTo: '/home',
  });
}]);

// angular controllers
require('./view/about');
require('./view/projects');
require('./view/home');
