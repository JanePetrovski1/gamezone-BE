"use strict";

/**
 *  ad controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::ad.ad", ({ strapi }) => ({
  async myAds(ctx) {
    const { user } = ctx.state;

    const entries = await strapi.entityService.findMany("api::ad.ad", {
      filters: {
        user: {
          id: {
            $eq: user.id,
          },
        },
      },
      populate: "*",
    });

    const sanitizedEntity = await this.sanitizeOutput(entries, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
