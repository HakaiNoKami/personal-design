/*! For license information please see components-Card-Card-stories.360cf355.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[2513],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmptyDescription:()=>EmptyDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  max-width: 100%;
  min-width: 37.6rem;
  background-color: var(--white);
  box-shadow: 0 0.2rem 0.4rem var(--box-shadow),
    0 0.4rem 0.4rem var(--box-shadow);

  border-radius: 0.4rem;

  header {
    padding: 2.4rem;
    border-bottom: 0.1rem solid var(--gray);

    h2 {
      line-height: 2.4rem;
      color: var(--text-title);
      font-weight: bold;
      font-size: 2.4rem;
    }
  }
`,Content=styled_components_browser_esm.Ay.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;

  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;
    flex-direction: column;
    gap: 1.4rem;
  }
`,Description=styled_components_browser_esm.Ay.p`
  line-height: 2rem;
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
  color: var(--text);
  text-shadow: 0 0 var(--text-title);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=({children,title,description})=>(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsx)("h2",{children:title})}),(0,jsx_runtime.jsx)(Content,{children:(0,jsx_runtime.jsxs)("main",{children:[description&&(0,jsx_runtime.jsx)(Description,{children:description}),children]})})]});try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}const Card_stories={title:"Components/Card",component:Card,tags:["autodocs"],argTypes:{children:{description:"Conteúdo do cartão"},title:{type:"string",control:"text",description:"Título do cartão"},description:{type:"string",control:"text",description:"Descrição do cartão"}}},Default={args:{children:(0,jsx_runtime.jsx)("p",{children:"Default content"}),title:"Default title",description:"Default description"}},EmptyDescription={args:{children:(0,jsx_runtime.jsx)("p",{children:"Empty content"}),title:"Empty title"}},__namedExportsOrder=["Default","EmptyDescription"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <p>Default content</p>,\n    title: "Default title",\n    description: "Default description"\n  }\n}',...Default.parameters?.docs?.source}}},EmptyDescription.parameters={...EmptyDescription.parameters,docs:{...EmptyDescription.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <p>Empty content</p>,\n    title: "Empty title"\n  }\n}',...EmptyDescription.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Card-Card-stories.360cf355.iframe.bundle.js.map