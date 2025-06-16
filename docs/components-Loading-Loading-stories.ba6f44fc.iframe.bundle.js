/*! For license information please see components-Loading-Loading-stories.ba6f44fc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[6647],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Loading/Loading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Loading",component:__webpack_require__("./src/components/Loading/Loading.tsx").A,tags:["autodocs"],argTypes:{centered:{control:"boolean"}}},Default={args:{centered:!1}},Centered={args:{centered:!0}},__namedExportsOrder=["Default","Centered"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    centered: false\n  }\n}",...Default.parameters?.docs?.source}}},Centered.parameters={...Centered.parameters,docs:{...Centered.parameters?.docs,source:{originalSource:"{\n  args: {\n    centered: true\n  }\n}",...Centered.parameters?.docs?.source}}}},"./src/components/Loading/Loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>Loading,A:()=>Loading_Loading});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const LoadingContainer=styled_components_browser_esm.Ay.div`
  margin: ${({centered=!1})=>centered?"0 auto":"initial"};
  width: max-content;
`,LoadingContent=styled_components_browser_esm.Ay.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.2rem;
  border: 0.2rem solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: rotating 1s infinite;

  @keyframes rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=args=>(0,jsx_runtime.jsx)(LoadingContainer,{...args,children:(0,jsx_runtime.jsx)(LoadingContent,{})}),Loading_Loading=Loading;try{Loading.displayName="Loading",Loading.__docgenInfo={description:"",displayName:"Loading",props:{centered:{defaultValue:null,description:"",name:"centered",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/Loading.tsx#Loading"]={docgenInfo:Loading.__docgenInfo,name:"Loading",path:"src/components/Loading/Loading.tsx#Loading"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Loading-Loading-stories.ba6f44fc.iframe.bundle.js.map