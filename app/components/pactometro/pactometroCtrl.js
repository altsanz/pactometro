'use strict';

angular.module('pactometro').controller('pactometroCtrl', [function() {
  
  this.availableParties = [{
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
      seats: 6
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

  this.inFavourParties = [];

  this.abstentionParties = [];

  this.againstParties = [];

  this.getTotalSeatsByPosition = function(partiesByPosition) {
    var totalSeats = 0;
    for (var i = partiesByPosition.length - 1; i >= 0; i--) {
      totalSeats = totalSeats + partiesByPosition[i].seats;
    }
    return totalSeats;
  };


  this.onInFavourDropComplete = function(data, event) {
    this.inFavourParties.push(data);
    console.log(data);
    console.log(event);
  };
  this.onAbstentionDropComplete = function(data, event) {
    this.abstentionParties.push(data);
    
    console.log(data);
    console.log(event);
  };
  this.onAgainstDropComplete = function(data, event) {
    this.againstParties.push(data);
    
    console.log(data);
    console.log(event);
  };

  this.removePartyFromAvailableParties = function(partyName) {
    var baseAvailableParties = this.availableParties;
    this.availableParties = baseAvailableParties.filter(function(party) {
      return party.name !== partyName;
    });
  };


}]);