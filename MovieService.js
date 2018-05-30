"use strict";

let api_key = config.api_key;
let base_url = 'https://api.themoviedb.org/3/';
console.log("hi")


  function MovieService ($http) {
    let ourData= {};
    let searchTest = {};
    let genre = {};


    const getData = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=' + api_key + '&language=en-US&page=1',
        method: 'GET',
      }).then((response) => {
        ourData = response;
        console.log(ourData)

        return response;
      }).catch((error) => {
        console.log(error);
      });
    }

    const getSearch = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&language=en-US&query=drama&page=1&include_adult=false',
        method: 'GET',
      }).then((response) => {
        searchTest = response;
        console.log(searchTest);

        return response;
      }).catch((error) => {
        console.log(error);
      }); 
    } 

    const getGenre = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=5ef10bf9bb7e92fc931342bdaf0139fb&language=en-US',
        method: 'GET',
      }).then((response) => {
        genre = response;
        console.log(genre.data.genres)
      });


      }


    
      getData();
      getSearch();
      getGenre();

      return {
        getData,
        getSearch,
        getGenre
        
      };
      console.log(searchTest);


  }
  angular.module("app").factory("MovieService", ["$http", MovieService]);

  //search
  // two api calls, search genre, take id and put in movie search