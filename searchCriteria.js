"use strict";



const searchCriteria = {

  template: `
    <input type="text" placeholder="search by genre" ng-model="$ctrl.userInput" >
    <button ng-click="$ctrl.getGenre($ctrl.userInput); $ctrl.genreId($ctrl.genreResult);">Submit</button>

    <input type="text" placeholder="search by rating" ng-model="$ctrl.avgResult" >
    <button ng-click="$ctrl.searchAvg($ctrl.avgResult);">Submit</button>

    <section id="search_avg" ng-repeat="average in $ctrl.avg.data.results">
      <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{movie.poster_path}}"> 
      <div class="movieinfo">
      <h1> {{movie.title}} </h1>
      <p> {{movie.overview}} </p>
    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    
 
    vm.getGenre = function (userInput) {
      MovieService.convertUserInput(userInput); 
    }

    vm.genreId = function (genreResult) {
      MovieService.genreSearch(genreResult); 
    }

    vm.searchAvg = function (avgResult) {
      vm.avg = MovieService.voteSearch(avgResult); 
      console.log(vm.avg);

    }

  }]

};



angular.module("app")
  .component("searchCriteria", searchCriteria)

