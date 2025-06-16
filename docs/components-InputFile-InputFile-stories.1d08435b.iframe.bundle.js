/*! For license information please see components-InputFile-InputFile-stories.1d08435b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[1167],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),__defProp=Object.defineProperty,ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in external_STORYBOOK_MODULE_GLOBAL_.global&&"function"==typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}]},"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var Loading=__webpack_require__("./src/components/Loading/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.button`
  width: ${({fullWidth})=>fullWidth?"100%":"max-content"};
  min-width: ${({minWidth})=>minWidth?"12rem":"inital"};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
  outline: transparent;
  background-color: transparent;
  border: 0.1rem solid transparent;
  padding: ${({small})=>small?"0.5rem 1.6rem":"0.9rem 1.6rem"};

  &:focus {
    outline: 0.2rem solid var(--gray);
  }

  > code:empty {
    display: none;
  }

  ${({variant,bordered,outlined,disabled})=>{const[textColor,bg,bgHover,bgOutline]=((variant,disabled)=>{if(disabled)return["var(--neutral)","var(--neutral-400)","var(--neutral-400)","var(--neutral)"];switch(variant){case"success":return["var(--white)","var(--green-light-600)","var(--green-light-800)","var(--green-light-100)"];case"danger":return["var(--white)","var(--red-light-600)","var(--red-light-800)","var(--red-light-100)"];case"link":return["var(--blue-dark-600)","transparent","transparent","transparent"];default:return["var(--white)","var(--blue-dark-600)","var(--blue-dark-800)","var(--neutral)"]}})(variant,disabled);return"link"===variant?styled_components_browser_esm.AH`
        color: ${textColor};

        &:hover {
          text-decoration: underline;
        }
      `:bordered?styled_components_browser_esm.AH`
        color: ${bg};
        border-color: ${bg};

        &:hover {
          color: ${bgHover};
          border-color: ${bgHover};
          cursor: ${disabled?"no-drop":"pointer"};
        }
      `:outlined?styled_components_browser_esm.AH`
        color: ${bg};
        background-color: ${bgOutline};

        &:hover {
          color: ${bgHover};
          cursor: ${disabled?"no-drop":"pointer"};
        }
      `:styled_components_browser_esm.AH`
      background: ${bg};
      color: ${textColor};

      &:hover {
        background: ${bgHover};
        cursor: ${disabled?"no-drop":"pointer"};
      }
    `}}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)((({children,loading,icon,onClick,...args},ref)=>{const disabled=(0,react.useMemo)((()=>loading||args.disabled),[loading,args]);return(0,jsx_runtime.jsxs)(Container,{...args,ref,disabled,onClick:e=>!disabled&&onClick?.(e),children:[(0,jsx_runtime.jsx)("code",{children:loading?(0,jsx_runtime.jsx)(Loading.R,{}):icon}),children]})}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"link"'},{value:'"success"'},{value:'"default"'},{value:'"danger"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"boolean | undefined"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean | undefined"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean | undefined"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.tsx")},"./src/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Chip=({children,icon,onClose,...args})=>(0,jsx_runtime.jsxs)(Container,{...args,children:[icon,children,onClose&&(0,jsx_runtime.jsx)("span",{onClick:onClose,children:"×"})]});try{Chip.displayName="Chip",Chip.__docgenInfo={description:"",displayName:"Chip",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"default"'},{value:'"danger"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Chip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>_Chip__WEBPACK_IMPORTED_MODULE_0__.v});var _Chip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Chip/Chip.tsx")},"./src/components/InputFile/InputFile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Multiple:()=>Multiple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputFile_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),hooks=__webpack_require__("./src/hooks/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),Chip=__webpack_require__("./src/components/Chip/index.ts"),CommonText=__webpack_require__("./src/providers/CommonText/index.ts"),Button=__webpack_require__("./src/components/Button/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const InputFileContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  height: 12.2rem;
  border: 0.1rem dashed var(--neutral-400);
  border-radius: 0.4rem;
  padding: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > div:first-child {
    max-height: 100%;
    overflow: auto;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    > p {
      pointer-events: none;
    }
  }

  > button {
    z-index: 2;
    min-width: max-content;
  }
`,HiddenInputFile=styled_components_browser_esm.Ay.input.attrs({type:"file"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 0;
  pointer-events: fill;
`,CustomButton=(0,styled_components_browser_esm.Ay)(Button.$)`
  color: var(--blue-dark-600);
  border-color: var(--blue-dark-600);
  background-color: var(--white);

  &:hover {
    color: var(--blue-dark-800);
    border-color: var(--blue-dark-800);
    background-color: var(--white);
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputFile=(0,react.forwardRef)((({name,files,onClick,onRemove,onChange,...args},ref)=>{const{inputFile}=(0,CommonText.i)(),details=(0,react.useMemo)((()=>{switch(!0){case!!files?.length:return files.map(((file,index)=>(0,jsx_runtime.jsx)(Chip.v,{onClose:()=>onRemove?.(file,index),children:file.name},index)));case!!name:return(0,jsx_runtime.jsx)("p",{children:name});default:return(0,jsx_runtime.jsx)("p",{children:args.descriptionText??inputFile?.description??""})}}),[name,files,onRemove]);return(0,jsx_runtime.jsxs)(InputFileContainer,{children:[(0,jsx_runtime.jsx)("div",{children:details}),(0,jsx_runtime.jsx)(CustomButton,{bordered:!0,onClick,children:args.buttonText??inputFile?.button??""}),(0,jsx_runtime.jsx)(HiddenInputFile,{ref,onChange,accept:args.accept,multiple:args.multiple})]})}));try{InputFile.displayName="InputFile",InputFile.__docgenInfo={description:"",displayName:"InputFile",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},descriptionText:{defaultValue:null,description:"",name:"descriptionText",required:!1,type:{name:"string | undefined"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string | undefined"}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string | undefined"}},files:{defaultValue:null,description:"",name:"files",required:!1,type:{name:"File[] | undefined"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((file: File, index: number) => void) | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFile/InputFile.tsx#InputFile"]={docgenInfo:InputFile.__docgenInfo,name:"InputFile",path:"src/components/InputFile/InputFile.tsx#InputFile"})}catch(__react_docgen_typescript_loader_error){}const InputFile_stories={title:"Components/InputFile",component:InputFile,tags:["autodocs"],argTypes:{name:{type:"string",control:"text",description:"Nome do campo de entrada de arquivos"},descriptionText:{type:"string",control:"text",description:"Descrição do campo de entrada de arquivos"},buttonText:{type:"string",control:"text",description:"Texto do bottão que aciona o campo de entrada de arquivos"},accept:{type:"string",control:"text",description:"Formatos aceitos pelo campo de entrada de arquivos"},files:{description:"Lista de arquivos no campo de entrada de arquivos"},multiple:{type:"boolean",control:"boolean",description:"Deve permitir tratar mais de um arquivo no campo de entrada de arquivos"},onClick:{type:"function",description:"Método acionado ao clicar no botão"},onRemove:{type:"function",description:"Método acionado ao clicar no '✖' dentro do detalhe de cada arquivo adicionado"},onChange:{type:"function",description:"Método acionado ao selecionar algum arquivo"}}},Default={render:args=>{const[file,setFile]=(0,react.useState)(),inputRef=(0,react.useRef)(null),onClick=(0,react.useCallback)((()=>{inputRef.current?.click(),(0,dist.XI)("onClick")()}),[]),onChange=(0,react.useCallback)((e=>{setFile(e.target.files?.[0]),(0,dist.XI)("onChange")()}),[]);return(0,jsx_runtime.jsx)(InputFile,{...args,ref:inputRef,name:file?.name,onClick,onChange})},args:{name:"Default input file",descriptionText:"Description input file",buttonText:"Button input file",accept:"",multiple:!1,onClick:(0,dist.XI)("onClick"),onChange:(0,dist.XI)("onChange")}},Multiple={render:args=>{const[files,{add,remove}]=(0,hooks.k)(),inputRef=(0,react.useRef)(null),onClick=(0,react.useCallback)((()=>{inputRef.current?.click(),(0,dist.XI)("onClick")()}),[]),onRemove=(0,react.useCallback)((file=>{remove(file.name),(0,dist.XI)("onRemove")()}),[]),onChange=(0,react.useCallback)((e=>{Array.from(e.target.files??[]).map((file=>add(file.name,file))),(0,dist.XI)("onChange")()}),[]);return(0,jsx_runtime.jsx)(InputFile,{...args,ref:inputRef,onClick,onRemove,onChange,files:Array.from(files?.values()??[])})},args:{name:"Multiple input file",descriptionText:"Description input file",buttonText:"Button input file",accept:"",files:[],multiple:!0,onClick:(0,dist.XI)("onClick"),onRemove:(0,dist.XI)("onRemove"),onChange:(0,dist.XI)("onChange")}},__namedExportsOrder=["Default","Multiple"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [file, setFile] = useState<File>();\n    const inputRef = useRef<HTMLInputElement>(null);\n    const onClick = useCallback(() => {\n      inputRef.current?.click();\n      action("onClick")();\n    }, []);\n    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {\n      setFile(e.target.files?.[0]);\n      action("onChange")();\n    }, []);\n    return <InputFile {...args} ref={inputRef} name={file?.name} onClick={onClick} onChange={onChange} />;\n  },\n  args: {\n    name: "Default input file",\n    descriptionText: "Description input file",\n    buttonText: "Button input file",\n    accept: "",\n    multiple: false,\n    onClick: action("onClick"),\n    onChange: action("onChange")\n  }\n}',...Default.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [files, {\n      add,\n      remove\n    }] = useMap<string, File>();\n    const inputRef = useRef<HTMLInputElement>(null);\n    const onClick = useCallback(() => {\n      inputRef.current?.click();\n      action("onClick")();\n    }, []);\n    const onRemove = useCallback((file: File) => {\n      remove(file.name);\n      action("onRemove")();\n    }, []);\n    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {\n      Array.from(e.target.files ?? []).map(file => add(file.name, file));\n      action("onChange")();\n    }, []);\n    return <InputFile {...args} ref={inputRef} onClick={onClick} onRemove={onRemove} onChange={onChange} files={Array.from(files?.values() ?? [])} />;\n  },\n  args: {\n    name: "Multiple input file",\n    descriptionText: "Description input file",\n    buttonText: "Button input file",\n    accept: "",\n    files: [],\n    multiple: true,\n    onClick: action("onClick"),\n    onRemove: action("onRemove"),\n    onChange: action("onChange")\n  }\n}',...Multiple.parameters?.docs?.source}}}},"./src/components/Loading/Loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>Loading,A:()=>Loading_Loading});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const LoadingContainer=styled_components_browser_esm.Ay.div`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=args=>(0,jsx_runtime.jsx)(LoadingContainer,{...args,children:(0,jsx_runtime.jsx)(LoadingContent,{})}),Loading_Loading=Loading;try{Loading.displayName="Loading",Loading.__docgenInfo={description:"",displayName:"Loading",props:{centered:{defaultValue:null,description:"",name:"centered",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/Loading.tsx#Loading"]={docgenInfo:Loading.__docgenInfo,name:"Loading",path:"src/components/Loading/Loading.tsx#Loading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Loading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>_Loading__WEBPACK_IMPORTED_MODULE_0__.R});var _Loading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Loading/Loading.tsx")},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>useMap});var react=__webpack_require__("./node_modules/react/index.js");const useMap=initialValue=>{const[map,setMap]=(0,react.useState)(initialValue?new Map(initialValue):void 0),add=(0,react.useCallback)((async(key,value)=>{let result;return await setMap((currentMap=>{let current=new Map(currentMap);return current?.set(key,value),result=current})),result}),[]),remove=(0,react.useCallback)((async key=>{let result;return await setMap((currentMap=>{let current=new Map(currentMap);return current?.delete(key),result=current})),result}),[]),clear=(0,react.useCallback)((()=>setMap(new Map)),[]);return[map,(0,react.useMemo)((()=>({set:setMap,add,edit:add.bind({}),remove,clear})),[add,remove,clear])]}},"./src/providers/CommonText/CommonText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useCommonText,q:()=>CommonTextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CommonTextContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),CommonTextProvider=({children,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CommonTextContext.Provider,{value:{...args},children}),useCommonText=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CommonTextContext);try{CommonTextProvider.displayName="CommonTextProvider",CommonTextProvider.__docgenInfo={description:"",displayName:"CommonTextProvider",props:{inputFile:{defaultValue:null,description:"",name:"inputFile",required:!1,type:{name:"{ description: string; button: string; } | undefined"}},select:{defaultValue:null,description:"",name:"select",required:!1,type:{name:"{ selectAll: string; noOption: string; } | undefined"}},table:{defaultValue:null,description:"",name:"table",required:!1,type:{name:"{ total: string; } | undefined"}},dialog:{defaultValue:null,description:"",name:"dialog",required:!1,type:{name:"{ cancel: string; confirm: string; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/CommonText/CommonText.tsx#CommonTextProvider"]={docgenInfo:CommonTextProvider.__docgenInfo,name:"CommonTextProvider",path:"src/providers/CommonText/CommonText.tsx#CommonTextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/providers/CommonText/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>_CommonText__WEBPACK_IMPORTED_MODULE_0__.i});var _CommonText__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/providers/CommonText/CommonText.tsx")}}]);
//# sourceMappingURL=components-InputFile-InputFile-stories.1d08435b.iframe.bundle.js.map