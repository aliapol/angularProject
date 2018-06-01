"use strict";

const watchlistPage = {
  template: `

    <div class="watchlist-headline" ng-hide="$ctrl.list.length ===0">Watchlist</div>
    <div class="watchlist-empty" ng-hide="$ctrl.list.length >= 1">There are no movies in your watch list. Add some movies!</div>

    <section id="movielist">
      <section id="moviebox" ng-repeat="movie in $ctrl.list">
        <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{movie.poster_path}}"> 
        <div class="movieinfo">
          <h1> {{movie.title}} </h1>
          <p> {{movie.overview}} </p>
          <i class="material-icons" ng-click="$ctrl.deleteMovie(movie);">delete_outline</i>
        </div>
      </section>
    </section>
    
    <section class="popup" ng-show="$ctrl.show" >
      <p ng-click="$ctrl.closePopup();">X</p>
      <div class="movieinfo-popup">
        <h1> {{$ctrl.title}}</h1>
        <h3> Rating: {{$ctrl.vote_average}}</h3>
        <h3> Number of votes: {{$ctrl.vote_count}}</h3>
        <h3> Release date: {{$ctrl.release_date}}</h3>
        <p> {{$ctrl.overview}} </p>
      </div>
    </section>
  `,


  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.movies = MovieService.getData(); 

//gets watch list array from our service when a movie has been added
    vm.list = MovieService.sendList();
    
//gets watch list array from our service after a movie has been delete
    vm.deleteMovie = function(movie) {
      MovieService.removeFromList(movie)
    };    
  }]

};

angular.module("app")
  .component("watchlistPage", watchlistPage)