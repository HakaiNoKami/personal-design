"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[807],{"./src/components/Option/Option.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Option_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),assets=__webpack_require__("./src/assets/index.ts"),Select=__webpack_require__("./src/components/Select/Select.tsx"),Option=__webpack_require__("./src/components/Option/Option.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Option_stories={title:"Components/Option",component:Option.Ay,tags:["autodocs"],argTypes:{children:{type:"string",control:"text",description:"Conteúdo da opção"},value:{type:"string",control:"text",description:"Valor opção"},icon:{description:"Ícone da opção"},onClick:{type:"function",description:"Método acionado ao clicar na opção (controlado pelo seletor)"}}},Default={render:args=>(0,jsx_runtime.jsx)(Select.l,{fullWidth:!0,placeholder:"Select options",children:(0,jsx_runtime.jsx)(Option.Ay,{...args})}),args:{children:"Opção 1",value:"1",icon:(0,jsx_runtime.jsx)(assets.mo,{}),onClick:(0,dist.XI)("onClick")}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Select fullWidth placeholder="Select options">\n        <Option {...args} />\n      </Select>;\n  },\n  args: {\n    children: "Opção 1",\n    value: "1",\n    icon: <InfoIcon />,\n    onClick: action("onClick")\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Select,A:()=>Select_Select});var Option=__webpack_require__("./src/components/Option/index.ts"),hooks=__webpack_require__("./src/hooks/index.ts"),CommonText=__webpack_require__("./src/providers/CommonText/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),Common=__webpack_require__("./src/utils/Common/Common.ts"),assets=__webpack_require__("./src/assets/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=components-Option-Option-stories.c1e92c69.iframe.bundle.js.map