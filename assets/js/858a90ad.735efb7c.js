(self.webpackChunkmissing_semester=self.webpackChunkmissing_semester||[]).push([[591],{3278:function(e,t,n){"use strict";n.d(t,{m:function(){return a},O:function(){return r}});var o=n(2122),c=n(7294),i=n(210),a=function(e){var t=e.code,n=e.codeLang,a=e.question,r=e.children,u=(0,c.useState)(r.map((function(e){return!1}))),l=u[0],d=u[1],m=(0,c.useState)(r.map((function(e){return!1}))),p=m[0],h=m[1],f=function(e){var t=[].concat(l);t[e]=!t[e],d(t)};return c.createElement("div",{className:"quiz multiple-choice-quiz card margin-bottom--md"},c.createElement("div",{className:"card__header"},c.createElement("h3",null,a)),c.createElement("div",{className:"card__body"},t&&c.createElement(i.Z,{className:"language-"+n},t),r.map((function(e,t){var n=Object.assign({index:t,checked:l[t],showExplanation:p[t]},e.props);return c.createElement(s,(0,o.Z)({key:t,clickHandler:f},n))}))),c.createElement("div",{className:"card__footer"},c.createElement("button",{className:"button button--primary",onClick:function(){h([].concat(l))}},"Submit")))},s=function(e){var t=e.clickHandler,n=e.text,o=e.explanation,i=e.correct,a=e.showExplanation,s=e.index,r=e.checked;return c.createElement("div",{className:"answer",onClick:function(){return t(s)}},c.createElement("input",{type:"checkbox",id:"checkbox",checked:r,onChange:function(){return t(s)}}),c.createElement("label",{htmlFor:"checkbox"},n),a&&c.createElement("div",{className:"alert alert--"+(i?"success":"danger"),role:"alert"},o))},r=function(){throw new Error("The `Answer` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `MultipleChoice` Component. ")}},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},2924:function(e,t,n){"use strict";var o=n(7294).createContext(void 0);t.Z=o},9443:function(e,t,n){"use strict";var o=(0,n(7294).createContext)(void 0);t.Z=o},5350:function(e,t,n){"use strict";var o=n(7294),c=n(2924);t.Z=function(){var e=(0,o.useContext)(c.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},944:function(e,t,n){"use strict";var o=n(7294),c=n(9443);t.Z=function(){var e=(0,o.useContext)(c.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8853:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var o=n(2122),c=n(9756),i=(n(7294),n(3905)),a=n(3278),s=(n(210),n(1395),n(8215),["components"]),r={},u={unversionedId:"showcase/multiple-choice-component",id:"showcase/multiple-choice-component",isDocsHomePage:!1,title:"multiple-choice-component",description:"Hier ist ein bisschen text um zu sehen wie sich die margin der Quiz-Komponente aussieht",source:"@site/docs/showcase/multiple-choice-component.mdx",sourceDirName:"showcase",slug:"/showcase/multiple-choice-component",permalink:"/advanced-data-science/docs/showcase/multiple-choice-component",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"language specific codeblocks",permalink:"/advanced-data-science/docs/showcase/language-specific-codeblock"}},l=[],d={toc:l};function m(e){var t=e.components,n=(0,c.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hier ist ein bisschen text um zu sehen wie sich die margin der Quiz-Komponente aussieht"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"shosh"))),(0,i.kt)(a.m,{question:"Was ist der Output des folgenden Codes?",codeLang:"javascript",code:"let x = 1+1\nconsole.log(x)\n",mdxType:"MultipleChoice"},(0,i.kt)(a.O,{correct:!0,text:"1",explanation:"Bruder willst du hardward scholarship?",mdxType:"Answer"}),(0,i.kt)(a.O,{text:"0",explanation:"lmao. nah u dumb as hell",mdxType:"Answer"})),(0,i.kt)(a.m,{question:"Kann man auch ein multiple choice quiz ohne code block erstellen?",codeLang:"javascript",code:"let x = 1+1\nconsole.log(x)\n",mdxType:"MultipleChoice"},(0,i.kt)(a.O,{correct:!0,text:"Ja indem man einfach die Felder 'code' und 'codeLang' wegl\xe4sst",explanation:"Yeah Boi. Dis is da wae",mdxType:"Answer"}),(0,i.kt)(a.O,{text:"Nein",explanation:"Doch",mdxType:"Answer"})),(0,i.kt)("p",null,"Hier ist ein bisschen text um zu sehen wie sich die margin der Quiz-Komponente aussieht"))}m.isMDXComponent=!0}}]);