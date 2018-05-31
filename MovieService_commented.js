"use strict";
//this is some stuff for hiding our API key
let api_key = config.api_key;
let base_url = 'https://api.themoviedb.org/3/';
console.log("hi")


  function MovieService ($http) {
    let ourData= {};//declaring ourData which will contain our popular movieList once we get it through the API
    let searchTest = {}; //??declaring searchTest which will contain our search results from the query "drama"
    let genre = {};//declares and contains a list of genres
    let genreID; //declares and sets genreID equal to whatever the index result of genreList is


    const getData = () => {//TODO getting all the popular movies. Do we need to change this?
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

    const getSearch = () => {//??getting all the movies in our query which is drama. Do we need to fix this?
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

    const convertUserInput = (genre) => {//gets the list of genres and loops through it to find the index of the genre we've selected
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

    const genreSearch = () => {//puts the index number into the search and we can't get it to return anything
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