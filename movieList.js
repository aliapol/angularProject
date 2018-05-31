"use strict";

const movieList = {
  template: `
  <h1>Name</h1>
    <a href="#!/search">Search</a>
    <section id="movielist">
    <section id="moviebox" ng-repeat="movie in $ctrl.movies.$$state.value.data.results">
    <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{movie.poster_path}}"> 
    <div class="movieinfo">
    <h1> {{movie.title}} </h1>
    <p> {{movie.overview}} </p>
    <i class="material-icons info">info</i>
    <i class="material-icons off">visibility_off</i>
    <i class="material-icons on">visibility</i>
   
  </div>

    </section>
    </section>


    <section ng-repeat="search in $ctrl.searches>

    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;

    vm.movies = MovieService.getData(); 
    console.log(vm.movies); 
  }]
  

};

angular.module("app")
  .component("movieList", movieList)