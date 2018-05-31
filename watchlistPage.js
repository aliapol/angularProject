"use strict";

const watchlistPage = {
  template: `
    <section id="movielist">
      <section id="moviebox" ng-repeat="movie in $ctrl.list">
        <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{movie.poster_path}}"> 
        <div class="movieinfo">
          <h1> {{movie.title}} </h1>
          <p> {{movie.overview}} </p>
          <i class="material-icons info" ng-click="$ctrl.showPopup(movie);">info</i>
          <i class="material-icons on" ng-click="$ctrl.deleteMovie(movie);">visibility</i>
          
        </div>
      </section>
    </section>
    
    <section class="popup" ng-show="$ctrl.show" >
      <p ng-click="$ctrl.closePopup();">X</p>
      <div class="movieinfo">
        <h3> {{$ctrl.title}}</h3>
        <h3> {{$ctrl.overview}} </h3>
        <h3> Rating: {{$ctrl.vote_average}}</h3>
        <h3> Number of votes: {{$ctrl.vote_count}}</h3>
        <h3> Release date: {{$ctrl.release_date}}</h3>


      </div>
    </section>
  `,


  controller: ["MovieService", function(MovieService) {
    const vm = this;
    vm.movies = MovieService.getData(); 

//gets watch list array from our service when a movie has been added
    vm.list = MovieService.sendList();
    console.log(vm.list);

//gets watch list array from our service after a movie has been delete
    vm.deleteMovie = function(movie) {
      MovieService.removeFromList(movie)
      console.log(movie);
    };

    vm.showPopup = (movie) => {
      vm.show = true;
      vm.title = movie.title;
      vm.overview = movie.overview;
      vm.vote_average = movie.vote_average;
      vm.vote_count = movie.vote_count;
      vm.release_date = movie.release_date;


      console.log("hi");
    };
    vm.closePopup = () => {
      vm.show = false;
    };
    
  }]

};

angular.module("app")
  .component("watchlistPage", watchlistPage)