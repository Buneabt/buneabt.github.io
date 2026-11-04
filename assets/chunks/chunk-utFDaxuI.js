import{a as d,h as N,j as f,R as w}from"./chunk-Dia6HeGi.js";var I=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`,E=[16,32,48,64,96,128,256,384],g=[640,750,828,1080,1200,1920,2048,3840],c=[...E,...g],L=(e,r)=>{if(r){const a=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=a.exec(r);s)t.push(Number.parseInt(s[2],10));if(t.length){const s=Math.min(...t)*.01;return{widths:c.filter(l=>l>=g[0]*s),kind:"w"}}return{widths:c,kind:"w"}}if(e==null)return{widths:g,kind:"w"};const n=2;let i=c.findIndex(a=>a>=n*e);return i=i<0?c.length:i,{widths:c.slice(0,i+1),kind:"w"}},R=({src:e,width:r,quality:n,sizes:i,loader:a})=>{const{widths:t,kind:s}=L(r,i);return{sizes:!i&&s==="w"?"100vw":i,srcSet:t.map((l,o)=>`${a({src:e,quality:n,width:l})} ${s==="w"?l:o+1}${s}`).join(", "),src:a({src:e,quality:n,width:t[t.length-1]})}},u=e=>{if(typeof e=="number")return Math.round(e);if(typeof e=="string"){const r=Number.parseFloat(e);if(!Number.isNaN(r))return Math.round(r)}},A="(min-width: 1280px) 50vw, 100vw",M=80,k=e=>{try{return new URL(e),!0}catch{return!1}},V=e=>{const r=u(e.width),n=Math.max(Math.min(u(e.quality)??M,100),0);if(e.src!=null&&e.src!==""){if(e.src.startsWith("data:"))return{src:e.src};if(e.srcSet==null&&e.optimize){const a=e.sizes??(e.width==null?A:void 0);return R({src:e.src,width:r,quality:n,sizes:a,loader:e.loader})}const i={src:k(e.src)?e.src:e.loader({src:e.src,format:"raw"})};return e.srcSet!=null&&(i.srcSet=e.srcSet),e.sizes!=null&&(i.sizes=e.sizes),i}},$=({quality:e,loader:r,optimize:n=!0,loading:i="lazy",decoding:a="async",...t})=>{const s=V({src:t.src,srcSet:t.srcSet,sizes:t.sizes,width:t.width,quality:e,loader:r,optimize:n})??{src:I};return{alt:"",...t.alt!==void 0?{alt:t.alt}:{},...t.width!==void 0?{width:t.width}:{},...t.height!==void 0?{height:t.height}:{},...s,decoding:a,loading:i}};const D=({props:e,imageLoader:r,renderer:n})=>{let{loading:i="lazy",width:a,height:t,optimize:s=!0,decoding:l,quality:o,$webstudio$canvasOnly$assetId:v,alt:C,sizes:x,srcSet:y,src:z,...S}=e;const h=String(z??"");let m=h;return n==="canvas"&&(i="eager",l="sync",m=v??h,a!==void 0&&t!==void 0&&Number.isNaN(a)&&Number.isNaN(t)&&(s=!1,a=void 0,t=void 0)),{key:m,imageProps:{...S,...$({alt:C,width:a,height:t,sizes:x,src:h,srcSet:y,quality:o,loader:r,optimize:s,loading:i,decoding:l})}}},P="div",T=d.forwardRef(({tag:e,...r},n)=>{const i=N(r)??e??P;return d.createElement(i,{...r,ref:n})});T.displayName="Box";const U=d.forwardRef(({children:e,...r},n)=>f.jsx("p",{...r,ref:n,children:e}));U.displayName="Paragraph";const j=d.forwardRef((e,r)=>{const{imageLoader:n,renderer:i}=d.useContext(w),{key:a,imageProps:t}=D({props:e,imageLoader:n,renderer:i});return f.jsx("img",{...t,ref:r},a)});j.displayName="Image";const F=d.forwardRef(({value:e,defaultValue:r,...n},i)=>{const{renderer:a}=d.useContext(w),t=a==="canvas"?String(e??r):void 0;return d.createElement("textarea",{...n,key:t,defaultValue:e??r,ref:i})});F.displayName="Textarea";export{F as a,j as d,U as f,T as n};
