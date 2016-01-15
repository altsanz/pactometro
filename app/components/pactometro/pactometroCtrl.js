'use strict';

angular.module('pactometro').controller('pactometroCtrl', [function() {
  
  this.parties = [{
      name:'PP',
      seats: 123
    }, {
      name:'PSOE',
      seats: 90
    }, {
      name:'Podemos',
      seats: 69
    }, {
      name:'Ciudadanos',
      seats: 40
    }, {
      name:'ERC',
      seats: 9
    }, {
      name:'Democracia i Llibertad',
      seats: 8
    }, {
      name: 'PNV',
      SEATS: 6
    }, {
      name:'Unidad Popular',
      seats: 2
    }, {
      name:'EH Bildu',
      seats: 2
    }, {
      name:'Coalición Canaria',
      seats: 1
    }];

  this.onDropComplete = function(data, event) {
    debugger;
    console.log(data);
    console.log(event);
  };
}]);