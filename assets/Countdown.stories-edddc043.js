import{j as s}from"./jsx-runtime-50395f49.js";import{r as k}from"./index-9fa1aa67.js";import{u as R,T as S}from"./useTheme-f2775e13.js";const j=({countdown:o,reset:d})=>{k.useEffect(()=>{d(),console.log("DEBUG: Component Countdown was called.")},[d]);const e={minutes:new Date(o).getUTCMinutes(),seconds:new Date(o).getUTCSeconds()},{systemTheme:m}=R();return s.jsx("div",{className:"flex justify-end",children:s.jsx("div",{className:" rounded-lg p-3",style:{backgroundColor:m.background.secondary},children:s.jsxs("span",{className:"text-right font-mono text-lg lg:text-xl",style:{color:m.text.secondary},children:[e.minutes<10?`0${e.minutes}`:e.minutes,":",e.seconds<10?`0${e.seconds}`:e.seconds]})})})};j.__docgenInfo={description:"",methods:[],displayName:"Countdown",props:{countdown:{required:!0,tsType:{name:"number"},description:""},reset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"Components/Countdown",component:j,decorators:[o=>s.jsx(S,{children:s.jsx(o,{})})],parameters:{docs:{description:{component:"A countdown timer component that displays minutes and seconds in a formatted way. The component automatically resets when mounted and adapts its styling based on the current theme."}}},tags:["autodocs"],argTypes:{countdown:{control:{type:"number"},description:"Time in milliseconds for the countdown"},reset:{description:"Function to reset the countdown timer"}}},c=()=>console.log("Reset called"),t={args:{countdown:125e3,reset:c}},n={args:{countdown:45e3,reset:c}},r={args:{countdown:5e3,reset:c}},a={args:{countdown:0,reset:c}};var u,i,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    countdown: 125000,
    // 2 minutes and 5 seconds
    reset: mockReset
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,g,w;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    countdown: 45000,
    // 45 seconds
    reset: mockReset
  }
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var h,x,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    countdown: 5000,
    // 5 seconds
    reset: mockReset
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,T,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    countdown: 0,
    reset: mockReset
  }
}`,...(C=(T=a.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const N=["Default","LessThanOneMinute","AlmostZero","ZeroState"];export{r as AlmostZero,t as Default,n as LessThanOneMinute,a as ZeroState,N as __namedExportsOrder,E as default};
