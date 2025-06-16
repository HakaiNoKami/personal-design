"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[2925],{"./src/components/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,NoOptions:()=>NoOptions,Uncontrolled:()=>Uncontrolled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),components_Option__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Option/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Select/Select.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Select",component:_Select__WEBPACK_IMPORTED_MODULE_3__.A,tags:["autodocs"],argTypes:{children:{description:"Conteúdo do seletor"},placeholder:{type:"string",control:"text",description:"Texto de placeholder exibido quando valor do seletor for vazio"},noOptionText:{type:"string",control:"text",description:"Texto de aviso que o seletor não tem opções"},defaultValue:{description:"Valor inicial selecionado (caso não queira controlar o seletor)"},value:{description:"Valor selecionado (caso queira controlar o seletor)"},hasClear:{type:"boolean",control:"boolean",description:"Deve ter a opção de limpar o campo ao clicar no '✖'"},readOnly:{type:"boolean",control:"boolean",description:"Deve permitir apenas leitura do campo"},onChange:{type:"function",description:"Método acionado sempre que uma opção for marcada ou desmarcada para retornar o valor do seletor multiplo"},direction:{control:"select",options:["up","down"],description:"Direção que o seletor irá abrir"},fullWidth:{type:"boolean",control:"boolean",description:"Deve oculpar o tamanho máximo da caixa"},disabled:{type:"boolean",control:"boolean",description:"Desabilitar o seletor multiplo"}}},Uncontrolled={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Select__WEBPACK_IMPORTED_MODULE_3__.A,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Option__WEBPACK_IMPORTED_MODULE_1__.c,{value:1,children:"Option 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Option__WEBPACK_IMPORTED_MODULE_1__.c,{value:2,children:"Option 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Option__WEBPACK_IMPORTED_MODULE_1__.c,{value:3,children:"Option 3"})]}),args:{placeholder:"Uncontrolled select",noOptionText:"No options available",defaultValue:1,hasClear:!0,readOnly:!1,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChange"),direction:"down",fullWidth:!0,disabled:!1}},Controlled={render:args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(args.value),onChange=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value=>{setValue(value),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChange")()}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Select__WEBPACK_IMPORTED_MODULE_3__.A,{...args,value,onChange,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Option__WEBPACK_IMPORTED_MODULE_1__.c,{value:1,children:"Option 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Option__WEBPACK_IMPORTED_MODULE_1__.c,{value:2,children:"Option 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Option__WEBPACK_IMPORTED_MODULE_1__.c,{value:3,children:"Option 3"})]})},args:{placeholder:"Controlled select",noOptionText:"No options available",value:3,hasClear:!0,readOnly:!1,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChange"),direction:"down",fullWidth:!0,disabled:!1}},NoOptions={args:{children:"",placeholder:"No Options select",noOptionText:"No options available",hasClear:!0,readOnly:!1,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChange"),direction:"down",fullWidth:!0,disabled:!1}},__namedExportsOrder=["Uncontrolled","Controlled","NoOptions"];Uncontrolled.parameters={...Uncontrolled.parameters,docs:{...Uncontrolled.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Select {...args}>\n        <Option value={1}>Option 1</Option>\n        <Option value={2}>Option 2</Option>\n        <Option value={3}>Option 3</Option>\n      </Select>;\n  },\n  args: {\n    placeholder: "Uncontrolled select",\n    noOptionText: "No options available",\n    defaultValue: 1,\n    hasClear: true,\n    readOnly: false,\n    onChange: action("onChange"),\n    direction: "down",\n    fullWidth: true,\n    disabled: false\n  }\n}',...Uncontrolled.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [value, setValue] = useState(args.value);\n    const onChange = useCallback((value: OptionValue) => {\n      setValue(value);\n      action("onChange")();\n    }, []);\n    return <Select {...args} value={value} onChange={onChange}>\n        <Option value={1}>Option 1</Option>\n        <Option value={2}>Option 2</Option>\n        <Option value={3}>Option 3</Option>\n      </Select>;\n  },\n  args: {\n    placeholder: "Controlled select",\n    noOptionText: "No options available",\n    value: 3,\n    hasClear: true,\n    readOnly: false,\n    onChange: action("onChange"),\n    direction: "down",\n    fullWidth: true,\n    disabled: false\n  }\n}',...Controlled.parameters?.docs?.source}}},NoOptions.parameters={...NoOptions.parameters,docs:{...NoOptions.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "",\n    placeholder: "No Options select",\n    noOptionText: "No options available",\n    hasClear: true,\n    readOnly: false,\n    onChange: action("onChange"),\n    direction: "down",\n    fullWidth: true,\n    disabled: false\n  }\n}',...NoOptions.parameters?.docs?.source}}}},"./src/components/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Select,A:()=>Select_Select});var Option=__webpack_require__("./src/components/Option/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts"),CommonText=__webpack_require__("./src/providers/CommonText/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),Common=__webpack_require__("./src/utils/Common/Common.ts"),assets=__webpack_require__("./src/assets/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  width: ${({fullWidth})=>fullWidth?"100%":"max-content"};
  position: relative;
`,SelectContent=styled_components_browser_esm.Ay.button.attrs({type:"button"})`
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
  align-items: center;
  gap: 1rem;

  cursor: pointer;

  &:hover .clear {
    opacity: 1;
  }

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
`,ClearIcon=(0,styled_components_browser_esm.Ay)(assets.US).attrs({className:"clear"})`
  display: block;
  transition: ease-in-out 0.2s;
  opacity: 0;
  z-index: 2;
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Select=({children,placeholder,defaultValue="",value,direction,disabled,readOnly,onChange,...args})=>{const[filter,setFilter]=(0,react.useState)(""),[open,setOpen]=(0,react.useState)(!1),[internalValue,setInternalValue]=(0,react.useState)(defaultValue),[texts,{set}]=(0,hooks.k)(),{select}=(0,CommonText.i)(),ref=(0,react.useRef)(null),filterRef=(0,react.useRef)(null),hasPermission=(0,react.useMemo)((()=>!disabled&&!readOnly),[disabled,readOnly]),currentValue=(0,react.useMemo)((()=>value??internalValue),[value,internalValue]),selectPlaceholder=(0,react.useMemo)((()=>{if(!filter&&""===currentValue)return placeholder}),[filter,currentValue,placeholder]),onToggle=(0,react.useCallback)((open=>{setOpen(open),setFilter("")}),[value,internalValue]),onSelect=(0,react.useCallback)((valueOption=>{onChange?.(valueOption),void 0===value&&setInternalValue(valueOption),onToggle(!1)}),[value,onChange,onToggle]),options=(0,react.useMemo)((()=>react.Children.map(children??[],(child=>{if((0,react.isValidElement)(child))return(0,react.cloneElement)(child,{onClick:value=>{onSelect(value),child.props.onClick?.(value)}})}))),[children,onSelect]),filteredOptions=(0,react.useMemo)((()=>{const currentFilter=filter.trim().toLocaleLowerCase();return currentFilter?options?.filter((({props})=>props.children.trim().toLocaleLowerCase().includes(currentFilter))):options}),[options,filter]);(0,react.useEffect)((()=>{const currentTexts=new Map;react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&currentTexts.set(child.props?.value,child.props?.children)})),set(currentTexts)}),[children,set]);const onClear=(0,react.useCallback)((e=>{e.stopPropagation(),onSelect("")}),[onSelect]);return(0,react.useEffect)((()=>{const hide=(0,Common.n)(ref,(()=>open&&onToggle(!1)));return document.documentElement.addEventListener("click",hide),()=>document.documentElement.removeEventListener("click",hide)}),[open,onToggle]),(0,react.useEffect)((()=>{const hide=e=>"Escape"===e.key&&open&&onToggle(!1);return document.addEventListener("keydown",hide,!1),()=>document.removeEventListener("keydown",hide,!1)}),[open,onToggle]),(0,react.useEffect)((()=>{open?filterRef.current?.focus():filterRef.current?.blur()}),[open,filterRef]),(0,jsx_runtime.jsxs)(Container,{ref,...args,children:[(0,jsx_runtime.jsxs)(SelectContent,{disabled,onClick:()=>hasPermission&&onToggle(!open),children:[(0,jsx_runtime.jsx)(ArrowIcon,{open}),args.hasClear&&hasPermission&&(0,jsx_runtime.jsx)(ClearIcon,{onClick:onClear}),!filter&&""!==currentValue&&(0,jsx_runtime.jsx)("p",{children:texts?.get(currentValue)}),(0,jsx_runtime.jsx)(InputFilter,{value:filter,ref:filterRef,readOnly:!hasPermission,placeholder:selectPlaceholder,onKeyUp:e=>e.preventDefault(),onChange:e=>setFilter(e.target.value)})]}),(0,jsx_runtime.jsx)(OptionsContent,{open,direction,children:filteredOptions?.length?filteredOptions:(0,jsx_runtime.jsx)(Option.X,{text:args.noOptionText??select?.noOption??""})})]})},Select_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},noOptionText:{defaultValue:null,description:"",name:"noOptionText",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"OptionValue | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"OptionValue | undefined"}},hasClear:{defaultValue:null,description:"",name:"hasClear",required:!1,type:{name:"boolean | undefined"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: OptionValue) => void) | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"up"'},{value:'"down"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>useMap});var react=__webpack_require__("./node_modules/react/index.js");const useMap=initialValue=>{const[map,setMap]=(0,react.useState)(initialValue?new Map(initialValue):void 0),add=(0,react.useCallback)((async(key,value)=>{let result;return await setMap((currentMap=>{let current=new Map(currentMap);return current?.set(key,value),result=current})),result}),[]),remove=(0,react.useCallback)((async key=>{let result;return await setMap((currentMap=>{let current=new Map(currentMap);return current?.delete(key),result=current})),result}),[]),clear=(0,react.useCallback)((()=>setMap(new Map)),[]);return[map,(0,react.useMemo)((()=>({set:setMap,add,edit:add.bind({}),remove,clear})),[add,remove,clear])]}}}]);
//# sourceMappingURL=components-Select-Select-stories.f9dcb88a.iframe.bundle.js.map