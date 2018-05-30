"use strict";

const searchCriteria = {
  template: `
  <input type="text" placeholder="search by genre" ng-model="$ctrl.userInput" >
  <button ng-click="$ctrl.getGenre($ctrl.userInput); $ctrl.genreSearch();">Submit</button>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    
    vm.getGenre = function (userInput) {
      MovieService.convertUserInput(userInput); 
    }

    vm.genreId = function () {
      MovieService.genreSearch(); 
    }

  }]

};



angular.module("app")
  .component("searchCriteria", searchCriteria)

