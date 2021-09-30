# 1. Missing Computer Science Semester

<!-- TOC -->

- [1. Missing Computer Science Semester](#1-missing-computer-science-semester)
    - [1.1. for Contributors](#11-for-contributors)
        - [1.1.1. Multiple Choice Quiz](#111-multiple-choice-quiz)
        - [1.1.2. Admonitions](#112-admonitions)
        - [1.1.3. Docs Metadata](#113-docs-metadata)
        - [1.1.4. Downloads](#114-downloads)
    - [1.2. for Developers](#12-for-developers)
        - [1.2.1. Installation](#121-installation)
        - [1.2.2. Local Development](#122-local-development)
        - [1.2.3. Build](#123-build)
        - [1.2.4. Deployment](#124-deployment)
        - [1.2.5. Custom Components](#125-custom-components)
        - [1.2.6. CustomFields](#126-customfields)

<!-- /TOC -->


## 1.1. for Contributors

### 1.1.1. Multiple Choice Quiz
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

### 1.1.2. Admonitions
Use admonitions if you want text to stand out
read about them [here](https://docusaurus.io/docs/markdown-features/admonitions)
```text
:::info
Useful information.
:::
```

### 1.1.3. Docs Metadata
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
### 1.1.4. Downloads
You can include file downloads by importing the `DownloadLink` component from `@theme/Download`.
The root of the path will be in `/static`.
Optional Arguments are `text` (the text in the generated link) and `name` (the name of the file when it is downloaded). 
Both default to the actual name of the file specified in path 
```jsx
import {DownloadLink} from '@theme/Download';
<DownloadLink path="/datasets/dataset.csv"/>

<DownloadLink path="/datasets/dataset.csv" name="my-dataset.csv" text="download my dataset"/>
```


## 1.2. for Developers


### 1.2.1. Installation
```console
npm ci
```

### 1.2.2. Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 1.2.3. Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 1.2.4. Deployment 

This website is deployed to Vercel. A push to any branch will trigger a redeploy of the preview. A push to the main branch will update the main deploy.

### 1.2.5. Custom Components

Custom components like `MultipleChoiceQuiz` are located in `docs/_components`

### 1.2.6. CustomFields

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

