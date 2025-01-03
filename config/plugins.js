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
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      },
    },
  },
};
