module.exports = {
  routes: [
    {
      method: "POST",
      path: "/transfer",
      handler: "transfer.index",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
