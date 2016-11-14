'use strict';

require('./_app-ham.scss');

const angular = require('angular');
angular.module('cortFolio')

.component('appHam', {
  template: require('./app-ham.html'),
});
