"use strict";

const watchlistPage = {
  template: `
  <h1>Name</h1>
    <section>

    </section>
  `,
  controller: ["MovieService", function(MovieService) {
    const vm = this;

  }]

};

angular.module("app")
  .component("watchlistPage", watchlistPage)