module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-ctrbvt5svqrc73d4o990-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "website_data"),
      user: env("DATABASE_USERNAME", "website_data_user"),
      password: env("DATABASE_PASSWORD", "IcBBTAB7loB1JEhP5rBgst2qgJKyBZm3"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
