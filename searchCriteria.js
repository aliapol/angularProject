"use strict";

const searchCriteria = {
  template: `
  <input type="text" placeholder="search">
  <section ng
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    

    vm.genres = MovieService.getGenre(); 
    console.log(vm.genres); 

  }]

};



angular.module("app")
  .component("searchCriteria", searchCriteria)