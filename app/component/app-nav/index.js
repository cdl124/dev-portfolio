'use strict';

require('./_app-nav.scss');

const angular = require('angular');
angular.module('cortFolio')
.component('appNav', {
  template: require('./app-nav.html'),
});
