'use strict';

require('./_home.scss');
const $ = require('jquery');

const angular = require('angular');
angular.module('cortFolio')
.controller('HomeController', ['$log', HomeController]);

function HomeController($log) {

  $(document).ready(function() {
    $log.log('it loaded');

    function slideThisIn(pClass, delayTime) {
      setTimeout(function(){
        $(pClass).addClass('fadeInLeft');
        $log.log('the animation ran technically');
      }, delayTime);
    }

    slideThisIn('.hey', 1000);
    slideThisIn('.good-to-see-you', 2500);
    slideThisIn('.links', 4000);
    slideThisIn('.have-fun', 5500);
  });

}// end homecontroller
