module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:"],
          "img-src": ["'self'", "data:", "blob:", "http:"],
          "media-src": ["'self'", "data:", "blob:", "http:"],
          upgradeInsecureRequests: null,
        },
      },
      cors: {
        enabled: true,
        origin: ["http://localhost:3000"],
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
