import{c as d,y as S,r as c,j as e,K as R,O as _,Q as U,R as V,W as A,ah as E,ai as $,aj as L,ak as T,X as B,I as D,q as w,m as C,d as a,g as H,i as M,B as v,ad as q,a8 as z,F,ae as W,af as Q,aa as Y,p as I,al as K,V as O,n as P}from"./index-D0A8lmel.js";import{AddResourceForm as X}from"./AddResourceForm-2go_xRXv.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],J=d("align-center",G);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],ee=d("align-left",Z);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],se=d("align-right",te);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],ne=d("bold",ae);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],le=d("italic",ie);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]],oe=d("list-ordered",re);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],de=d("underline",ce),ue=({open:m,onClose:u,selectedResourceIds:l,onResourcesChange:x})=>{const{resources:r}=S(),[o,y]=c.useState(""),[p,b]=c.useState(!1),[h,g]=c.useState("select"),j=r.filter(t=>t.title.toLowerCase().includes(o.toLowerCase())||t.description.toLowerCase().includes(o.toLowerCase())||t.tags.some(n=>n.toLowerCase().includes(o.toLowerCase()))),N=t=>{l.includes(t)?x(l.filter(n=>n!==t)):x([...l,t])},f=t=>{switch(t){case"tool":return e.jsx(Q,{className:"w-4 h-4"});case"template":return e.jsx(W,{className:"w-4 h-4"});case"guide":return e.jsx(F,{className:"w-4 h-4"})}},s=t=>{switch(t){case"beginner":return"bg-green-100 text-green-800 border-green-200";case"intermediate":return"bg-blue-100 text-blue-800 border-blue-200";case"advanced":return"bg-orange-100 text-orange-800 border-orange-200";case"expert":return"bg-red-100 text-red-800 border-red-200"}};return e.jsx(R,{open:m,onOpenChange:u,children:e.jsxs(_,{className:"max-w-4xl max-h-[80vh] overflow-y-auto",children:[e.jsxs(U,{children:[e.jsx(V,{children:"Add Resources to Step"}),e.jsx(A,{children:"Select existing resources or create a new one to attach to this step."})]}),e.jsxs(E,{value:h,onValueChange:t=>g(t),children:[e.jsxs($,{className:"grid w-full grid-cols-2",children:[e.jsx(L,{value:"select",children:"Select from Directory"}),e.jsx(L,{value:"create",children:"Create New Resource"})]}),e.jsxs(T,{value:"select",className:"space-y-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(B,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"}),e.jsx(D,{placeholder:"Search resources by title, description, or tags...",value:o,onChange:t=>y(t.target.value),className:"pl-10"})]}),l.length>0&&e.jsx(w,{className:"bg-blue-50 border-blue-200",children:e.jsx(C,{className:"pt-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:l.length})," resource",l.length!==1?"s":""," selected"]}),e.jsx(a,{variant:"ghost",size:"sm",onClick:()=>x([]),children:"Clear All"})]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:j.map(t=>{const n=l.includes(t.id);return e.jsxs(w,{className:`cursor-pointer transition-all hover:shadow-md ${n?"border-blue-500 border-2 bg-blue-50":""}`,onClick:()=>N(t.id),children:[e.jsx(H,{className:"pb-3",children:e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[e.jsx("div",{className:"text-2xl",children:t.thumbnailUrl}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx(M,{className:"text-base leading-tight mb-1",children:t.title}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap mt-1",children:[e.jsxs(v,{variant:"outline",className:"gap-1",children:[f(t.resourceType),e.jsx("span",{className:"capitalize",children:t.resourceType})]}),e.jsx(v,{variant:"secondary",className:s(t.difficulty),children:t.difficulty})]})]})]}),n&&e.jsx("div",{className:"bg-blue-500 text-white rounded-full p-1",children:e.jsx(q,{className:"w-4 h-4"})})]})}),e.jsxs(C,{className:"pt-0",children:[e.jsx(z,{className:"text-sm line-clamp-2 mb-2",children:t.description}),e.jsxs("div",{className:"flex flex-wrap gap-1 mt-2",children:[t.tags.slice(0,3).map(k=>e.jsx(v,{variant:"outline",className:"text-xs",children:k},k)),t.tags.length>3&&e.jsxs(v,{variant:"outline",className:"text-xs",children:["+",t.tags.length-3]})]})]})]},t.id)})}),j.length===0&&e.jsx(w,{className:"p-8 text-center",children:e.jsx("p",{className:"text-muted-foreground",children:"No resources found matching your search."})}),e.jsxs("div",{className:"flex justify-end gap-2 pt-4 border-t",children:[e.jsx(a,{variant:"outline",onClick:u,children:"Cancel"}),e.jsxs(a,{onClick:u,children:["Done (",l.length," selected)"]})]})]}),e.jsx(T,{value:"create",className:"space-y-4",children:e.jsxs(w,{children:[e.jsxs(H,{children:[e.jsx(M,{children:"Create New Resource"}),e.jsx(z,{children:"Add a new resource to the directory. It will be available for all challenges and steps."})]}),e.jsx(C,{children:e.jsx(X,{onNavigate:()=>{g("select")}})})]})})]})]})})},xe=({value:m,onChange:u,placeholder:l="Start typing...",className:x})=>{const r=c.useRef(null),o=c.useRef(!1),[y,p]=c.useState(!1),[b,h]=c.useState("");c.useEffect(()=>{r.current&&!o.current&&r.current.innerHTML!==m&&(r.current.innerHTML=m)},[m]);const g=()=>{r.current&&(o.current=!0,u(r.current.innerHTML),setTimeout(()=>{o.current=!1},0))},i=(s,t)=>{var n;document.execCommand(s,!1,t),(n=r.current)==null||n.focus(),g()},j=s=>{s.key==="Tab"&&(s.preventDefault(),i("insertHTML","&nbsp;&nbsp;&nbsp;&nbsp;"))},N=s=>{const t=/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,n=s.match(t);return n&&n[1]?`https://www.youtube.com/embed/${n[1]}`:s.includes("youtube.com/embed/")?s:null},f=()=>{if(b.trim()){const s=N(b.trim());if(s){const t=`<div class="video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; margin: 1em 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="${s}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;i("insertHTML",t),h(""),p(!1)}else alert("Please enter a valid YouTube URL (e.g., https://www.youtube.com/watch?v=...)")}};return e.jsxs("div",{className:P("border rounded-md overflow-hidden relative",x),children:[y&&e.jsx("div",{className:"absolute inset-0 bg-background/95 z-50 flex items-start justify-center p-4",children:e.jsxs("div",{className:"bg-card border rounded-lg p-4 w-full max-w-md shadow-lg mt-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"font-semibold",children:"Insert YouTube Video"}),e.jsx(a,{type:"button",variant:"ghost",size:"icon",onClick:()=>{p(!1),h("")},className:"h-8 w-8",children:e.jsx(Y,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(I,{htmlFor:"video-url",children:"YouTube URL"}),e.jsx(D,{id:"video-url",value:b,onChange:s=>h(s.target.value),placeholder:"https://www.youtube.com/watch?v=...",onKeyDown:s=>{s.key==="Enter"&&(s.preventDefault(),f())}}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Paste a YouTube video URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(a,{type:"button",variant:"outline",onClick:()=>{p(!1),h("")},children:"Cancel"}),e.jsx(a,{type:"button",onClick:f,children:"Insert Video"})]})]})]})}),e.jsxs("div",{className:"flex flex-wrap gap-1 p-2 border-b bg-muted/30",children:[e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("bold"),className:"h-8 w-8 p-0",title:"Bold (Ctrl+B)",children:e.jsx(ne,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("italic"),className:"h-8 w-8 p-0",title:"Italic (Ctrl+I)",children:e.jsx(le,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("underline"),className:"h-8 w-8 p-0",title:"Underline (Ctrl+U)",children:e.jsx(de,{className:"h-4 w-4"})}),e.jsx("div",{className:"w-px h-8 bg-border mx-1"}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("insertUnorderedList"),className:"h-8 w-8 p-0",title:"Bullet List",children:e.jsx(K,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("insertOrderedList"),className:"h-8 w-8 p-0",title:"Numbered List",children:e.jsx(oe,{className:"h-4 w-4"})}),e.jsx("div",{className:"w-px h-8 bg-border mx-1"}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("justifyLeft"),className:"h-8 w-8 p-0",title:"Align Left",children:e.jsx(ee,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("justifyCenter"),className:"h-8 w-8 p-0",title:"Align Center",children:e.jsx(J,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("justifyRight"),className:"h-8 w-8 p-0",title:"Align Right",children:e.jsx(se,{className:"h-4 w-4"})}),e.jsx("div",{className:"w-px h-8 bg-border mx-1"}),e.jsxs("select",{className:"h-8 px-2 text-sm border-0 bg-transparent rounded hover:bg-accent",onChange:s=>{i("formatBlock",s.target.value),s.target.value="p"},defaultValue:"p",children:[e.jsx("option",{value:"p",children:"Paragraph"}),e.jsx("option",{value:"h1",children:"Heading 1"}),e.jsx("option",{value:"h2",children:"Heading 2"}),e.jsx("option",{value:"h3",children:"Heading 3"}),e.jsx("option",{value:"h4",children:"Heading 4"})]}),e.jsx("div",{className:"w-px h-8 bg-border mx-1"}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>p(!0),className:"h-8 w-8 p-0",title:"Insert YouTube Video",children:e.jsx(O,{className:"h-4 w-4"})})]}),e.jsx("div",{ref:r,contentEditable:!0,onInput:g,onKeyDown:j,className:"min-h-[150px] p-3 focus:outline-none prose prose-sm max-w-none","data-placeholder":l,suppressContentEditableWarning:!0,style:{wordWrap:"break-word",overflowWrap:"break-word"}}),e.jsx("style",{children:`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: hsl(var(--muted-foreground));
          pointer-events: none;
          position: absolute;
        }
        [contenteditable] {
          outline: none;
        }
        [contenteditable] h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
        }
        [contenteditable] h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.75em 0;
        }
        [contenteditable] h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 0.83em 0;
        }
        [contenteditable] h4 {
          font-size: 1em;
          font-weight: bold;
          margin: 1.12em 0;
        }
        [contenteditable] p {
          margin: 1em 0;
        }
        [contenteditable] ul,
        [contenteditable] ol {
          margin: 1em 0;
          padding-left: 40px;
        }
        [contenteditable] li {
          margin: 0.5em 0;
        }
        [contenteditable] iframe {
          max-width: 100%;
        }
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          margin: 1em 0;
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `})]})};export{xe as R,ue as a};
