/*! For license information please see components-Tooltip-Tooltip-stories.769b5bee.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[9459],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:()=>Bottom,Left:()=>Left,Right:()=>Right,Top:()=>Top,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  position: relative;
  cursor: default;

  &:hover > .content-tooltip {
    visibility: visible;
  }
`,ContentTooltip=styled_components_browser_esm.Ay.div.attrs({className:"content-tooltip"})`
  visibility: hidden;
  width: max-content;
  max-width: 30rem;
  background-color: var(--text);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 0.6rem;

  position: absolute;
  z-index: 1;

  ${({position="top"})=>{switch(position){case"right":return styled_components_browser_esm.AH`
          transform: translate(100%, -50%);
          top: 50%;
          right: -1rem;

          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            right: calc(100% - 0.1rem);
            margin-top: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent var(--text) transparent transparent;
          }
        `;case"bottom":return styled_components_browser_esm.AH`
          transform: translate(-50%, 100%);
          left: 50%;
          bottom: -1rem;

          &::after {
            content: " ";
            position: absolute;
            bottom: calc(100% - 0.1rem);
            left: 50%;
            margin-left: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent transparent var(--text) transparent;
          }
        `;case"left":return styled_components_browser_esm.AH`
          transform: translate(-100%, -50%);
          top: 50%;
          left: -1rem;

          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            left: calc(100% - 0.1rem);
            margin-top: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent transparent transparent var(--text);
          }
        `;default:return styled_components_browser_esm.AH`
          transform: translate(-50%, -100%);
          left: 50%;
          top: -1rem;

          &::after {
            content: " ";
            position: absolute;
            top: calc(100% - 0.1rem);
            left: 50%;
            margin-left: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: var(--text) transparent transparent transparent;
          }
        `}}}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=({children,tip,...args})=>(0,jsx_runtime.jsxs)(Container,{children:[children,(0,jsx_runtime.jsx)(ContentTooltip,{...args,children:tip})]}),Tooltip_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{tip:{defaultValue:null,description:"",name:"tip",required:!0,type:{name:"ReactNode"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}const Tooltip_stories={title:"Components/Tooltip",component:Tooltip_Tooltip,tags:["autodocs"],argTypes:{children:{description:"Conteúdo do tooltip"},tip:{description:"Conteúdo que irá aparecer ao colocar o mouse no tooltip"},position:{control:"select",options:["top","right","bottom","left"],description:"Posição que o tip irá aparecer"}}},Top={render:args=>(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"15rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Tooltip_Tooltip,{...args})}),args:{children:(0,jsx_runtime.jsx)("span",{children:"Top tooltip content"}),tip:(0,jsx_runtime.jsx)("span",{children:"Top tip"}),position:"top"}},Bottom={render:args=>(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"15rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Tooltip_Tooltip,{...args})}),args:{children:(0,jsx_runtime.jsx)("span",{children:"Bottom tooltip content"}),tip:(0,jsx_runtime.jsx)("span",{children:"Bottom tip"}),position:"bottom"}},Left={render:args=>(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"15rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Tooltip_Tooltip,{...args})}),args:{children:(0,jsx_runtime.jsx)("span",{children:"Left tooltip content"}),tip:(0,jsx_runtime.jsx)("span",{children:"Left tip"}),position:"left"}},Right={render:args=>(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"15rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Tooltip_Tooltip,{...args})}),args:{children:(0,jsx_runtime.jsx)("span",{children:"Right tooltip content"}),tip:(0,jsx_runtime.jsx)("span",{children:"Right tip"}),position:"right"}},__namedExportsOrder=["Top","Bottom","Left","Right"];Top.parameters={...Top.parameters,docs:{...Top.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <div style={{\n      width: "100%",\n      height: "15rem",\n      display: "flex",\n      alignItems: "center",\n      justifyContent: "center"\n    }}>\n        <Tooltip {...args} />\n      </div>;\n  },\n  args: {\n    children: <span>Top tooltip content</span>,\n    tip: <span>Top tip</span>,\n    position: "top"\n  }\n}',...Top.parameters?.docs?.source}}},Bottom.parameters={...Bottom.parameters,docs:{...Bottom.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <div style={{\n      width: "100%",\n      height: "15rem",\n      display: "flex",\n      alignItems: "center",\n      justifyContent: "center"\n    }}>\n        <Tooltip {...args} />\n      </div>;\n  },\n  args: {\n    children: <span>Bottom tooltip content</span>,\n    tip: <span>Bottom tip</span>,\n    position: "bottom"\n  }\n}',...Bottom.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <div style={{\n      width: "100%",\n      height: "15rem",\n      display: "flex",\n      alignItems: "center",\n      justifyContent: "center"\n    }}>\n        <Tooltip {...args} />\n      </div>;\n  },\n  args: {\n    children: <span>Left tooltip content</span>,\n    tip: <span>Left tip</span>,\n    position: "left"\n  }\n}',...Left.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <div style={{\n      width: "100%",\n      height: "15rem",\n      display: "flex",\n      alignItems: "center",\n      justifyContent: "center"\n    }}>\n        <Tooltip {...args} />\n      </div>;\n  },\n  args: {\n    children: <span>Right tooltip content</span>,\n    tip: <span>Right tip</span>,\n    position: "right"\n  }\n}',...Right.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Tooltip-Tooltip-stories.769b5bee.iframe.bundle.js.map