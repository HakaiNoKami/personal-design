/*! For license information please see providers-Theme-Theme-stories.9a56efe7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_design=self.webpackChunkpersonal_design||[]).push([[2539],{"./node_modules/react-dom/cjs/react-dom.production.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("./node_modules/react/index.js");function formatProdErrorMessage(code){var url="https://react.dev/errors/"+code;if(1<arguments.length){url+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)url+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+code+"; visit "+url+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function noop(){}var Internals={d:{f:noop,r:function(){throw Error(formatProdErrorMessage(522))},D:noop,C:noop,L:noop,m:noop,X:noop,S:noop,M:noop},p:0,findDOMNode:null},REACT_PORTAL_TYPE=Symbol.for("react.portal");var ReactSharedInternals=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function getCrossOriginStringAs(as,input){return"font"===as?"":"string"==typeof input?"use-credentials"===input?input:"":void 0}exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Internals,exports.createPortal=function(children,container){var key=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!container||1!==container.nodeType&&9!==container.nodeType&&11!==container.nodeType)throw Error(formatProdErrorMessage(299));return function createPortal$1(children,containerInfo,implementation){var key=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:REACT_PORTAL_TYPE,key:null==key?null:""+key,children,containerInfo,implementation}}(children,container,null,key)},exports.flushSync=function(fn){var previousTransition=ReactSharedInternals.T,previousUpdatePriority=Internals.p;try{if(ReactSharedInternals.T=null,Internals.p=2,fn)return fn()}finally{ReactSharedInternals.T=previousTransition,Internals.p=previousUpdatePriority,Internals.d.f()}},exports.preconnect=function(href,options){"string"==typeof href&&(options?options="string"==typeof(options=options.crossOrigin)?"use-credentials"===options?options:"":void 0:options=null,Internals.d.C(href,options))},exports.prefetchDNS=function(href){"string"==typeof href&&Internals.d.D(href)},exports.preinit=function(href,options){if("string"==typeof href&&options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin),integrity="string"==typeof options.integrity?options.integrity:void 0,fetchPriority="string"==typeof options.fetchPriority?options.fetchPriority:void 0;"style"===as?Internals.d.S(href,"string"==typeof options.precedence?options.precedence:void 0,{crossOrigin,integrity,fetchPriority}):"script"===as&&Internals.d.X(href,{crossOrigin,integrity,fetchPriority,nonce:"string"==typeof options.nonce?options.nonce:void 0})}},exports.preinitModule=function(href,options){if("string"==typeof href)if("object"==typeof options&&null!==options){if(null==options.as||"script"===options.as){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.M(href,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0})}}else null==options&&Internals.d.M(href)},exports.preload=function(href,options){if("string"==typeof href&&"object"==typeof options&&null!==options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin);Internals.d.L(href,as,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0,type:"string"==typeof options.type?options.type:void 0,fetchPriority:"string"==typeof options.fetchPriority?options.fetchPriority:void 0,referrerPolicy:"string"==typeof options.referrerPolicy?options.referrerPolicy:void 0,imageSrcSet:"string"==typeof options.imageSrcSet?options.imageSrcSet:void 0,imageSizes:"string"==typeof options.imageSizes?options.imageSizes:void 0,media:"string"==typeof options.media?options.media:void 0})}},exports.preloadModule=function(href,options){if("string"==typeof href)if(options){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.m(href,{as:"string"==typeof options.as&&"script"!==options.as?options.as:void 0,crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0})}else Internals.d.m(href)},exports.requestFormReset=function(form){Internals.d.r(form)},exports.unstable_batchedUpdates=function(fn,a){return fn(a)},exports.useFormState=function(action,initialState,permalink){return ReactSharedInternals.H.useFormState(action,initialState,permalink)},exports.useFormStatus=function(){return ReactSharedInternals.H.useHostTransitionStatus()},exports.version="19.1.0"},"./node_modules/react-dom/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{!function checkDCE(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}(),module.exports=__webpack_require__("./node_modules/react-dom/cjs/react-dom.production.js")},"./src/components/Dialog/Dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Dialog});var Button=__webpack_require__("./src/components/Button/index.ts"),Modal=__webpack_require__("./src/components/Modal/index.ts"),CommonText=__webpack_require__("./src/providers/CommonText/index.ts"),ModalFooter=__webpack_require__("./src/components/ModalFooter/ModalFooter.tsx"),ModalHeader=__webpack_require__("./src/components/ModalHeader/index.ts"),ModalMain=__webpack_require__("./src/components/ModalMain/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DialogModalHeader=(0,styled_components_browser_esm.Ay)(ModalHeader.r)`
  border: initial;
  width: 40rem;
  align-items: flex-start;

  > button {
    height: 3rem;
  }
`,DialogModalMain=(0,styled_components_browser_esm.Ay)(ModalMain.v)`
  p {
    text-align: justify;
  }
`,DialogModalFooter=(0,styled_components_browser_esm.Ay)(ModalFooter.j)`
  background-color: var(--white);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dialog=({show,title,description,confirmColor="danger",cancelText,confirmText,onCancel,onConfirm})=>{const{dialog}=(0,CommonText.i)();return(0,jsx_runtime.jsxs)(Modal.a,{show,children:[(0,jsx_runtime.jsx)(DialogModalHeader,{title,onClose:onCancel}),(0,jsx_runtime.jsx)(DialogModalMain,{children:(0,jsx_runtime.jsx)("p",{children:description})}),(0,jsx_runtime.jsxs)(DialogModalFooter,{children:[(0,jsx_runtime.jsx)(Button.$,{outlined:!0,onClick:onCancel,children:cancelText??dialog?.cancel??""}),(0,jsx_runtime.jsx)(Button.$,{variant:confirmColor,onClick:onConfirm,children:confirmText??dialog?.confirm??""})]})]})};try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string | undefined"}},confirmText:{defaultValue:null,description:"",name:"confirmText",required:!1,type:{name:"string | undefined"}},confirmColor:{defaultValue:{value:"danger"},description:"",name:"confirmColor",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"link"'},{value:'"success"'},{value:'"default"'},{value:'"danger"'}]}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/components/Dialog/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal,A:()=>Modal_Modal});var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10vh;
  z-index: 15;
`,ModalContent=styled_components_browser_esm.Ay.div`
  width: 40rem;
  background-color: var(--white);
  border-radius: 0.4rem;
  animation: modal-fade-in 0.5s;

  &:has(footer) main {
    max-height: calc(80vh - 14.6rem);
  }

  @keyframes modal-fade-in {
    from {
      transform: translateY(-1rem);
    }

    to {
      transform: translateY(0);
    }
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const modalRoot=document.getElementById("modal"),Modal=({show,children})=>modalRoot&&show?(0,react_dom.createPortal)((0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(ModalContent,{children})}),modalRoot):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),Modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_Modal__WEBPACK_IMPORTED_MODULE_0__.a});var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Modal/Modal.tsx")},"./src/components/ModalFooter/ModalFooter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ModalFooter,A:()=>ModalFooter_ModalFooter});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.footer`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem;
  border-radius: 0 0 0.4rem 0.4rem;
  border-top: 0.1rem solid var(--gray);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalFooter=args=>(0,jsx_runtime.jsx)(Container,{...args}),ModalFooter_ModalFooter=ModalFooter;try{ModalFooter.displayName="ModalFooter",ModalFooter.__docgenInfo={description:"",displayName:"ModalFooter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalFooter/ModalFooter.tsx#ModalFooter"]={docgenInfo:ModalFooter.__docgenInfo,name:"ModalFooter",path:"src/components/ModalFooter/ModalFooter.tsx#ModalFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ModalHeader/ModalHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>ModalHeader,A:()=>ModalHeader_ModalHeader});var assets=__webpack_require__("./src/assets/index.ts"),IconButton=__webpack_require__("./src/components/IconButton/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  border-bottom: 0.1rem solid var(--gray);
  gap: 1.6rem;

  > h3 {
    font-weight: normal;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalHeader=({children,title,onClose,...args})=>((0,react.useEffect)((()=>{const hide=e=>"Escape"===e.key&&onClose?.();return document.addEventListener("keydown",hide,!1),()=>document.removeEventListener("keydown",hide,!1)}),[onClose]),(0,jsx_runtime.jsxs)(Container,{...args,children:[children??(0,jsx_runtime.jsx)("h3",{children:title}),onClose&&(0,jsx_runtime.jsx)(IconButton.K,{small:!0,outlined:!0,variant:"text",onClick:onClose,icon:(0,jsx_runtime.jsx)(assets.US,{})})]})),ModalHeader_ModalHeader=ModalHeader;try{ModalHeader.displayName="ModalHeader",ModalHeader.__docgenInfo={description:"",displayName:"ModalHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalHeader/ModalHeader.tsx#ModalHeader"]={docgenInfo:ModalHeader.__docgenInfo,name:"ModalHeader",path:"src/components/ModalHeader/ModalHeader.tsx#ModalHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ModalHeader/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>_ModalHeader__WEBPACK_IMPORTED_MODULE_0__.r});var _ModalHeader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ModalHeader/ModalHeader.tsx")},"./src/components/ModalMain/ModalMain.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>ModalMain,A:()=>ModalMain_ModalMain});const Container=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.main`
  position: relative;
  width: 100%;
  max-height: calc(80vh - 7.3rem);
  transition: height ease-in-out 0.2s;
  padding: 1.6rem;
  overflow-y: ${({noOverflow})=>noOverflow?"initial":"auto"};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalMain=args=>(0,jsx_runtime.jsx)(Container,{...args}),ModalMain_ModalMain=ModalMain;try{ModalMain.displayName="ModalMain",ModalMain.__docgenInfo={description:"",displayName:"ModalMain",props:{noOverflow:{defaultValue:null,description:"",name:"noOverflow",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalMain/ModalMain.tsx#ModalMain"]={docgenInfo:ModalMain.__docgenInfo,name:"ModalMain",path:"src/components/ModalMain/ModalMain.tsx#ModalMain"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ModalMain/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>_ModalMain__WEBPACK_IMPORTED_MODULE_0__.v});var _ModalMain__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ModalMain/ModalMain.tsx")},"./src/components/Toast/Toast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Toast,A:()=>Toast_Toast});var assets=__webpack_require__("./src/assets/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/index.ts"),IconButton=__webpack_require__("./src/components/IconButton/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const getColorByVariant=variant=>{switch(variant){case"error":return"var(--red)";case"warning":return"var(--yellow)";case"info":return"var(--cyan)";default:return"var(--green)"}},Container=styled_components_browser_esm.Ay.div`
  width: 30rem;
  padding: 1.6rem;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  background-color: var(--white);
  gap: 1.6rem;

  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 1.2rem 0.2rem var(--box-shadow),
    0.2rem 0.2rem 1.2rem 0.2rem var(--box-shadow);

  border-left: 0.4rem solid
    ${({variant})=>variant&&getColorByVariant(variant)};

  &:hover .close-Button {
    opacity: 1;
  }
`,IconContent=styled_components_browser_esm.Ay.div`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({variant})=>variant&&getColorByVariant(variant)};
`,InfoContent=styled_components_browser_esm.Ay.div`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2rem;

  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-line;
    -webkit-line-clamp: 4;
    word-break: break-word;
  }
`,TitleContent=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`,CustomButton=(0,styled_components_browser_esm.Ay)(Button.$)`
  padding: 0.6rem 1.6rem;
  margin-top: 1.6rem;
  background-color: var(--neutral);
  color: var(--text-title);

  &:hover,
  &:focus {
    background-color: var(--gray);
  }
`,CloseButton=(0,styled_components_browser_esm.Ay)(IconButton.K).attrs({className:"close-Button"})`
  width: 2rem;
  height: 2rem;
  opacity: 0;
  transition: ease-in-out 0.2s;
  color: var(--text);

  &:hover {
    color: var(--text-title);
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toast=({variant="success",title,description,actionText,fixed,actionCallback,onClose,...args})=>{const ref=(0,react.useRef)(null),icon=(0,react.useMemo)((()=>{switch(variant){case"error":return(0,jsx_runtime.jsx)(assets.IJ,{});case"warning":return(0,jsx_runtime.jsx)(assets.id,{});case"info":return(0,jsx_runtime.jsx)(assets.mo,{});default:return(0,jsx_runtime.jsx)(assets.BK,{})}}),[]);return(0,react.useEffect)((()=>{let timer;const currentRef=ref?.current;if(fixed)return;return(async()=>{await new Promise((()=>{timer=setTimeout((()=>onClose?.()),3e3),currentRef?.addEventListener("mouseenter",(()=>{clearTimeout(timer)})),currentRef?.addEventListener("mouseleave",(()=>{timer=setTimeout((()=>onClose?.()),1500)}))}))})(),()=>{clearTimeout(timer)}}),[fixed,onClose]),(0,jsx_runtime.jsxs)(Container,{...args,variant,ref,children:[(0,jsx_runtime.jsx)(IconContent,{variant,children:icon}),(0,jsx_runtime.jsxs)(InfoContent,{children:[(0,jsx_runtime.jsxs)(TitleContent,{children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)("b",{children:title})}),(0,jsx_runtime.jsx)(CloseButton,{icon:(0,jsx_runtime.jsx)(assets.US,{}),onClick:onClose})]}),(0,jsx_runtime.jsx)("p",{title:description,children:description}),actionText&&actionCallback&&(0,jsx_runtime.jsx)(CustomButton,{onClick:actionCallback,children:actionText})]})]})},Toast_Toast=Toast;try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string | undefined"}},fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean | undefined"}},actionCallback:{defaultValue:null,description:"",name:"actionCallback",required:!1,type:{name:"(() => void) | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},variant:{defaultValue:{value:"success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>useMap});var react=__webpack_require__("./node_modules/react/index.js");const useMap=initialValue=>{const[map,setMap]=(0,react.useState)(initialValue?new Map(initialValue):void 0),add=(0,react.useCallback)((async(key,value)=>{let result;return await setMap((currentMap=>{let current=new Map(currentMap);return current?.set(key,value),result=current})),result}),[]),remove=(0,react.useCallback)((async key=>{let result;return await setMap((currentMap=>{let current=new Map(currentMap);return current?.delete(key),result=current})),result}),[]),clear=(0,react.useCallback)((()=>setMap(new Map)),[]);return[map,(0,react.useMemo)((()=>({set:setMap,add,edit:add.bind({}),remove,clear})),[add,remove,clear])]}},"./src/providers/CommonText/CommonText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useCommonText,q:()=>CommonTextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CommonTextContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),CommonTextProvider=({children,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CommonTextContext.Provider,{value:{...args},children}),useCommonText=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CommonTextContext);try{CommonTextProvider.displayName="CommonTextProvider",CommonTextProvider.__docgenInfo={description:"",displayName:"CommonTextProvider",props:{inputFile:{defaultValue:null,description:"",name:"inputFile",required:!1,type:{name:"{ description: string; button: string; } | undefined"}},select:{defaultValue:null,description:"",name:"select",required:!1,type:{name:"{ selectAll: string; noOption: string; } | undefined"}},table:{defaultValue:null,description:"",name:"table",required:!1,type:{name:"{ total: string; } | undefined"}},dialog:{defaultValue:null,description:"",name:"dialog",required:!1,type:{name:"{ cancel: string; confirm: string; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/CommonText/CommonText.tsx#CommonTextProvider"]={docgenInfo:CommonTextProvider.__docgenInfo,name:"CommonTextProvider",path:"src/providers/CommonText/CommonText.tsx#CommonTextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/providers/CommonText/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>_CommonText__WEBPACK_IMPORTED_MODULE_0__.i});var _CommonText__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/providers/CommonText/CommonText.tsx")},"./src/providers/Theme/Theme.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Theme_stories});var global_styles=__webpack_require__("./src/global.styles.ts"),CommonText=__webpack_require__("./src/providers/CommonText/CommonText.tsx"),Dialog=__webpack_require__("./src/components/Dialog/Dialog.tsx"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DialogContext=(0,react.createContext)({}),DialogProvider=({children,...args})=>{const[open,setOpen]=(0,react.useState)(!1),[data,setData]=(0,react.useState)(),confirm=(0,react.useCallback)((data=>{setData(data),setOpen(!0)}),[]),handleClose=(0,react.useCallback)((()=>{setOpen(!1),setData(void 0)}),[]),handleConfirm=(0,react.useCallback)((()=>{data?.callback?.(),handleClose()}),[data,handleClose]);return(0,jsx_runtime.jsxs)(DialogContext.Provider,{value:{confirm},children:[children,data&&(0,jsx_runtime.jsx)(Dialog.l,{show:open,title:data?.title,onCancel:handleClose,onConfirm:handleConfirm,description:data?.description,confirmColor:data?.confirmColor,cancelText:data?.cancelText??args.cancelText,confirmText:data?.confirmText??args.confirmText})]})};try{DialogProvider.displayName="DialogProvider",DialogProvider.__docgenInfo={description:"",displayName:"DialogProvider",props:{cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string | undefined"}},confirmText:{defaultValue:null,description:"",name:"confirmText",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/Dialog/Dialog.tsx#DialogProvider"]={docgenInfo:DialogProvider.__docgenInfo,name:"DialogProvider",path:"src/providers/Dialog/Dialog.tsx#DialogProvider"})}catch(__react_docgen_typescript_loader_error){}var Toast=__webpack_require__("./src/components/Toast/Toast.tsx"),hooks=__webpack_require__("./src/hooks/index.ts"),Common=__webpack_require__("./src/utils/Common/Common.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  position: fixed;
  padding: 1rem;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  z-index: 20;

  > div {
    animation: leftToRight 250ms linear;
    background-color: var(--white);

    b {
      color: var(--text-title);
    }
  }

  @keyframes leftToRight {
    from {
      transform: translateX(-50%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes rightToLeft {
    from {
      transform: translateX(50%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  ${({position,reverseOrder})=>{switch(position){case"top-left":return styled_components_browser_esm.AH`
          top: 0;
          left: 0;

          flex-direction: ${reverseOrder?"column":"column-reverse"};
        `;case"top-right":return styled_components_browser_esm.AH`
          top: 0;
          right: 0;

          flex-direction: ${reverseOrder?"column":"column-reverse"};

          > div {
            animation-name: rightToLeft;
          }
        `;case"bottom-left":return styled_components_browser_esm.AH`
          left: 0;
          bottom: 0;

          flex-direction: ${reverseOrder?"column-reverse":"column"};
        `;default:return styled_components_browser_esm.AH`
          right: 0;
          bottom: 0;

          flex-direction: ${reverseOrder?"column-reverse":"column"};

          > div {
            animation-name: rightToLeft;
          }
        `}}}
`,ToastContext=(0,react.createContext)({}),ToastProvider=({children,...args})=>{const[toasts,{add,clear,remove}]=(0,hooks.k)(),createToast=(0,react.useMemo)((()=>function(args){const id=(0,Common.c)();add(id,{...args,variant:this,onClose:()=>remove(id),title:args.title??this})}),[add,remove]),success=(0,react.useMemo)((()=>createToast.bind("success")),[createToast]),error=(0,react.useMemo)((()=>createToast.bind("error")),[createToast]),warning=(0,react.useMemo)((()=>createToast.bind("warning")),[createToast]),info=(0,react.useMemo)((()=>createToast.bind("info")),[createToast]),clearToasts=(0,react.useCallback)((()=>clear()),[clear]);return(0,jsx_runtime.jsxs)(ToastContext.Provider,{value:{success,error,warning,info,clearToasts},children:[(0,jsx_runtime.jsx)(Container,{...args,children:Array.from(toasts??[])?.map((([id,props])=>(0,react.createElement)(Toast.y,{...props,key:id})))}),children]})};try{ToastProvider.displayName="ToastProvider",ToastProvider.__docgenInfo={description:"",displayName:"ToastProvider",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},reverseOrder:{defaultValue:null,description:"",name:"reverseOrder",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/Toast/Toast.tsx#ToastProvider"]={docgenInfo:ToastProvider.__docgenInfo,name:"ToastProvider",path:"src/providers/Toast/Toast.tsx#ToastProvider"})}catch(__react_docgen_typescript_loader_error){}const ThemeContext=(0,react.createContext)({}),ThemeProvider=({children,theme="light",toastConfig,commonTextConfig})=>{const globalStyle=(0,react.useMemo)((()=>"dark"===theme?(0,jsx_runtime.jsx)(global_styles.s,{}):(0,jsx_runtime.jsx)(global_styles.Y,{})),[]);return(0,jsx_runtime.jsxs)(ThemeContext.Provider,{value:{},children:[globalStyle,(0,jsx_runtime.jsx)(CommonText.q,{...commonTextConfig,children:(0,jsx_runtime.jsx)(ToastProvider,{...toastConfig,children:(0,jsx_runtime.jsx)(DialogProvider,{cancelText:commonTextConfig.dialog?.cancel,confirmText:commonTextConfig.dialog?.confirm,children})})})]})};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"light"'},{value:'"dark"'}]}},toastConfig:{defaultValue:null,description:"",name:"toastConfig",required:!0,type:{name:"ToastDataProps"}},commonTextConfig:{defaultValue:null,description:"",name:"commonTextConfig",required:!0,type:{name:"CommonTextDataProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/Theme/Theme.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/providers/Theme/Theme.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}const Theme_stories={title:"Providers/Theme",component:ThemeProvider,argTypes:{toastConfig:{control:{type:"object"},description:"Options for toast notifications",defaultValue:{position:"top-right",autoClose:5e3}},commonTextConfig:{control:{type:"object"},description:"Options for toast notifications",defaultValue:{inputFile:{description:"",button:""},select:{selectAll:"",noOption:""},table:{total:""},dialog:{cancel:"",confirm:""}}}}}},"./src/utils/Common/Common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>generateUID,n:()=>exitElement});const exitElement=(ref,callback)=>e=>{const equalsTarget=e.target===ref?.current,containsTarget=ref?.current?.contains(e.target);equalsTarget||containsTarget||callback?.()},generateUID=()=>{const numToBase16=num=>Math.floor(num).toString(16);return numToBase16(Date.now()/1e3)+" ".repeat(16).replace(/./g,(()=>numToBase16(16*Math.random())))}}}]);
//# sourceMappingURL=providers-Theme-Theme-stories.9a56efe7.iframe.bundle.js.map