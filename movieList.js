"use strict";

const movieList = {
  template: `
  <h1>Name</h1>
    <section ng-repeat="movie in $ctrl.movies">
     <p> {{movie}} </p>
    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.movies = [];


    MovieService.getData().then((response) => {
      vm.movies.push(response.data.results);
    });
  }]
  

};

angular.module("app")
  .component("movieList", movieList)