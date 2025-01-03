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
        origin: [
          "http://localhost:3000", // 本地開發環境
          "https://profolio-frontweb-next-js.vercel.app", // 正式網域
          "https://profolio-frontweb-next-3e4zhhhg1-zhou-dennys-projects.vercel.app", // 部署預覽網址
        ],
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
