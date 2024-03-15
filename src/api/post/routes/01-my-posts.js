module.exports = {
  routes: [
    {
      // Path defined with a regular expression
      method: "GET",
      path: "/posts/my-posts", // Only match when the URL parameter is composed of lowercase letters
      handler: "post.myPosts",
    },
  ],
};
