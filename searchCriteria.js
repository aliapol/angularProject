"use strict";

const searchCriteria = {
  template: `
  <input type="text" placeholder="search">
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;

  }]

};



angular.module("app")
  .component("searchCriteria", searchCriteria)