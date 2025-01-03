module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "https://backend-web-node-js.onrender.com",
            "https:",
          ], // 允許 API 的連接來源
          "img-src": ["'self'", "data:", "blob:", "https:"], // 改為 https
          "media-src": ["'self'", "data:", "blob:", "https:"], // 改為 https
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
