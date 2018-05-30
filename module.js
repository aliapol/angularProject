"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
  $routeProvider.when("/movielist", {
    template: "<movie-list></movie-list>"
  })
  .when("/watchlistpage", {
    template: "<watchlist-page></watchlist-page>"
  });
});