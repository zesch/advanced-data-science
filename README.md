# Missing Computer Science Semester
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
<!-- vscode-markdown-toc -->
* 1. [for Contributors](#forContributors)
	* 1.1. [Multiple Choice Quiz](#MultipleChoiceQuiz)
	* 1.2. [Admonitions](#Admonitions)
	* 1.3. [Docs Metadata](#DocsMetadata)
* 2. [for Developers](#forDevelopers)
	* 2.1. [Installation](#Installation)
	* 2.2. [Local Development](#LocalDevelopment)
	* 2.3. [Build](#Build)
	* 2.4. [Deployment (GH-Pages)](#DeploymentGH-Pages)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
##  1. <a name='forContributors'></a>for Contributors

###  1.1. <a name='MultipleChoiceQuiz'></a>Multiple Choice Quiz
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

###  1.2. <a name='Admonitions'></a>Admonitions
Use admonitions if you want text to stand out
read about them [here](https://docusaurus.io/docs/markdown-features/admonitions)
```text
:::info
Useful information.
:::
```

###  1.3. <a name='DocsMetadata'></a>Docs Metadata
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
##  2. <a name='forDevelopers'></a>for Developers

❗You must have [Node.js](https://nodejs.org/en/) installed on your computer ❗
###  2.1. <a name='Installation'></a>Installation
```console
npm install
```

###  2.2. <a name='LocalDevelopment'></a>Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

###  2.3. <a name='Build'></a>Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

###  2.4. <a name='DeploymentGH-Pages'></a>Deployment (GH-Pages)
In Bash run
```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```
In Windows Powershell run
```console
cmd /C "set GIT_USER=<GITHUB_USERNAME>&& npm run deploy"
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
