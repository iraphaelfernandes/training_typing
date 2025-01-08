import{j as e}from"./jsx-runtime-50395f49.js";import{r as c}from"./index-9fa1aa67.js";import{u as g,t as r,T as y}from"./useTheme-f2775e13.js";const b=()=>{const[t,s]=c.useState(!1),a=c.useRef(null),o=c.useCallback(n=>{a.current&&!a.current.contains(n.target)&&s(!1)},[s]),i=c.useCallback(()=>{s(!t)},[t,s]);return c.useEffect(()=>(document.addEventListener("mousedown",o,!0),()=>{document.removeEventListener("mousedown",o,!0)}),[o]),{isOpen:t,toggleDropdown:i,dropdownRef:a}},w=()=>{const{dropdownRef:t,isOpen:s,toggleDropdown:a}=b(),{systemTheme:o,setTheme:i}=g();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex rounded-md font-mono",children:e.jsxs("div",{className:"relative",ref:t,children:[e.jsxs("button",{type:"button",className:"inline-flex h-full items-center justify-center rounded-md border-0 px-2 outline-0",style:{backgroundColor:o.background.secondary,border:`1px solid ${o.text.secondary}`},onClick:()=>a(),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{style:{backgroundColor:o.background.primary},className:"aspect-square w-3 rounded-full"}),e.jsx("div",{style:{backgroundColor:o.text.primary},className:"aspect-square w-3 rounded-full"}),e.jsx("div",{style:{backgroundColor:o.text.secondary},className:"aspect-square w-3 rounded-full"})]}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ml-3 h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})]}),e.jsx("div",{className:"absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md shadow-lg",style:{backgroundColor:o.background.secondary,border:`1px solid ${o.text.secondary}`,display:s?"block":"none"},children:e.jsx("ul",{className:"divide-y divide-slate-400",style:{color:o.text.title},children:Object.keys(r).map(n=>e.jsxs("li",{className:"flex cursor-pointer items-center justify-between p-3 text-sm",onClick:()=>{i(r[n]),console.log("DEBUG: The user has selected a new theme.")},children:[e.jsx("span",{children:r[n].name}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{style:{backgroundColor:r[n].background.primary},className:"aspect-square w-3 rounded-full"}),e.jsx("div",{style:{backgroundColor:r[n].text.primary},className:"aspect-square w-3 rounded-full"}),e.jsx("div",{style:{backgroundColor:r[n].text.secondary},className:"aspect-square w-3 rounded-full"})]})]},n))})})]})})})};w.__docgenInfo={description:"",methods:[],displayName:"ThemeDropdown"};const C={title:"Components/ThemeDropdown",component:w,decorators:[t=>e.jsx(y,{children:e.jsx(t,{})})],parameters:{docs:{description:{component:"A dropdown component that allows users to select and preview different theme options. Each theme option displays color indicators for background, primary text, and secondary text colors."}},actions:{handles:["click button","click li"]}},tags:["autodocs"]},d={parameters:{docs:{description:{story:"Default state of the theme dropdown component."}}}},l={parameters:{docs:{description:{story:"Theme dropdown in its open state, showing all available theme options."}},pseudo:{hover:!0,focus:!0,active:!0}},play:async({canvasElement:t})=>{const s=t.querySelector("button");s&&s.click()}};var u,p,m;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default state of the theme dropdown component."
      }
    }
  }
}`,...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,x,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Theme dropdown in its open state, showing all available theme options."
      }
    },
    pseudo: {
      hover: true,
      focus: true,
      active: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    // Find and click the dropdown button to open it
    const button = canvasElement.querySelector("button");
    if (button) {
      button.click();
    }
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const N=["Default","OpenState"];export{d as Default,l as OpenState,N as __namedExportsOrder,C as default};
