'use strict';

require('./_app-ham.scss');

const angular = require('angular');
angular.module('cortFolio')

.component('appHam', {
  template: require('./app-ham.html'),
})
.controller('HamController', '$log', HamController);

function HamController($log) {
  $log.debug('HamController invoked');
  this.showNav = false;
}
