const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // reactStrictMode: true,
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Wlloa",
        mongodb_password: "TheJoker20507!",
        mongodb_clustername: "cluster0",
        mongodb_database: "contact",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Wlloa",
      mongodb_password: "TheJoker20507!",
      mongodb_clustername: "cluster0",
      mongodb_database: "contactProd",
    },
  };
};
