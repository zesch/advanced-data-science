# 1. Missing Computer Science Semester

<!-- TOC -->

- [1. Missing Computer Science Semester](#1-missing-computer-science-semester)
    - [1.1. <a name='forContributors'></a>for Contributors](#11-a-nameforcontributorsafor-contributors)
        - [1.1.1. <a name='MultipleChoiceQuiz'></a>Multiple Choice Quiz](#111-a-namemultiplechoicequizamultiple-choice-quiz)
        - [1.1.2. <a name='Admonitions'></a>Admonitions](#112-a-nameadmonitionsaadmonitions)
        - [1.1.3. <a name='DocsMetadata'></a>Docs Metadata](#113-a-namedocsmetadataadocs-metadata)
    - [1.3. <a name='forDevelopers'></a>for Developers](#13-a-namefordevelopersafor-developers)
        - [1.3.1. <a name='Installation'></a>Installation](#131-a-nameinstallationainstallation)
        - [1.3.2. <a name='LocalDevelopment'></a>Local Development](#132-a-namelocaldevelopmentalocal-development)
        - [1.3.3. <a name='Build'></a>Build](#133-a-namebuildabuild)
        - [1.3.4. <a name='DeploymentGH-Pages'></a>Deployment (GH-Pages)](#134-a-namedeploymentgh-pagesadeployment-gh-pages)
        - [1.3.5. Custom Components](#135-custom-components)
        - [1.3.6. CustomFields](#136-customfields)

<!-- /TOC -->

## 1.1. <a name='forContributors'></a>for Contributors

### 1.1.1. <a name='MultipleChoiceQuiz'></a>Multiple Choice Quiz
Here is a basic example of a Multiple Choice Quiz.
The `code` field is optional. You can specify which Answers are correct by adding `correct` 
```jsx
import {MultipleChoice, Answer} from './_components/Quiz.js';

<MultipleChoice
question = 'Was ist der Output des folgenden Codes?'
codeLang = "javascript"
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

### 1.1.2. <a name='Admonitions'></a>Admonitions
Use admonitions if you want text to stand out
read about them [here](https://docusaurus.io/docs/markdown-features/admonitions)
```text
:::info
Useful information.
:::
```

### 1.1.3. <a name='DocsMetadata'></a>Docs Metadata
Lectures can contain Metadata. 
The `slug` should be set to `/` in the first lecture and ignored in every other lecture.
If the lectures are not displayed in the correct order you can specify it with `sidebar_position` . <br/>
Learn more about creating Docs [here](https://docusaurus.io/docs/docs-introduction)
```
---
slug: /
title: Surviving without a GUI
sidebar_position: 1
---
```

## 1.3. <a name='forDevelopers'></a>for Developers


### 1.3.1. <a name='Installation'></a>Installation
```console
npm install
```

### 1.3.2. <a name='LocalDevelopment'></a>Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 1.3.3. <a name='Build'></a>Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 1.3.4. <a name='DeploymentGH-Pages'></a>Deployment (GH-Pages)
In Bash run
```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```
In Windows Powershell run
```console
cmd /C "set GIT_USER=<GITHUB_USERNAME>&& npm run deploy"
```
**Do not insert a space between `<GITHUB_USERNAME>` and `&&`** otherwise it will not work

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### 1.3.5. Custom Components

Custom components like `MultipleChoiceQuiz` are located in `docs/_components`

### 1.3.6. CustomFields

```javascript

customFields: {
	// The taglines added to this array will be shown randomly in the Hero Section of the landing page
	taglines: [
		"Taming wild data",
		"The survivor's guide to Data Literacy"
	]
}
```

See [Docusaurus Custom configurations](https://docusaurus.io/docs/configuration#custom-configurations)

