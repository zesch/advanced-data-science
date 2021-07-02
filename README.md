# Missing Computer Science Semester
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
## for Contributors

### Multiple Choice Quiz
Here is a basic example of a Multiple Choice Quiz.
The `code` field is optional. You can specify which Answers are correct by adding `correct` 
```jsx
import {MultipleChoice, Answer} from './_components/Quiz.js';

<MultipleChoice
question = 'Was ist der Output des folgenden Codes?'
code = {
`let x = 1+1
console.log(x)
`}>
<Answer
    correct
    text="2"
    explanation="Korrekt! 1+1=2"
/>
<Answer
    text="0"
    explanation="lmao. nah u dumb as hell"
/>
</MultipleChoice>
```

### Admonitions
Use admonitions if you want text to stand out
read about them [here](https://docusaurus.io/docs/markdown-features/admonitions)
```text
:::info
Useful information.
:::
```

### Docs Metadata
Lectures can contain Metadata. 
The `slug` should only be used in the first lecture in order to correspond to the "lectures"-button in the Navbar.
All fields are optional. If no title is provided the title will be the first heading.
If the lectures are not displayed in the correct order you can specify it with `sidebar_position` . <br/>
Learn more about creating Docs [here](https://docusaurus.io/docs/docs-introduction)
```
---
slug: /
title: Surviving without a GUI
sidebar_position: 1
---
```
## for Developers

❗You must have [Node.js](https://nodejs.org/en/) installed on your computer ❗
### Installation
```console
npm install
```

### Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment (GH-Pages)
In Bash run
```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```
In Windows Powershell run
```console
cmd /C "set GIT_USER=<GITHUB_USERNAME>&& npm run deploy"
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
