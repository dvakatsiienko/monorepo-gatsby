/* Core */
const dotenv = require('dotenv');

const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

dotenv.config({ path: `.env.${activeEnv}` });
dotenv.config({ path: '../../.env' });

console.log('Shop', activeEnv);
console.log('Shop', process.env.EDUSSON_URL);

module.exports = {
    siteMetadata: {
        title: 'Shop',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-json',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/data/`,
            },
        },
    ],
};
