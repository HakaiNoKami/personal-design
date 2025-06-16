/*! For license information please see components-Td-Td-stories.ff2ca8bb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[5709],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/TBody/TBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>TBody,A:()=>TBody_TBody});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.tbody`
  > tr {
    &:hover {
      background-color: var(--neutral);
    }
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TBody=args=>(0,jsx_runtime.jsx)(Container,{...args}),TBody_TBody=TBody;try{TBody.displayName="TBody",TBody.__docgenInfo={description:"",displayName:"TBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TBody/TBody.tsx#TBody"]={docgenInfo:TBody.__docgenInfo,name:"TBody",path:"src/components/TBody/TBody.tsx#TBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TBody/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>_TBody__WEBPACK_IMPORTED_MODULE_0__.v});var _TBody__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TBody/TBody.tsx")},"./src/components/THead/THead.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>THead,A:()=>THead_THead});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.thead`
  position: -webkit-sticky;
  position: sticky;
  top: ${({recoil=0})=>`-${recoil}rem`};

  th:not(:first-child) {
    border-left: 0.1rem solid var(--gray);
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const THead=args=>(0,jsx_runtime.jsx)(Container,{...args}),THead_THead=THead;try{THead.displayName="THead",THead.__docgenInfo={description:"",displayName:"THead",props:{recoil:{defaultValue:null,description:"",name:"recoil",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/THead/THead.tsx#THead"]={docgenInfo:THead.__docgenInfo,name:"THead",path:"src/components/THead/THead.tsx#THead"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/THead/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>_THead__WEBPACK_IMPORTED_MODULE_0__.D});var _THead__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/THead/THead.tsx")},"./src/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Table,A:()=>Table_Table});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const OverflowTable=styled_components_browser_esm.Ay.div`
  display: block;
  width: ${({fullWidth})=>fullWidth?"100%":"auto"};
  overflow-x: auto;
`,Container=styled_components_browser_esm.Ay.table`
  border: 0.1rem solid var(--gray);
  border-top: none;
  position: relative;

  ${({spacing=.8,overflow,fullWidth,fixed,hasFilter})=>styled_components_browser_esm.AH`
    width: ${fullWidth?"100%":"initial"};
    min-width: ${overflow?"100%":"initial"};
    table-layout: ${fixed?"fixed":"auto"};
    border-spacing: 0;

    th,
    td {
      height: 4rem;
      padding: ${spacing}rem;
      border-collapse: collapse;
      border-bottom: 0.1rem solid var(--gray);
    }

    thead tr th {
      background-color: var(--neutral);
    }

    tbody tr td:first-of-type {
      border-left: none;
    }

    tbody tr:last-of-type td {
      border-bottom: none;
    }

    tfoot td {
      border-bottom: none;
    }

    ${hasFilter?styled_components_browser_esm.AH`
          border-bottom-left-radius: 0.4rem;
          border-bottom-right-radius: 0.4rem;
        `:styled_components_browser_esm.AH`
          border-radius: 0.4rem;

          thead tr {
            th {
              border-top: 0.1rem solid var(--gray);
            }

            &:first-of-type th:first-of-type {
              border-top-left-radius: 0.4rem;
            }

            &:first-of-type th:last-of-type {
              border-top-right-radius: 0.4rem;
            }
          }
        `}

    ${overflow&&styled_components_browser_esm.AH`
      th {
        white-space: pre;
      }
    `}
  `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const createDivider=height=>{let divider=document.createElement("div");return divider.style.top="0",divider.style.right="0",divider.style.width=".5rem",divider.style.position="absolute",divider.style.cursor="col-resize",divider.style.userSelect="none",divider.style.height=height/10+"rem",divider.className="columnSelector",divider.onclick=e=>e.stopPropagation(),divider},setListeners=hr=>{let pageX,curCol,curColWidth;hr.addEventListener("mousedown",(e=>{curCol=e.target.parentElement,pageX=e.pageX,curColWidth=curCol.offsetWidth})),document.addEventListener("mousemove",(e=>{if(curCol){const diffX=e.pageX-pageX;curCol.style.width=(curColWidth+diffX)/10+"rem"}})),document.addEventListener("mouseup",(()=>{curCol=void 0,pageX=void 0,curColWidth=void 0}))},Table=({children,...args})=>{const{fullWidth,overflow}=args,tableRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{tableRef.current&&(table=>{const thead=table.getElementsByTagName("thead")[0],row=thead.getElementsByTagName("tr")[0],cols=row?row.children:void 0;if(cols)for(let i=0;i<cols.length-1;i++){const divider=createDivider(thead.offsetHeight);0===cols[i].getElementsByClassName("columnSelector").length&&cols[i].appendChild(divider),cols[i].style.position="relative",setListeners(divider)}})(tableRef.current)}),[tableRef]);const content=(0,react.useMemo)((()=>(0,jsx_runtime.jsx)(Container,{ref:tableRef,...args,children})),[tableRef,children,args]);return overflow?(0,jsx_runtime.jsx)(OverflowTable,{fullWidth,children:content}):content},Table_Table=Table;try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"number | undefined"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"boolean | undefined"}},fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean | undefined"}},hasFilter:{defaultValue:null,description:"",name:"hasFilter",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.X});var _Table__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Table/Table.tsx")},"./src/components/Td/Td.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var components_Table__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Table/index.ts"),components_TBody__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TBody/index.ts"),components_Th__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Th/index.ts"),components_THead__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/THead/index.ts"),components_Tr__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tr/index.ts"),_Td__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Td/Td.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Td",component:_Td__WEBPACK_IMPORTED_MODULE_5__.A,tags:["autodocs"],argTypes:{children:{description:"Conteúdo da coluna no corpo da tabela"},width:{type:"string",control:"text",description:"Tamanho da coluna no corpo da tabela (padrão: auto)"},hasDivisor:{type:"boolean",control:"boolean",description:"Deve adicionar uma linha divisória a esquerda da coluna"}}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_Table__WEBPACK_IMPORTED_MODULE_0__.X,{fullWidth:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_THead__WEBPACK_IMPORTED_MODULE_3__.D,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_Tr__WEBPACK_IMPORTED_MODULE_4__.Tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_Th__WEBPACK_IMPORTED_MODULE_2__.Th,{children:"Code"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_Th__WEBPACK_IMPORTED_MODULE_2__.Th,{children:"First"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_Th__WEBPACK_IMPORTED_MODULE_2__.Th,{children:"Last"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_Th__WEBPACK_IMPORTED_MODULE_2__.Th,{children:"Age"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_TBody__WEBPACK_IMPORTED_MODULE_1__.v,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_Tr__WEBPACK_IMPORTED_MODULE_4__.Tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"Duane"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"Galindo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"21"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_Tr__WEBPACK_IMPORTED_MODULE_4__.Tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"Barry"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"Powley"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"24"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_Tr__WEBPACK_IMPORTED_MODULE_4__.Tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"Charles"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"Harris"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Td__WEBPACK_IMPORTED_MODULE_5__.A,{...args,children:"27"})]})]})]}),args:{width:"",hasDivisor:!1}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Table fullWidth>\n        <THead>\n          <Tr>\n            <Th>Code</Th>\n            <Th>First</Th>\n            <Th>Last</Th>\n            <Th>Age</Th>\n          </Tr>\n        </THead>\n        <TBody>\n          <Tr>\n            <Td {...args}>1</Td>\n            <Td {...args}>Duane</Td>\n            <Td {...args}>Galindo</Td>\n            <Td {...args}>21</Td>\n          </Tr>\n          <Tr>\n            <Td {...args}>2</Td>\n            <Td {...args}>Barry</Td>\n            <Td {...args}>Powley</Td>\n            <Td {...args}>24</Td>\n          </Tr>\n          <Tr>\n            <Td {...args}>3</Td>\n            <Td {...args}>Charles</Td>\n            <Td {...args}>Harris</Td>\n            <Td {...args}>27</Td>\n          </Tr>\n        </TBody>\n      </Table>;\n  },\n  args: {\n    width: "",\n    hasDivisor: false\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/Td/Td.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Td:()=>Td,A:()=>Td_Td});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.td`
  width: ${({width})=>width??"auto"};
  max-width: ${({width})=>width??"auto"};
  vertical-align: middle;

  ${({hasDivisor})=>hasDivisor&&styled_components_browser_esm.AH`
      border-left: 0.1rem solid var(--gray);
    `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Td=args=>(0,jsx_runtime.jsx)(Container,{...args}),Td_Td=Td;try{Td.displayName="Td",Td.__docgenInfo={description:"",displayName:"Td",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | undefined"}},hasDivisor:{defaultValue:null,description:"",name:"hasDivisor",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Td/Td.tsx#Td"]={docgenInfo:Td.__docgenInfo,name:"Td",path:"src/components/Td/Td.tsx#Td"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Th/Th.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Th:()=>Th,A:()=>Th_Th});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.th`
  width: ${({width})=>width??"auto"};
  text-align: start;
  font-weight: 700;
  line-height: 2rem;
  vertical-align: middle;

  &:hover {
    color: var(--text-title);
  }

  ${({onClick})=>!!onClick&&styled_components_browser_esm.AH`
      cursor: pointer;

      &::after {
        content: "⇵";
        margin-left: 0.5rem;
        color: inherit;
      }
    `}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Th=args=>(0,jsx_runtime.jsx)(Container,{...args}),Th_Th=Th;try{Th.displayName="Th",Th.__docgenInfo={description:"",displayName:"Th",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLTableHeaderCellElement> | undefined"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Th/Th.tsx#Th"]={docgenInfo:Th.__docgenInfo,name:"Th",path:"src/components/Th/Th.tsx#Th"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Th/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Th:()=>_Th__WEBPACK_IMPORTED_MODULE_0__.Th});var _Th__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Th/Th.tsx")},"./src/components/Tr/Tr.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tr:()=>Tr,A:()=>Tr_Tr});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.tr``;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tr=args=>(0,jsx_runtime.jsx)(Container,{...args}),Tr_Tr=Tr;try{Tr.displayName="Tr",Tr.__docgenInfo={description:"",displayName:"Tr",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tr/Tr.tsx#Tr"]={docgenInfo:Tr.__docgenInfo,name:"Tr",path:"src/components/Tr/Tr.tsx#Tr"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tr/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tr:()=>_Tr__WEBPACK_IMPORTED_MODULE_0__.Tr});var _Tr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Tr/Tr.tsx")}}]);
//# sourceMappingURL=components-Td-Td-stories.ff2ca8bb.iframe.bundle.js.map