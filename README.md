# newfold-postcss-plugins-preset

PostCSS Plugins Preset including:
* Autoprefixing
* Media-query combination
* CSS Nesting
* @extend support
* Automatically add will-change for transitions
* Use `cssnano` when `process.env.NODE_ENV === 'production'`

# Usage

## Add an `.npmrc` file to your project

```
@bluehost:registry=https://npm.pkg.github.com
```

## Install package using npm

```
npm i --save-dev @bluehost/newfold-postcss-plugins-preset
```

## Require in a `postcss.config.js`

```js
module.exports = {
    plugins: [
        require('@bluehost/newfold-postcss-plugins-preset')
    ]
}
