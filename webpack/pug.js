module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    query: {
                        pretty: true
                    }
                }
            ]
        },
    }
};
