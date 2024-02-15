"use strict";
const utils = require("@strapi/utils");
const { PolicyError } = utils.errors;

/**
 * `is-owner` policy.
 */

module.exports = async (policyContext, config, { strapi }) => {
  const { id } = policyContext.request.params;
  const { user } = policyContext.state;

  const ad = await strapi.entityService.findOne("api::ad.ad", id, {
    populate: ["user"],
  });

  if (ad.user.id === user.id) {
    return true;
  }

  throw new PolicyError("You are not allowed to edit this ad");
};
