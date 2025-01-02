module.exports = {
  "users-permissions": {
    config: {
      // 使用環境變數，避免硬編碼
      jwtSecret: process.env.JWT_SECRET,
      // 建議加入額外的安全設定
      jwt: {
        expiresIn: "7d",
      },
    },
  },
};
