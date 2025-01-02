const crypto = require("crypto");
const key1 = crypto.randomBytes(64).toString("hex");
const key2 = crypto.randomBytes(64).toString("hex");

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [key1, key2], // 使用隨機生成的密鑰
  },
});
