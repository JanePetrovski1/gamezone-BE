"use strict";
const utils = require("@strapi/utils");
const { PolicyError } = utils.errors;

/**
 * `is-owner` policy.
 */

module.exports = async (policyContext, config, { strapi }) => {
  const { id } = policyContext.request.params;
  const { user } = policyContext.state;

  const post = await strapi.entityService.findOne("api::post.post", id, {
    populate: ["user"],
  });

  if (post.user.id === user.id) {
    return true;
  }

  throw new PolicyError("You are not allowed to edit this post");
};
