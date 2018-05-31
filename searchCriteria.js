"use strict";



const searchCriteria = {

  template: `
    <h2>Search by Genre</h2>
    <input type="text" placeholder="search by genre" ng-model="$ctrl.userInput" >
    <button ng-click="$ctrl.getGenre($ctrl.userInput); $ctrl.genreId($ctrl.genreResult);">Submit</button>

    <h2>Search by Rating</h2>
    <input type="text" placeholder="search by rating" ng-model="$ctrl.avgResult" >
    <button ng-click="$ctrl.searchAvg($ctrl.avgResult);">Submit</button>

    <section id="search_avg" ng-repeat="average in $ctrl.avg.data.results">
      <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{avg.poster_path}}"> 
      <div class="movieinfo">
        <h2> {{average.title}} </h2>
        <p> {{average.overview}} </p>
      </div>
    </section>

    <h2>Search by Title??</h2>
    <input type="text" placeholder="search by title" >
    <button ng-click="">Submit</button>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;
    
 
    vm.getGenre = function (userInput) {
      MovieService.convertUserInput(userInput); 
      //Returns a string
    }

    vm.genreId = function (genreResult) {
      MovieService.genreSearch(genreResult); 
      //returns genreResult undefined...not passing input properly
      // console.log(genreResult);
    }

    vm.searchAvg = function (avgResult) {
      MovieService.voteSearch(avgResult); 
      MovieService.voteSearch();
      console.log(avgResult);

    }

  }]

};



angular.module("app")
  .component("searchCriteria", searchCriteria)

