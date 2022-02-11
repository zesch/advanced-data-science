(self.webpackChunkmissing_semester=self.webpackChunkmissing_semester||[]).push([[887],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(d,o(o({ref:e},m),{},{components:a})):n.createElement(d,o({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},487:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],l={title:"Streamlit",slug:"/04/03"},s={unversionedId:"04 Visualization & Analysis/4.3 Streamlit",id:"04 Visualization & Analysis/4.3 Streamlit",isDocsHomePage:!1,title:"Streamlit",description:"Getting Started",source:"@site/docs/04 Visualization & Analysis/4.3 Streamlit.mdx",sourceDirName:"04 Visualization & Analysis",slug:"/04/03",permalink:"/practical-data-science/docs/04/03",version:"current",frontMatter:{title:"Streamlit",slug:"/04/03"},sidebar:"tutorialSidebar",previous:{title:"Jupyter Notebooks",permalink:"/practical-data-science/docs/04/02"},next:{title:"Tools - Virtual Environments & Conda",permalink:"/practical-data-science/docs/05/01"}},p=[{value:"Getting Started",id:"getting-started",children:[{value:"What&#39;s Streamlit?",id:"whats-streamlit",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]}]},{value:"Step-by-step guide to our transliteration app",id:"step-by-step-guide-to-our-transliteration-app",children:[{value:"How to start streamlit",id:"how-to-start-streamlit",children:[]},{value:"How to load text in streamlit",id:"how-to-load-text-in-streamlit",children:[]},{value:"How to read Dataframes in streamlit",id:"how-to-read-dataframes-in-streamlit",children:[]},{value:"How to display a map using folium",id:"how-to-display-a-map-using-folium",children:[]},{value:"How to run the Streamlit app publically",id:"how-to-run-the-streamlit-app-publically",children:[]}]}],m={toc:p};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"whats-streamlit"},"What's Streamlit?"),(0,i.kt)("p",null,"Streamlit is an open-source Python library that makes it easy to create and share beautiful, custom web apps for machine learning and data science.\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.streamlit.io/"},"source_streamlit"),"."),(0,i.kt)("p",null,"You may find many open-source apps written in streamlit such as e.g. the following NLP apps: ",(0,i.kt)("a",{parentName:"p",href:"https://share.streamlit.io/ines/spacy-streamlit-demo/app.py"},"a demo of an spacy NLP pipeline")," or ",(0,i.kt)("a",{parentName:"p",href:"https://got-streamlit.herokuapp.com/"},"an analysis of the game of thrones characters"),"."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To follow along with this lecture you need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.streamlit.io/library/get-started/installation"},"streamlit")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pandas.pydata.org/docs/getting_started/install.html"},"pandas")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://geopandas.org/en/stable/getting_started/install.html"},"geopandas")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/regex/"},"regex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/folium/"},"folium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/google-transliteration-api/"},"google-transliteration-api"))),(0,i.kt)("p",null,"Or just download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MeDarina/TransliterateYourName/blob/main/requirements.txt"},"requirements.txt")," from the corresponding project and execute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"pip install -r requirements.txt\n")),(0,i.kt)("p",null,"You can install some extra transliteration libraries if you want to implement some more scripts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/aksharamukha/"},"aksharamukha")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/transliterate/"},"transliterate"))),(0,i.kt)("h2",{id:"step-by-step-guide-to-our-transliteration-app"},"Step-by-step guide to our transliteration app"),(0,i.kt)("p",null,"In this lecture, we will built an app that shows transliterations from latin to other scripts on a world map (showing the corresponding transliteration of the name at the place where the script is used).\nThe choice of scripts is based on the availability of the transliteration."),(0,i.kt)("h3",{id:"how-to-start-streamlit"},"How to start streamlit"),(0,i.kt)("p",null,'Having installed streamlit, you need to write the corresponding python programme (which you can do in your favorite IDE or text editor).\nWe create the file "translitName.py" and start with importing streamlit and adding a title to the app:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import streamlit as st\n\nst.title('Script your name')\n")),(0,i.kt)("p",null,"Now we can invoke it with :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"streamlit run translitName.py\n")),(0,i.kt)("p",null,"As your command line will tell you, you can now open your streamlit app in your browser at ``http://localhost:8502\xb4\xb4."),(0,i.kt)("h3",{id:"how-to-load-text-in-streamlit"},"How to load text in streamlit"),(0,i.kt)("p",null,"Now we want to read in the user input:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'user_input = st.text_input("Put your name here in latin script")\n')),(0,i.kt)("h3",{id:"how-to-read-dataframes-in-streamlit"},"How to read Dataframes in streamlit"),(0,i.kt)("h3",{id:"how-to-display-a-map-using-folium"},"How to display a map using folium"),(0,i.kt)("p",null,"folium is a python library that can be used with streamlit. It makes it easy to visualize data that\u2019s been manipulated in Python on an interactive leaflet map. It enables both the binding of data to a map for choropleth visualizations as well as passing rich vector/raster/HTML visualizations as markers on the map. ",(0,i.kt)("a",{parentName:"p",href:"https://python-visualization.github.io/folium/"},"folium source")),(0,i.kt)("p",null,"To visualize the map with transliterated texts, you need the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#create map\nm = merge.explore(\n    legend=False,\n    tiles='StamenWatercolor', \n    color=merge['Script'].apply(lambda x: colors_scripts[x]),\n    tooltip=['name','Script','Writing system','Transliteration'])\n    #max_bounds=True,\n    #width=500)\n    #height=1000,\n    #location=[13.406,170.110],\n    #zoom_start=1)\n\n#create elements\nclass DivIcon(MacroElement):\n    def __init__(self, html='', size=(30,30), anchor=(0,0), style=''):\n    #def __init__(self, html='', style=''):\n        \"\"\"TODO : docstring here\"\"\"\n        super(DivIcon, self).__init__()\n        self._name = 'DivIcon'\n        self.size = size\n        self.anchor = anchor\n        self.html = html\n        self.style = style\n\n        self._template = Template(u\"\"\"\n            {% macro header(this, kwargs) %}\n              <style>\n                .{{this.get_name()}} {\n                    {{this.style}}\n                    }\n              </style>\n            {% endmacro %}\n            {% macro script(this, kwargs) %}\n                var {{this.get_name()}} = L.divIcon({\n                    className: '{{this.get_name()}}',\n                    iconSize: [{{ this.size[0] }},{{ this.size[1] }}],\n                    iconAnchor: [{{ this.anchor[0] }},{{ this.anchor[1] }}],\n                    html : \"{{this.html}}\",\n                    });\n                {{this._parent.get_name()}}.setIcon({{this.get_name()}});\n            {% endmacro %}\n            \"\"\")\n\n#put in Scripts\nfor i in range(len(merge)):\n  fontpath = str('fonts/'+str(fonts_scripts[merge.Script[i]]))\n  if merge.ShowTransliteration[i]==True:\n      folium.map.Marker([float(merge.latitude[i]), float(merge.longitude[i])],icon=DivIcon(\n        size=(150,36),\n        anchor=(150,12),\n        html=transliteration_scripts[merge.Script[i]].capitalize(),\n        style=\"\"\"\n            font-size:14px;\n            background-color: transparent;\n            border-color: transparent;\n            text-align: right;\n            \"\"\"\n        )\n    ).add_to(m)\n\n\n      folium.map.Marker(\n    [float(merge.latitude[i]), float(merge.longitude[i])],\n    icon=DivIcon(\n        size=(150,36),\n        anchor=(150,0),\n        html=merge.Script[i].capitalize(),\n        style=\"\"\"\n            font-size:10px;\n            background-color: transparent;\n            border-color: transparent;\n            text-align: right;\n            \"\"\"\n        )\n    ).add_to(m)\n\nfolium_static(m)\n")),(0,i.kt)("h3",{id:"how-to-run-the-streamlit-app-publically"},"How to run the Streamlit app publically"),(0,i.kt)("p",null,":::\nFrom here needs to be revised\n:::"))}c.isMDXComponent=!0}}]);