/* Core */
const dotenv = require('dotenv');

const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

dotenv.config({ path: `../../.env.${activeEnv}` });

module.exports = {
    siteMetadata: {
        title: 'Edusson',
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
