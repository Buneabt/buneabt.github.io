import{r as o,j as u,R as y}from"./chunk-CaH0zObP.js";var N=`data:image/svg+xml;base64,${btoa(`<svg
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
</svg>`)}`,I=[16,32,48,64,96,128,256,384],g=[640,750,828,1080,1200,1920,2048,3840],l=[...I,...g],L=(e,i)=>{if(i){const a=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=a.exec(i);n)t.push(Number.parseInt(n[2],10));if(t.length){const n=Math.min(...t)*.01;return{widths:l.filter(d=>d>=g[0]*n),kind:"w"}}return{widths:l,kind:"w"}}if(e==null)return{widths:g,kind:"w"};const s=2;let r=l.findIndex(a=>a>=s*e);return r=r<0?l.length:r,{widths:l.slice(0,r+1),kind:"w"}},A=({src:e,width:i,quality:s,sizes:r,loader:a})=>{const{widths:t,kind:n}=L(i,r);return{sizes:!r&&n==="w"?"100vw":r,srcSet:t.map((d,c)=>`${a({src:e,quality:s,width:d})} ${n==="w"?d:c+1}${n}`).join(", "),src:a({src:e,quality:s,width:t[t.length-1]})}},w=e=>{if(typeof e=="number")return Math.round(e);if(typeof e=="string"){const i=Number.parseFloat(e);if(!Number.isNaN(i))return Math.round(i)}},E="(min-width: 1280px) 50vw, 100vw",M=80,R=e=>{try{return new URL(e),!0}catch{return!1}},k=e=>{const i=w(e.width),s=Math.max(Math.min(w(e.quality)??M,100),0);if(e.src!=null&&e.src!==""){if(e.src.startsWith("data:"))return{src:e.src};if(e.srcSet==null&&e.optimize){const a=e.sizes??(e.width==null?E:void 0);return A({src:e.src,width:i,quality:s,sizes:a,loader:e.loader})}const r={src:R(e.src)?e.src:e.loader({src:e.src,format:"raw"})};return e.srcSet!=null&&(r.srcSet=e.srcSet),e.sizes!=null&&(r.sizes=e.sizes),r}},D=({quality:e,loader:i,optimize:s=!0,loading:r="lazy",decoding:a="async",...t})=>{const n=k({src:t.src,srcSet:t.srcSet,sizes:t.sizes,width:t.width,quality:e,loader:i,optimize:s})??{src:N};return{alt:"",...t.alt!==void 0?{alt:t.alt}:{},...t.width!==void 0?{width:t.width}:{},...t.height!==void 0?{height:t.height}:{},...n,decoding:a,loading:r}};const $=({props:e,imageLoader:i,renderer:s})=>{let{loading:r="lazy",width:a,height:t,optimize:n=!0,decoding:d,quality:c,$webstudio$canvasOnly$assetId:f,alt:v,sizes:C,srcSet:z,src:S,...x}=e;const h=String(S??"");let m=h;return s==="canvas"&&(r="eager",d="sync",m=f??h,a!==void 0&&t!==void 0&&Number.isNaN(a)&&Number.isNaN(t)&&(n=!1,a=void 0,t=void 0)),{key:m,imageProps:{...x,...D({alt:v,width:a,height:t,sizes:C,src:h,srcSet:z,quality:c,loader:i,optimize:n,loading:r,decoding:d})}}},V=o.forwardRef(({children:e,...i},s)=>u.jsx("p",{...i,ref:s,children:e}));V.displayName="Paragraph";const P=o.forwardRef((e,i)=>{const{imageLoader:s,renderer:r}=o.useContext(y),{key:a,imageProps:t}=$({props:e,imageLoader:s,renderer:r});return u.jsx("img",{...t,ref:i},a)});P.displayName="Image";export{P as d,V as f};
