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
          <i class="material-icons on" ng-click="$ctrl.deleteMovie(movie);">visibility</i>
          
        </div>
      </section>
    </section>
    </section>
  `,


  controller: ["MovieService", function(MovieService) {
    const vm = this;
//gets watch list array from our service when a movie has been added
    vm.list = MovieService.sendList();
    console.log(vm.list);

//gets watch list array from our service after a movie has been delete
    vm.deleteMovie = function(movie) {
      MovieService.removeFromList(movie)
      console.log(movie);
    };
    
  }]

};

angular.module("app")
  .component("watchlistPage", watchlistPage)