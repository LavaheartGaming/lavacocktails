module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '009b6fe26fefab3cda6c1274cc2fc787'),
  },
});
