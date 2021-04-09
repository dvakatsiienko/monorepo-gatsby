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
