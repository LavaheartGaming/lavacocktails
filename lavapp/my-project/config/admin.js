module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4aef06539fd3229734bbc0874a561f10'),
  },
});
