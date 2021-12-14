# newfold-postcss-plugins-preset

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