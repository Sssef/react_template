module.exports = {
    plugins: [
        //require('cssgrace'),
        require('postcss-cssnext', {
            browsers: ['last 3 versions'],
        }),
        require('postcss-quantity-queries'),
        require('cssnano')
    ]
}
