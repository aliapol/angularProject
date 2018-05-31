"use strict";

const movieList = {
  template: `
    <section id="movielist">
      <section id="moviebox" ng-repeat="movie in $ctrl.movies.$$state.value.data.results">
        <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{movie.poster_path}}"> 
        <div class="movieinfo">
          <h1> {{movie.title}} </h1>
          <p> {{movie.overview}} </p>
          <i class="material-icons info" ng-click="$ctrl.showPopup(movie);">info</i>
          <i class="material-icons off" ng-click="$ctrl.watchListArray(movie);">visibility_off</i>
          
        </div>
      </section>

      <section id="popup" ng-show="$ctrl.show" >
        <p ng-click="$ctrl.closePopup();">X</p>
        <div class="movieinfo">
          <h3> {{$ctrl.title}}</h3>
          <h3> {{$ctrl.overview}} </h3>
          <h3> Rating: {{$ctrl.vote_average}}</h3>
          <h3> Number of votes: {{$ctrl.vote_count}}</h3>
          <h3> Release date: {{$ctrl.release_date}}</h3>


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

    vm.showPopup = (movie) => {
        vm.show = true;
        vm.title = movie.title;
        vm.overview = movie.overview;
        vm.vote_average = movie.vote_average;
        vm.vote_count = movie.vote_count;
        vm.release_date = movie.release_date;


        console.log(movie.title);
    };
    vm.closePopup = () => {
        vm.show = false;
    };
      
      

  }]

  
  

};

angular.module("app")
  .component("movieList", movieList)