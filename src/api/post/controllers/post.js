"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async myPosts(ctx) {
    const { user } = ctx.state;

    const entries = await strapi.entityService.findMany("api::post.post", {
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
