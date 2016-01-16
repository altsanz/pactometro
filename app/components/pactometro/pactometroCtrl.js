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

  var checkPartyExistsOnList = function(partyName, partyList) {
    for (var i = partyList.length - 1; i >= 0; i--) {
      if(partyList[i].name === partyName) {
        return true;
      }
    }

    return false;
  };

  this.onInFavourDropComplete = function(data, event) {
    if(!checkPartyExistsOnList(data.name, this.inFavourParties)) {
      this.inFavourParties.push(data);
    }
    return true;
    
  };

  this.addPartyToAvailableParties = function(data, event) {
    if(!checkPartyExistsOnList(data.name, this.availableParties)) {
      this.availableParties.push(data);
    }
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
    console.log('INSIDE REMOVE');
    var baseAvailableParties = this.availableParties;
    this.availableParties = baseAvailableParties.filter(function(party) {
      return party.name !== partyName;
    });
  };

  this.removePartyFromInFavourParties = function(partyName) {
    var baseAvailableParties = this.inFavourParties;
    this.inFavourParties = baseAvailableParties.filter(function(party) {
      return party.name !== partyName;
    });
  };

  this.removePartyFromPartyList = function(partyList, partyName) {
    var baseAvailableParties = this[partyList];
    this[partyList] = baseAvailableParties.filter(function(party) {
      return party.name !== partyName;
    });
  };


}]);