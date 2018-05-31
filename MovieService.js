"use strict";

let api_key = config.api_key;
let base_url = 'https://api.themoviedb.org/3/';

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
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=' + api_key + '&language=en-US&page=1',
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
        url: 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&language=en-US&query='+ title +'&page=1&include_adult=false',
        method: 'GET',
      }).then((response) => {
        searchTest = response;
        //console.log(searchTest);
        return response;
      }).catch((error) => {
        console.log(error);
      }); 
    } 

    //convertUserInput takes the string from the userInput and loops
    //through the genreArray to access genrename then converts it to a number(genre_id)
    const convertUserInput = (genre) => {
      return $http ({
        url: 'https://api.themoviedb.org/3/genre/movie/list?api_key='+ api_key +'&language=en-US',
        method: 'GET',
      }).then((response) => {
        let genreList = response.data.genres;
        for(let i = 0; i < genreList.length; i++) {
          if (genre === genreList[i].name) {
            convertedGenreId = genreList[i].id;
          }
        }
        //convertedGenreId returns number associated with name from input
        // console.log(convertedGenreId);

      });
    }

    //Function to add convertedGenreId to genreSearch end point and access movies with the specific genre
    const genreSearch = (genre) => {
      return $http ({
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + convertedGenreId,
        method: 'GET',
      }).then((response) => {
        ourGenre = response; 
        console.log(response); 
        return response
      });
    }

    //voteSearch function is used to take user input and access movies with ratings greater than or equal to from the end point
    const voteSearch = (avg) => {
      return $http ({
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte='+avg,
        method: 'GET',
      }).then((response) => {
        ourAvg = response; 
        console.log(response);
        return response; 
      })
    }

    //function to push movies into our Watch List array
    const addToList = (movie) => {
    
        watchList.push(movie);
        //console.log(watchList);
    }

    //function to send watch list array to the watch list page
    const sendList = () => {
      console.log(watchList);
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
        convertUserInput,
        genreSearch,
        voteSearch,
        addToList,
        sendList,
        removeFromList
      };

  }
  angular.module("app").factory("MovieService", ["$http", MovieService]);

  //search
  // two api calls, search genre, take id and put in movie search


  /*
  For matching genre: 1. take user input, convert to the genre_id, store in variable 2. run 











  */