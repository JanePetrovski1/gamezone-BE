module.exports = {
  routes: [
    {
      // Path defined with a regular expression
      method: "GET",
      path: "/ads/my-ads", // Only match when the URL parameter is composed of lowercase letters
      handler: "ad.myAds",
    },
  ],
};
