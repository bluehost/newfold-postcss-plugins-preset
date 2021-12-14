const isProd = process.env.NODE_ENV === 'production';

module.exports = [
    require('@wordpress/postcss-plugins-preset'), // contains autoprefixer
    require('postcss-media-variables'),
    require('postcss-extend-rule'),
    require('postcss-nested'),
    require('postcss-will-change-transition'),
    require('postcss-combine-media-query'),
    require('postcss-media-variables'),
    isProd ? require('cssnano') : null,
];