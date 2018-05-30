"use strict";

let api_key = config.api_key;
let base_url = 'https://api.themoviedb.org/3/';
console.log("hi")


  function MovieService ($http) {
    let ourData= {};
    let searchTest = {};
    let genre = {};
    let genreID; 


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
            genreID = genreList[i].id;
          }

        }
      });
    }

    const genreSearch = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/genre/'+ genreID +'/movies?api_key='+ api_key +'&language=en-US&include_adult=false&sort_by=created_at.asc',
        method: 'GET',
      }).then((response) => {
        console.log(response);
        //console.log(genre.data.genres)
      });
    }

      getData();
      getSearch();
      convertUserInput();

      return {
        getData,
        getSearch,
        convertUserInput,
        genreSearch
        
      };

  }
  angular.module("app").factory("MovieService", ["$http", MovieService]);

  //search
  // two api calls, search genre, take id and put in movie search


  /*
  For matching genre: 1. take user input, convert to the genre_id, store in variable 2. run 











  */