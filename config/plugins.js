module.exports = {
  "users-permissions": {
    config: {
      jwtSecret:
        process.env.JWT_SECRET ||
        (() => {
          throw new Error("JWT_SECRET environment variable is not set");
        })(),
      jwt: {
        expiresIn: "7d",
      },
    },
  },
};
