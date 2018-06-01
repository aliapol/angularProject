"use strict";
const searchCriteria = {

  template: `
    <section class="search-fields">
      <div class="search-title">
        <input type="text" placeholder="Search by Title" ng-model="$ctrl.userTitle">
        <button ng-click="$ctrl.searchTitle($ctrl.userTitle)">Submit</button>
      </div>

      <div class="search-rating">
        <input type="text" placeholder="Search by Rating[1-10]" ng-model="$ctrl.avgResult" >
        <button ng-click="$ctrl.searchAvg($ctrl.avgResult);">Submit</button>
      </div>
    </section>

    <div class="search-headline">Can't find the movie you're looking for? Try searching by title or rating!</div>

    <section id="search_title" ng-repeat="title in $ctrl.title.data.results">
        <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{title.poster_path}}"> 
        <div class="movieinfo">
          <h2> {{title.title}} </h2>
          <p> Rating: {{title.vote_average}} </p>
          <p> {{title.overview}} </p>
        </div>
    </section>

    <section id="search_avg" ng-repeat="average in $ctrl.avg.data.results">
      <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{average.poster_path}}"> 
      <div class="movieinfo">
        <h2> {{average.title}} </h2>
        <p> Rating: {{average.vote_average}} </p>
        <p> {{average.overview}} </p>
      </div>
    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;

    vm.movies = MovieService.getData(); 

    vm.searchAvg = function (avgResult) {
      MovieService.voteSearch(avgResult).then((avgArray)=>{
        vm.avg = avgArray; 
      })
    }

    vm.searchTitle = function (userTitle) {
      MovieService.getSearch(userTitle).then((titleArray)=>{
        vm.title = titleArray;
      })
    }

    vm.watchListArray = function(movie) {
      MovieService.addToList(movie)
    };

  }]

};

angular.module("app")
  .component("searchCriteria", searchCriteria)


