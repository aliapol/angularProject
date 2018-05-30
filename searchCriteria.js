"use strict";

const searchCriteria = {
  template: `
  <input type="text" placeholder="search by genre" ng-model="$ctrl.userInput" >
  <button ng-click="$ctrl.getGenre($ctrl.userInput)">Submit</button>
  <section ng-repeat=""
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    
    vm.getGenre = function (userInput) {
      MovieService.convertUserInput(userInput); 


    }

  }]

};



angular.module("app")
  .component("searchCriteria", searchCriteria)

