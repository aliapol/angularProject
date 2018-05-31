"use strict";

const watchlistPage = {
  template: `
  <h1>Name</h1>
    <section id="movielist">
      <section id="moviebox" ng-repeat="movie in $ctrl.list">
        <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{movie.poster_path}}"> 
        <div class="movieinfo">
          <h1> {{movie.title}} </h1>
          <p> {{movie.overview}} </p>
          <i class="material-icons info">info</i>
          <i class="material-icons off" ng-click="$ctrl.deleteMovie(movie);">visibility_off</i>
          
        </div>
      </section>
    </section>
    </section>
  `,


  controller: ["MovieService", function(MovieService) {
    const vm = this;

    vm.list = MovieService.sendList();
    console.log(vm.list);

    vm.deleteMovie = function(movie) {
      MovieService.removeFromList(movie)
      console.log(movie);
    };
    
  }]

};

angular.module("app")
  .component("watchlistPage", watchlistPage)