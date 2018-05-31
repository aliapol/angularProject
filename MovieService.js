"use strict";

let api_key = config.api_key;
let base_url = 'https://api.themoviedb.org/3/';

  function MovieService ($http) {
    let ourData= {};
    let searchTest = {};
    let genre = {};
    let ourAvg = {};
    let convertedGenreId;
 
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

    const getSearch = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&language=en-US&query=drama&page=1&include_adult=false',
        method: 'GET',
      }).then((response) => {
        searchTest = response;
        //console.log(searchTest);

        return response;
      }).catch((error) => {
        console.log(error);
      }); 
    } 

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

    const genreSearch = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + convertedGenreId,
        method: 'GET',
      }).then((response) => {
        // console.log(response);
      });
    }

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

      return {
        getData,
        getSearch,
        convertUserInput,
        genreSearch,
        voteSearch
        
      };

  }
  angular.module("app").factory("MovieService", ["$http", MovieService]);

  //search
  // two api calls, search genre, take id and put in movie search


  /*
  For matching genre: 1. take user input, convert to the genre_id, store in variable 2. run 











  */