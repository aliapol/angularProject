"use strict";



const searchCriteria = {

  template: `
    <h2>Search by Title</h2>
    <input type="text" placeholder="search by title" ng-model="$ctrl.userTitle">
    <button ng-click="$ctrl.searchTitle($ctrl.userTitle)">Submit</button>



    <h2>Search by Rating</h2>
    <input type="text" placeholder="search by rating" ng-model="$ctrl.avgResult" >
    <button ng-click="$ctrl.searchAvg($ctrl.avgResult);">Submit</button>


    <section id="search_title" ng-repeat="title in $ctrl.title.data.results">
    <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{title.poster_path}}"> 
      <div class="movieinfo">
        <h2> {{title.title}} </h2>
        <p> {{title.vote_average}} </p>
        <p> {{title.overview}} </p>
        <i class="material-icons info more-info" ng-click="$ctrl.showPopup(movie);">info</i>
        <i class="material-icons off list-add" ng-click="$ctrl.watchListArray(movie);">visibility_off</i>
      </div>
    </section>

    <section id="search_avg" ng-repeat="average in $ctrl.avg.data.results">
    <img class="poster" ng-src=" https://image.tmdb.org/t/p/w185/{{average.poster_path}}"> 
    <div class="movieinfo">
      <h2> {{average.title}} </h2>
      <p> {{average.vote_average}} </p>
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
        console.log(vm.avg); 
      })
    }

    vm.searchTitle = function (userTitle) {
      MovieService.getSearch(userTitle).then((titleArray)=>{
        vm.title = titleArray;
        console.log(vm.title); 
      })
    }

    vm.watchListArray = function(movie) {
      MovieService.addToList(movie)
      console.log(movie);
    };




  }]

};

angular.module("app")
  .component("searchCriteria", searchCriteria)

  /* <h2>Search by Genre</h2>
  <input type="text" placeholder="search by genre" ng-model="$ctrl.userInput" >
  <button ng-click="$ctrl.getGenre($ctrl.userInput); $ctrl.genreId($ctrl.genreResult);">Submit</button> */

 /* vm.getGenre = function (userInput) {
    MovieService.convertUserInput(userInput); 
    //Returns a string
  }

  vm.genreId = function (genreResult) {
    MovieService.genreSearch(genreResult).then((genreArray)=>{
      vm.genre = genreArray;
      console.log(vm.genre);
    });
  } */

