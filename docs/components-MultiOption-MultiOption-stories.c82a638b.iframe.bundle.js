"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[2231],{"./src/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  width: max-content;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  line-height: 1.8rem;

  ${({variant="default",bordered})=>{const[color,bg]=(variant=>{switch(variant){case"success":return["var(--green-light-600)","var(--green-light-100)"];case"danger":return["var(--red-light-600)","var(--red-light-100)"];default:return["var(--blue-dark-800)","var(--neutral)"]}})(variant);return bordered?styled_components_browser_esm.AH`
        padding: 0.5rem 1.5rem;
        border: 0.1rem solid ${color};
        color: ${color};
      `:styled_components_browser_esm.AH`
      padding: 0.6rem 1.6rem;
      background-color: ${bg};
      color: ${color};
    `}}

  > span {
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-weight: 900;
    cursor: pointer;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Chip=({children,icon,onClose,...args})=>(0,jsx_runtime.jsxs)(Container,{...args,children:[icon,children,onClose&&(0,jsx_runtime.jsx)("span",{onClick:onClose,children:"×"})]});try{Chip.displayName="Chip",Chip.__docgenInfo={description:"",displayName:"Chip",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"default"'},{value:'"danger"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Chip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>_Chip__WEBPACK_IMPORTED_MODULE_0__.v});var _Chip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Chip/Chip.tsx")},"./src/components/MultiOption/MultiOption.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MultiOption_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),MultiSelect=__webpack_require__("./src/components/MultiSelect/MultiSelect.tsx"),MultiOption=__webpack_require__("./src/components/MultiOption/MultiOption.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MultiOption_stories={title:"Components/MultiOption",component:MultiOption.Ay,tags:["autodocs"],argTypes:{children:{type:"string",control:"text",description:"Conteúdo da opção multipla"},value:{type:"string",control:"text",description:"Valor opção multipla"},selected:{type:"boolean",control:"boolean",description:"Deve estar selecionada (controlado pelo seletor multiplo)"},onClick:{type:"function",description:"Método acionado ao clicar na opção multipla (controlado pelo seletor multiplo)"}}},Default={render:args=>(0,jsx_runtime.jsx)(MultiSelect.K,{fullWidth:!0,placeholder:"Select options",selectAllText:"Select all options",children:(0,jsx_runtime.jsx)(MultiOption.Ay,{...args})}),args:{children:"Opção 1",value:"1",selected:!0,onClick:(0,dist.XI)("onClick")}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <MultiSelect fullWidth placeholder="Select options" selectAllText="Select all options">\n        <MultiOption {...args} />\n      </MultiSelect>;\n  },\n  args: {\n    children: "Opção 1",\n    value: "1",\n    selected: true,\n    onClick: action("onClick")\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/MultiOption/MultiOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nC:()=>MultiOption,rD:()=>SelectAllOption,Ay:()=>MultiOption_MultiOption});var OverflowText=__webpack_require__("./src/components/OverflowText/index.ts");const ContainerOptions=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.label`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.8rem;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.4rem;
  line-height: 2rem;
  border-radius: 0.4rem;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: var(--blue-dark-800);
    color: var(--white);
    cursor: pointer;

    input[type="checkbox"]:before {
      border-color: var(--white);
    }

    input[type="checkbox"]:checked:before {
      background-color: var(--white);
    }

    input[type="checkbox"]:checked:after {
      border-color: var(--blue-dark-800);
    }
  }

  input[type="checkbox"] {
    width: 0;
    height: 0;
    margin: 0 1.5rem 1.5rem 0;
    position: relative;

    &:focus {
      outline: transparent;
    }
  }

  input[type="checkbox"]:before {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.3rem;
    height: 1.3rem;
    border: 0.1rem solid var(--neutral-600);
    border-radius: 0.3rem;
  }

  input[type="checkbox"]:checked:after {
    content: "";
    width: 0.3rem;
    height: 0.7rem;
    margin-left: 0.3rem;
    border-color: var(--neutral-600);
    border-style: solid;
    border-width: 0 0.2rem 0.2rem 0;
    position: absolute;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 0.2rem;
    left: 0.2rem;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MultiOption=({children,value,selected=!1,onClick,...args})=>(0,jsx_runtime.jsxs)(ContainerOptions,{...args,onClick:e=>e.stopPropagation(),children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked:selected,onChange:({target})=>onClick?.(value,!target.checked)}),(0,jsx_runtime.jsx)(OverflowText.Y,{children})]}),SelectAllOption=({text,onClick})=>(0,jsx_runtime.jsx)(ContainerOptions,{onClick:e=>{e.stopPropagation(),onClick()},children:(0,jsx_runtime.jsx)(OverflowText.Y,{children:text})}),MultiOption_MultiOption=MultiOption;try{MultiOption.displayName="MultiOption",MultiOption.__docgenInfo={description:"",displayName:"MultiOption",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"MultiOptionValue"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((value: MultiOptionValue, selected?: boolean | undefined) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiOption/MultiOption.tsx#MultiOption"]={docgenInfo:MultiOption.__docgenInfo,name:"MultiOption",path:"src/components/MultiOption/MultiOption.tsx#MultiOption"})}catch(__react_docgen_typescript_loader_error){}try{SelectAllOption.displayName="SelectAllOption",SelectAllOption.__docgenInfo={description:"",displayName:"SelectAllOption",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiOption/MultiOption.tsx#SelectAllOption"]={docgenInfo:SelectAllOption.__docgenInfo,name:"SelectAllOption",path:"src/components/MultiOption/MultiOption.tsx#SelectAllOption"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MultiOption/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>_MultiOption__WEBPACK_IMPORTED_MODULE_0__.nC,r:()=>_MultiOption__WEBPACK_IMPORTED_MODULE_0__.rD});var _MultiOption__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/MultiOption/MultiOption.tsx")},"./src/components/MultiSelect/MultiSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>MultiSelect,A:()=>MultiSelect_MultiSelect});var Chip=__webpack_require__("./src/components/Chip/index.ts"),MultiOption=__webpack_require__("./src/components/MultiOption/index.ts"),Option=__webpack_require__("./src/components/Option/index.ts"),CommonText=__webpack_require__("./src/providers/CommonText/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),Common=__webpack_require__("./src/utils/Common/Common.ts"),assets=__webpack_require__("./src/assets/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  width: ${({fullWidth})=>fullWidth?"100%":"max-content"};
`,MultiSelectContent=styled_components_browser_esm.Ay.button.attrs({type:"button"})`
  position: relative;
  width: 100%;
  height: 4rem;
  border-radius: 0.4rem;
  border: 0.1rem solid var(--neutral-400);
  padding: 1rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: start;
  color: var(--text);
  background: ${({disabled})=>disabled?"var(--neutral)":"var(--white)"};
  outline: transparent;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  cursor: pointer;

  &:focus {
    outline: 0.2rem solid var(--gray);
  }

  span {
    color: var(--neutral-400);
  }

  p {
    flex: 1;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    -webkit-line-clamp: 1;
    word-break: break-all;
  }
`,InputFilter=styled_components_browser_esm.Ay.input`
  position: absolute;
  width: calc(100% - 2rem);
  height: 4rem;
  border-radius: 0.4rem;
  padding: 1rem 1.2rem;
  left: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  ::placeholder {
    color: var(--neutral-400);
  }
`,ArrowIcon=(0,styled_components_browser_esm.Ay)(assets.ZL)`
  transition: 250ms ease-in-out;

  ${({open})=>open&&styled_components_browser_esm.AH`
      transform: rotate(180deg);
    `}
`,OptionsContent=styled_components_browser_esm.Ay.dialog`
  width: 100%;
  max-height: 17.4rem;
  overflow: hidden auto;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 0.4rem;
  background-color: var(--white);
  border: 0.1rem solid var(--neutral-400);
  padding: 0.8rem;
  z-index: 5;

  &[open] {
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  ${({direction="down"})=>"down"===direction?styled_components_browser_esm.AH`
          bottom: -0.4rem;
          transform: translateY(100%);
        `:styled_components_browser_esm.AH`
          top: -0.4rem;
          transform: translateY(-100%);
        `}
`,ChipsContent=styled_components_browser_esm.Ay.div`
  margin-top: 0.8rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.8rem;
`;styled_components_browser_esm.Ay.div`
  padding: 2rem;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MultiSelect=({children,placeholder,defaultValue=[],value,showChips,disabled,readOnly,onChange,onBlur,...args})=>{const[filter,setFilter]=(0,react.useState)(""),[open,setOpen]=(0,react.useState)(!1),[internalValue,setInternalValue]=(0,react.useState)(new Set(defaultValue)),{select}=(0,CommonText.i)(),ref=(0,react.useRef)(null),filterRef=(0,react.useRef)(null),hasPermission=(0,react.useMemo)((()=>!disabled&&!readOnly),[disabled,readOnly]),selectPlaceholder=(0,react.useMemo)((()=>{if(!filter&&!value?.length&&!internalValue.size)return placeholder}),[filter,value,internalValue,placeholder]),onMultiSelect=(0,react.useCallback)(((valueOption,isSelected)=>{const currentValue=new Set(value??internalValue);isSelected?currentValue.delete(valueOption):currentValue.add(valueOption),onChange?.(Array.from(currentValue)),void 0===value&&setInternalValue(currentValue)}),[value,internalValue,onChange]),validateValue=(0,react.useCallback)((currentValue=>value?.includes(currentValue)??internalValue.has(currentValue)),[value,internalValue]),options=(0,react.useMemo)((()=>react.Children.map(children,(child=>{if((0,react.isValidElement)(child))return(0,react.cloneElement)(child,{onClick:(value,selected)=>{onMultiSelect(value,selected),child.props.onClick?.(value,selected)},selected:validateValue(child.props.value)})}))),[children,validateValue,onMultiSelect]),text=(0,react.useMemo)((()=>{const currentText=new Set;return options?.forEach((({props})=>validateValue(props.value)&&currentText.add(props.children))),currentText}),[options,validateValue]),filteredOptions=(0,react.useMemo)((()=>{const currentFilter=filter.trim()?.toLocaleLowerCase();return currentFilter?options?.filter((({props})=>props.children?.toLocaleLowerCase().includes(currentFilter))):options}),[options,filter]),onSelectAll=(0,react.useCallback)((()=>{const currentValue=new Set(value??internalValue);currentValue.size?currentValue.clear():filteredOptions?.forEach((({props})=>currentValue.add(props.value))),onChange?.(Array.from(currentValue)),void 0===value&&setInternalValue(currentValue)}),[value,internalValue,filteredOptions,onChange]),onToggle=(0,react.useCallback)((open=>{setOpen(open),setFilter(""),open||onBlur?.(value??Array.from(internalValue))}),[value,internalValue,onBlur]);return(0,react.useEffect)((()=>{const hide=(0,Common.n)(ref,(()=>open&&onToggle(!1)));return document.documentElement.addEventListener("click",hide),()=>document.documentElement.removeEventListener("click",hide)}),[open,onToggle]),(0,react.useEffect)((()=>{const hide=e=>"Escape"===e.key&&open&&onToggle(!1);return document.addEventListener("keydown",hide,!1),()=>document.removeEventListener("keydown",hide,!1)}),[open,onToggle]),(0,react.useEffect)((()=>{open?filterRef.current?.focus():filterRef.current?.blur()}),[open,filterRef]),(0,jsx_runtime.jsxs)(Container,{...args,children:[(0,jsx_runtime.jsxs)(MultiSelectContent,{ref,disabled,onClick:()=>hasPermission&&onToggle(!open),children:[(0,jsx_runtime.jsx)(ArrowIcon,{open}),!filter&&!!text?.size&&(0,jsx_runtime.jsx)("p",{children:Array.from(text).join(", ")}),(0,jsx_runtime.jsx)(InputFilter,{value:filter,ref:filterRef,readOnly:!hasPermission,placeholder:selectPlaceholder,onKeyUp:e=>e.preventDefault(),onChange:e=>setFilter(e.target.value)}),(0,jsx_runtime.jsx)(OptionsContent,{open,direction:args.direction,children:filteredOptions?.length?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(MultiOption.r,{onClick:onSelectAll,text:args.selectAllText??select?.selectAll??""}),filteredOptions]}):(0,jsx_runtime.jsx)(Option.X,{text:args.noOptionText??select?.noOption??""})})]}),showChips&&void 0!==text&&(0,jsx_runtime.jsx)(ChipsContent,{children:Array.from(text).map(((value,index)=>(0,jsx_runtime.jsx)(Chip.v,{children:value},index)))})]})},MultiSelect_MultiSelect=MultiSelect;try{MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",displayName:"MultiSelect",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},selectAllText:{defaultValue:null,description:"",name:"selectAllText",required:!1,type:{name:"string | undefined"}},noOptionText:{defaultValue:null,description:"",name:"noOptionText",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:{value:"[]"},description:"",name:"defaultValue",required:!1,type:{name:"MultiOptionValue[] | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"MultiOptionValue[] | undefined"}},showChips:{defaultValue:null,description:"",name:"showChips",required:!1,type:{name:"boolean | undefined"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: MultiOptionValue[]) => void) | undefined"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((value: MultiOptionValue[]) => void) | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"up"'},{value:'"down"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiSelect/MultiSelect.tsx#MultiSelect"]={docgenInfo:MultiSelect.__docgenInfo,name:"MultiSelect",path:"src/components/MultiSelect/MultiSelect.tsx#MultiSelect"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-MultiOption-MultiOption-stories.c82a638b.iframe.bundle.js.map