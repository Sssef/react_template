module.exports = function() {
    return {
        module:{
            rules: [
                {
                    test: /\.(svg|woff|ttf|woff2|eot)?$/,
                    loader: 'file-loader',
                    options: {
                        context: '/',
                        name: 'fonts/[name].[ext]'
                    },
                },
            ],
        },
    };
};
