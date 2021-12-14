# newfold-postcss-plugins-preset

PostCSS Plugins Preset including:
* Autoprefixing
* Media-query combination
* CSS Nesting
* @extend support
* Automatically add will-change for transitions
* Use `cssnano` when `process.env.NODE_ENV === 'production'`

# Usage

## On First Run: Authenticate your machine with GitHub Packages

This can be done via modifying your `.npmrc` per-project, or ideally logging in once for your machine.

You will need a PAT with:
* `repo`
* `read:packages`

_NOTE: `--scope` is important to keep npm as your default registry. This only looks for `@bluehost/*` packages on GitHub._

```bash
$ npm login --scope=@bluehost --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
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
