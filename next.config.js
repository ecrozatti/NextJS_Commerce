const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
   reactStrictMode: true,
   images: {
     domains: ['images.prismic.io']
   }
 }
 
 module.exports = withPlugins([[withImages]], nextConfig);