require('dotenv').config();

// const path = require('path')

// module.exports = {
//     webpack: config => {
//         config.resolve.alias['components'] = path.join(__dirname, 'components')
//         config.resolve.alias['public'] = path.join(__dirname, 'public')

//         return config
//     }
// }


module.exports = {
  env: {
    API_URL: process.env.API_URL
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['localhost', '128.199.174.226']
  },
  future: {
    webpack5: true,
  },
  // images: {
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // },
  // images: {
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  // },
}


