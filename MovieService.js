"use strict";

  function MovieService ($http) {
    let ourData= {};
    const getData = () => {
      return $http ({
        url: 'https://api.themoviedb.org/3/configuration?api_key=APIKEYHERE',
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