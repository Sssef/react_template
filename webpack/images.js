module.exports = function() {
    return {
        module:{
            rules: [
                {
                    test: /\.(svg|png|jpg|jpeg|gif)$/,
                    loader: 'file-loader',
                    query: {
                        context: '/',
                        name: 'img/[name].[ext]'
                    },
                },
            ],
        },
    };
};
