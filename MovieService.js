"use strict";

let api_key = config.api_key;
console.log(api_key)


  function MovieService ($http) {
    let ourData= {};
    const getData = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/configuration?api_key=' + api_key,
        method: 'GET',
      }).then((response) => {
        ourData = response;
        return response;
      });
    }
      getData();
      console.log(getData());

      return {
        getData
      };

  }
  angular.module("app").factory("MovieService", MovieService);