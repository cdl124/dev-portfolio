'use strict';

require('./_home.scss');
const $ = require('jquery');

const angular = require('angular');
angular.module('cortFolio')
.controller('HomeController', ['$log', HomeController]);

function HomeController($log) {
  $(document).ready(function() {
    function slideThisIn(pClass, delayTime) {
      setTimeout(function(){
        $(pClass).addClass('fadeInLeft');
      }, delayTime);
    }

    slideThisIn('.hey', 1000);
    slideThisIn('.good-to-see-you', 2500);
    slideThisIn('.links', 4500);
    slideThisIn('.have-fun', 6500);
  });

}
