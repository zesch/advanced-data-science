# for Contributors

## Admonitions
Use admonitions if you want text to stand out
read about them [here](https://docusaurus.io/docs/markdown-features/admonitions)
```text
:::info
Useful information.
:::
```

# for Developers

## Deploy
On windows Powershell run
```shell
cmd /C "set GIT_USER=giggity-hub&& npm run deploy"
```

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.