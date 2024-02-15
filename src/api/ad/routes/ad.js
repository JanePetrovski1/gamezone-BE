"use strict";

/**
 * ad router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ad.ad", {
  config: {
    update: {
      policies: ["api::ad.is-owner"],
    },
    delete: {
      policies: ["api::ad.is-owner"],
    },
  },
});
