"use strict";

// let api_key = config.api_key;

  function MovieService ($http) {
    let ourData= {};
    let searchTest = {};
    let genre = {};
    let ourAvg = {};
    let ourGenre = {}; 
    let convertedGenreId;
    let watchList = [];
 
    //getData is accessing popular movies from the api & we are using in our movielist component
    const getData = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=5ef10bf9bb7e92fc931342bdaf0139fb&language=en-US&page=1',
        method: 'GET',
      }).then((response) => {
        ourData = response;
        //console.log(ourData)
        return response;
      }).catch((error) => {
        console.log(error);
      });
    }

    //getSearch is accessing search by title from our api - we are using it in our searchCriteria component
    const getSearch = (title) => {
      return $http ({
        url: 'https://api.themoviedb.org/3/search/movie?api_key=5ef10bf9bb7e92fc931342bdaf0139fb&language=en-US&query='+ title +'&page=1&include_adult=false',
        method: 'GET',
      }).then((response) => {
        searchTest = response;
        //console.log(searchTest);
        return response;
      }).catch((error) => {
        console.log(error);
      }); 
    } 

    //voteSearch function is used to take user input and access movies with ratings greater than or equal to from the end point
    const voteSearch = (avg) => {
      return $http ({
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=5ef10bf9bb7e92fc931342bdaf0139fb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte='+avg,
        method: 'GET',
      }).then((response) => {
        ourAvg = response; 
        return response; 
      })
    }

    //function to push movies into our Watch List array
    const addToList = (movie) => {
        watchList.push(movie);
    }

    //function to send watch list array to the watch list page
    const sendList = () => {
      return watchList;
    }

    //function to remove movies from our watch list page
    const removeFromList = (movie) => {
      watchList.splice(movie, 1);
      return watchList;
    }

      return {
        getData,
        getSearch,
        voteSearch,
        addToList,
        sendList,
        removeFromList
      };

  }
  angular.module("app").factory("MovieService", ["$http", MovieService]);