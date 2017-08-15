module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.(sass|scss)$/,
                    include: paths,
                    //exclude: [/node_modules/],
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};
