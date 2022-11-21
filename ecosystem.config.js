module.exports = {
  apps: [
    {
      name: 'app',
      script: './bin/www',
      env_production: {
        NODE_ENV: 'production',
        HTTPS: 1,
        HTTPS_CERT: '',
        HTTPS_CERT_KEY: '',
        MONGO_URL: '',
      },
      env_development: {
        NODE_ENV: 'development',
        HTTPS: 0,
      },
    },
  ],
};
