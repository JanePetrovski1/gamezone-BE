"use strict";

/**
 * post router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::post.post", {
  config: {
    update: {
      policies: ["api::post.is-owner"],
    },
    delete: {
      policies: ["api::post.is-owner"],
    },
  },
});
