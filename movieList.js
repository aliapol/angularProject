"use strict";

const movieList = {
  template: `
  <h1>Name</h1>
    <search-criteria></search-criteria>
    <section id="moviebox" ng-repeat="movie in $ctrl.movies.$$state.value.data.results">
    <img ng-src=" https://image.tmdb.org/t/p/w185/{{movie.poster_path}}"> 
    <div class="movieinfo">
    <h1> {{movie.title}} </h1>
     <p> {{movie.overview}} </p>
     </div>
     

    </section>


    <section ng-repeat="search in $ctrl.searches>

    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;

    vm.movies = MovieService.getData(); 
    console.log(vm.movies); 

    // vm.movies = [];
    // vm.searches = [];


    // MovieService.getData().then((response) => {
    //   vm.movies.push(response.data.results);
    // });

    // MovieService.getSearch().then((response) => {
    //   vm.movies.push(response.data);
    // });
  }]
  

};

angular.module("app")
  .component("movieList", movieList)