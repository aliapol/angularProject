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
          <i class="material-icons off" ng-click="$ctrl.watchListArray(movie);">visibility_off</i>
          
        </div>
      </section>
    </section>
  `,

  //<i class="material-icons on">visibility</i>

  controller: ["MovieService", function(MovieService) {
    const vm = this; 
    
//popular movie list
    vm.movies = MovieService.getData(); 
    console.log(vm.movies); 

//takes movies from our Movie List and sends to service where they get added to the array
    vm.watchListArray = function(movie) {
        MovieService.addToList(movie)
        console.log(movie);
      };

    
        
    

  }]

  
  

};

angular.module("app")
  .component("movieList", movieList)