module.exports = api => {
    const env = api.env();

    api.cache.using(() => env === 'development');

    // ? As for 19.03.2021 automatic JSX transform is disabled in Gatsby by default.
    // ? This should be removed once the support will be enabled.
    const presets = [[ 'babel-preset-gatsby', { reactRuntime: 'automatic' }]];

    return { presets };
};
