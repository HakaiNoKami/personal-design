/*! For license information please see components-Step-Step-stories.b3829835.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[9861],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Step/Step.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Step_stories});var Stepper=__webpack_require__("./src/components/Stepper/Stepper.tsx"),Step=__webpack_require__("./src/components/Step/Step.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Step_stories={title:"Components/Step",component:Step.A,tags:["autodocs"],argTypes:{children:{description:"Conteúdo da etapa/aba"},title:{type:"string",control:"text",description:"Nome da etapa/aba"}}},Default={render:args=>(0,jsx_runtime.jsx)(Stepper.C,{children:(0,jsx_runtime.jsx)(Step.A,{...args})}),args:{children:(0,jsx_runtime.jsx)("p",{children:"Default step content"}),title:"Default title"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Stepper>\n        <Step {...args} />\n      </Stepper>;\n  },\n  args: {\n    children: <p>Default step content</p>,\n    title: "Default title"\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/Step/Step.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,p:()=>Step});const Step=({children})=>children,__WEBPACK_DEFAULT_EXPORT__=Step;try{Step.displayName="Step",Step.__docgenInfo={description:"",displayName:"Step",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Step/Step.tsx#Step"]={docgenInfo:Step.__docgenInfo,name:"Step",path:"src/components/Step/Step.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Stepper/Stepper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Stepper,A:()=>Stepper_Stepper});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: 1.8rem;
  width: 100%;
  height: 100%;

  ${({direction="vertical"})=>"vertical"===direction?styled_components_browser_esm.AH`
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        `:styled_components_browser_esm.AH`
          flex-direction: row;
          justify-content: start;
          align-items: flex-start;
        `}
`,TitlesContent=styled_components_browser_esm.Ay.section`
  max-width: 100%;
  display: flex;
  overflow-x: auto;
  background-color: var(--neutral);
  padding: 0.4rem;
  border-radius: 0.4rem;

  ${({direction="vertical"})=>"vertical"===direction?styled_components_browser_esm.AH`
          width: 100%;
          min-height: 4rem;
          flex-direction: row;
          align-items: center;
        `:styled_components_browser_esm.AH`
          flex-direction: column;
          align-items: stretch;

          > p {
            width: 100%;
            text-align: right;
          }
        `}
`,TitleItem=styled_components_browser_esm.Ay.p`
  width: max-content;
  padding: 0.6rem 1.6rem;
  text-align: center;
  border-radius: 0.4rem;

  &:hover,
  &:focus {
    color: var(--blue-dark-800);
    cursor: pointer;
  }

  ${({isActive})=>isActive&&styled_components_browser_esm.AH`
      position: relative;
      color: var(--blue-dark-600);
      background-color: var(--white);
    `}
`,ChildrensContent=styled_components_browser_esm.Ay.div`
  width: 100%;
  max-height: 100%;
  flex: 1;
  overflow-y: ${({hasScroll})=>hasScroll?"auto":"initial"};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Stepper=({children,step,direction,hasScroll,onChange,...args})=>{const[internalStep,setInternalStep]=(0,react.useState)(step??0),currentStep=(0,react.useMemo)((()=>step??internalStep),[step,internalStep]),childrens=(0,react.useMemo)((()=>react.Children.map(children,(child=>{if((0,react.isValidElement)(child))return child}))),[children]),onClick=(0,react.useCallback)((newStep=>{internalStep!==newStep&&setInternalStep(newStep)}),[internalStep]),titles=(0,react.useMemo)((()=>childrens?.map(((child,index)=>{const isActive=index===currentStep;return(0,jsx_runtime.jsx)(TitleItem,{isActive,onClick:()=>!isActive&&onClick(index),children:child.props.title},index)}))),[childrens,currentStep,direction,onClick]),currentChildren=(0,react.useMemo)((()=>childrens?.[currentStep]),[childrens,currentStep]);return(0,react.useEffect)((()=>{internalStep!==step&&onChange?.(internalStep)}),[internalStep,step,onChange]),(0,jsx_runtime.jsxs)(Container,{...args,children:[(0,jsx_runtime.jsx)(TitlesContent,{direction,children:titles}),(0,jsx_runtime.jsx)(ChildrensContent,{hasScroll,children:currentChildren})]})},Stepper_Stepper=Stepper;try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((step: number) => void) | undefined"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},hasScroll:{defaultValue:null,description:"",name:"hasScroll",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/Stepper.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"src/components/Stepper/Stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Step-Step-stories.b3829835.iframe.bundle.js.map