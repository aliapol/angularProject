"use strict";

let api_key = config.api_key;
let base_url = 'https://api.themoviedb.org/3/';
console.log("hi")


  function MovieService ($http) {
    let ourData= {};
    let searchTest = {};


    const getData = () => {
      console.log("get data");
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

    /*const getSearch = () => {
      console.log("get data");
      return $http ({
        url: 'https://api.themoviedb.org/3/search/company?api_key=' + api_key + '&query=old%20school&page=1',
        method: 'GET',
      }).then((response) => {
        ourData = response;
        console.log(searchTest);

        return response;
      }).catch((error) => {
        console.log(error);
      }); 
    } */
      getData();

      return {
        getData
        
      };
      console.log(searchTest);


  }
  angular.module("app").factory("MovieService", ["$http", MovieService]);