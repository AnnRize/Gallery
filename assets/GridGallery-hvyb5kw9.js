import{j as e,r as i}from"./index-Uyxxs5OI.js";import{_ as c,I as m}from"./ImageModal-QLi9pnXy.js";const g="_image_box_17q44_1",x={image_box:g},l=({imagesCount:n,setOpen:t,setImage:a})=>n.map(s=>e.jsx("div",{className:x.image_box,children:e.jsx("img",{src:`./img${s}.jpg`,onClick:()=>{t(!0),a({src:`./img${s}.jpg`,index:s})},loading:"lazy"})},s)),d="_container_zzsjc_1",_={container:d},u=()=>{const[n,t]=i.useState(!1),[a,s]=i.useState({src:"",index:NaN}),o=c.range(1,25),r=o.length;return e.jsxs("div",{className:_.container,children:[e.jsx(l,{imagesCount:o,setOpen:t,setImage:s}),e.jsx(m,{open:n,setOpen:t,image:a,setImage:s,imagesLength:r})]})};export{u as default};