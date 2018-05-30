"use strict";

const movieList = {
  template: `
  <h1>Name</h1>
  <input type="text" placeholder="search">
    <section ng-repeat="movie in $ctrl.movies">
     <p> {{movie}} </p>
    </section>

    <section ng-repeat="search in $ctrl.searches>

    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.movies = [];
    vm.searches = [];


    MovieService.getData().then((response) => {
      vm.movies.push(response.data.results);
    });

    MovieService.getSearch().then((response) => {
      vm.movies.push(response.data);
    });
  }]
  

};

angular.module("app")
  .component("movieList", movieList)