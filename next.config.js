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
    domains: ['localhost']
  },
}


